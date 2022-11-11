import { AuthFormFirstPage, AuthFormSecondPage } from 'components/AuthForm';
import React, { useState } from 'react';

const Register = () => {

  	const [data, setData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		name: '',
		city: '',
		phone: '',
	});
	const [page, setPage] = useState(0);

	const formTitles = ['Registration', 'Personal Info'];

  const makeRequest = (formData) => {
    console.log("Submiting", formData)
  }

	const handleNextStep = (newData, final = false) => {
		setData(prev => ({ ...prev, ...newData }));
    setPage(prev => prev + 1);
    
    if(final){
      makeRequest(newData)
      return
    }
	};

	const handlePrevStep = newData => {
		setData(prev => ({ ...prev, ...newData }));
		setPage(prev => prev - 1);
	};

	const steps = [
		<AuthFormFirstPage next={handleNextStep} data={data} title={formTitles[page]} />,
		<AuthFormSecondPage prev={handlePrevStep} next={handleNextStep} data={data} title={formTitles[page]} />,
	];

	console.log('data', data);

	return <>{steps[page]}</>;
};




export default Register;

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperation';

// const theme = createTheme();

// const SignUp = () => {
// 	const dispatch = useDispatch();

// 	const handleSubmit = event => {
// 		event.preventDefault();
// 		const data = new FormData(event.currentTarget);
// 		dispatch(
// 			register({
// 				name: data.get('name'),
// 				email: data.get('email'),
// 				password: data.get('password'),
// 			})
// 		);
// 	};

// 	return (
// 		<ThemeProvider theme={theme}>
// 			<Container component="main" maxWidth="xs">
// 				<CssBaseline />
// 				<Box
// 					sx={{
// 						marginTop: 8,
// 						display: 'flex',
// 						flexDirection: 'column',
// 						alignItems: 'center',
// 					}}
// 				>
// 					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
// 						<LockOutlinedIcon />
// 					</Avatar>
// 					<Typography component="h1" variant="h5">
// 						Sign up
// 					</Typography>
// 					<Box
// 						component="form"
// 						noValidate
// 						onSubmit={handleSubmit}
// 						sx={{ mt: 3 }}
// 					>
// 						<Grid container spacing={2}>
// 							<Grid item xs={12}>
// 								<TextField
// 									autoComplete="name"
// 									name="name"
// 									required
// 									fullWidth
// 									id="name"
// 									label="Name"
// 									autoFocus
// 								/>
// 							</Grid>
// 							<Grid item xs={12}>
// 								<TextField
// 									required
// 									fullWidth
// 									id="email"
// 									label="Email Address"
// 									name="email"
// 									autoComplete="email"
// 								/>
// 							</Grid>
// 							<Grid item xs={12}>
// 								<TextField
// 									required
// 									fullWidth
// 									name="password"
// 									label="Password"
// 									type="password"
// 									id="password"
// 									autoComplete="new-password"
// 								/>
// 							</Grid>
// 						</Grid>
// 						<Button
// 							type="submit"
// 							fullWidth
// 							variant="contained"
// 							sx={{ mt: 3, mb: 2 }}
// 						>
// 							Sign Up
// 						</Button>
// 					</Box>
// 				</Box>
// 			</Container>
// 		</ThemeProvider>
// 	);
// }

// export default SignUp;
