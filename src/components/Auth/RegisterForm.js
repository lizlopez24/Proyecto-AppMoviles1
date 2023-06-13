import React, {useState} from 'react'
import { View } from 'react-native';
import { Input, Icon, Button } from '@rneui/themed';
import { styles } from './RegisterForm.styles';
import { useFormik } from 'formik';
import {initialValues} from "./RegisterForm.data";
import { validationSchema } from './RegisterForm.data';

const RegisterForm= () => {
    const [showPassword,setShowPassword]=useState(false);

    const formik=useFormik({
        initialValues:initialValues(),
        validationSchema:validationSchema(),
        onSubmit:(formValue)=>{
            console.log("Formulario");
            console.group(formValue)
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
      />
    </View>
  )
}

export default RegisterForm;