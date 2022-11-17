import * as Yup from 'yup';

const stepOneValidationSchema = Yup.object({
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string().required('Password is required').min(7),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Confirm password is required'),
});

const stepTwoValidationSchema = Yup.object({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(70, 'Too Long!')
		.required('Name is required')
		.label('Name')
    .matches(/^[a-zA-Z]+$/ , 'Is not in correct format'),
	city: Yup.string().label('City').required('City, region is required'),
	phone: Yup.string().required('Mobile phone is required').label('Mobile phone').matches(/^\+380\d{9}$/ , 'Correct format: +380 98 111 11 11'),
});

export {stepOneValidationSchema, stepTwoValidationSchema}