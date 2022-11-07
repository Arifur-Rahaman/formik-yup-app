import { Button, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useFormik } from 'formik';
import * as yup from 'yup'
import './App.css';
function App() {
  const formik = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: yup.object({
      firstName: yup.string().max(15, "Must be 15 characters or less").required("Required"),
      lastName: yup.string().max(15, "Must be 15 characters or less").required("Required"),
      email: yup.string().email("Invalid email address").required("Required"),
      password: yup.string().min(6, "Password is too short").required("Required"),
      confirmPassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password'), null], "Passwords doesn't match")
    }),
    onSubmit: (values)=>{
      console.log('submitted')
    }
  })
  const {values, handleChange, handleSubmit, errors, handleBlur, touched} = formik
  const {firstName, lastName, email, password, confirmPassword} = values
  return (
    <Container maxWidth='md' sx={{p: '30px'}}>
      <Grid container rowSpacing={2} component='form' onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <TextField
            placeholder='First Name'
            label='First Name'
            size='small'
            name = 'firstName'
            value={firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error = {touched.firstName && errors.firstName?.length>0}
            helperText = {errors.firstName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder='Last Name'
            label='Last Name'
            size='small'
            name = 'lastName'
            value={lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error = {touched.lastName && errors.lastName?.length>0}
            helperText = {errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder='Email'
            label='Email'
            size='small'
            name = 'email'
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            error = {touched.email && errors.email?.length>0}
            helperText = {errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder='Password'
            label='Password'
            type='password'
            size='small'
            name = 'password'
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            error = {touched.password && errors.password?.length>0}
            helperText = {errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder='Confirm Password'
            label='Confirm Password'
            type='password'
            size='small'
            name = 'confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error = {touched.confirmPassword && errors.confirmPassword?.length>0}
            helperText = {errors.confirmPassword}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' size='small' type='submit'>Submit</Button>
        </Grid>
      </Grid>
    </Container>

  );
}

export default App;
