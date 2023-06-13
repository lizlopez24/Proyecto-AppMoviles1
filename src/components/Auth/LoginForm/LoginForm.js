import React, {useState} from 'react'
import { View } from 'react-native';
import { Input, Icon, Button } from '@rneui/themed';
import { styles } from './LoginForm.styles';
import { useFormik } from 'formik';
import { initialValues } from './LoginForm.data';
import { validationSchema } from './LoginForm.data';

const LoginForm=()=> {
    const [showPassword, setShowPassword]=useState(false);

    const formik=useFormik({
        initialValues:initialValues(),
        validationSchema:validationSchema(),
        validateOnChange:false,
        onSubmit:(formValue)=>{
            console.log("Formulario");
            console.group(formValue)
        }
    })

    const showHiddenPassword=()=>{
        setShowPassword(!showPassword);
    };

  return (
    <View style={styles.contain}>
      <Input 
      placeholder='Correo electrónico'
      containerStyle={styles.input}
      rightIcon={
        <Icon 
        type='material-community' 
        name='at'
        iconStyle={styles.icon}
      />}
      onChangeText={(text)=>formik.setFieldValue("email",text)}
      errorMessage={formik.errors.email}
      />
      <Input
        placeholder='Contraseña'
        containerStyle={styles.input}
        rightIcon={
        <Icon 
        type='material-community' 
        name={showPassword ? "eye-off-outline" : "eye-outline"}
        iconStyle={styles.icon}
        onPress={showHiddenPassword}
        />}
        onChangeText={(text)=>formik.setFieldValue("password",text)}
        errorMessage={formik.errors.password}
      />
      <Button
      title="Iniciar sesión"
      containerStyle={styles.btnContainer}
      buttonStyle={styles.btnLogin}
      onPress={formik.handleSubmit}
      />
    </View>
  )
}

export default LoginForm;