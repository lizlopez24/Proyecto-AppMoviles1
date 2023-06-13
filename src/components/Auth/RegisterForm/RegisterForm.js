import React, {useState} from 'react'
import { View } from 'react-native';
import { Input, Icon, Button } from '@rneui/themed';
import { styles } from './RegisterForm.styles';
import { useFormik } from 'formik';
import {initialValues} from "./RegisterForm.data";
import { validationSchema } from './RegisterForm.data';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils/screenName';
import  Toast from 'react-native-toast-message';

const RegisterForm= () => {
    const navigation=useNavigation();

    const [showPassword,setShowPassword]=useState(false);

    const formik=useFormik({
        initialValues:initialValues(),
        validationSchema:validationSchema(),
        validateOnChange:false,
        onSubmit: async (formValue)=>{
            try{
              const auth=getAuth();
              await createUserWithEmailAndPassword(
                auth,
                formValue.email,
                formValue.password
              );
              navigation.navigate(screen.account.account);
            }catch(error){
              console.log(error)
              Toast.show({
                type: "error",
                position: "top",
                text1: "Error en el registro",
                text2: "Inténtelo de nuevo",
              });
            }
        }
    });

    const showHiddenPassword=()=>{
        setShowPassword(!showPassword);
    };

  return (
    <View style={styles.content}>
      <Input 
      placeholder='Correo electrónico'
      containerStyle={styles.input}
      rightIcon={<Icon type='material-community' name='at'iconStyle={styles.icon}/>}
      onChangeText={(text)=>formik.setFieldValue("email",text)}
      errorMessage={formik.errors.email}
      />
      <Input 
      placeholder='Contraseña'
      containerStyle={styles.input}
      secureTextEntry={showPassword==true ? false : true}
      rightIcon={
      <Icon 
      type='material-community' 
      name={showPassword ? "eye-outline" : "eye-off-outline"} 
      iconStyle={styles.icon}
      onPress={showHiddenPassword} />}
      onChangeText={(text)=>formik.setFieldValue("password",text)}
      errorMessage={formik.errors.password}
      />
      <Input 
      placeholder='Confirmar Contraseña'
      containerStyle={styles.input}
      secureTextEntry={showPassword==true ? false : true}
      rightIcon={
      <Icon 
      type='material-community' 
      name={showPassword ? "eye-outline" : "eye-off-outline"} 
      iconStyle={styles.icon}
      onPress={showHiddenPassword} />}
      onChangeText={(text)=>formik.setFieldValue("passwordConfirm",text)}
      errorMessage={formik.errors.passwordConfirm}
      />
      <Button title="Registrarse" 
      containerStyle={styles.btnContainer}
      buttonStyle={styles.btnRegister}
      onPress={formik.handleSubmit}
      loading={formik.isSubmitting}
      />
    </View>
  )
}

export default RegisterForm;