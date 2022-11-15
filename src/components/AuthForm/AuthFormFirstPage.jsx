import { InputForm } from 'components/Input';
import { ErrorMessage, Form, Formik } from 'formik';
import scss from './AuthForm.module.scss';
import * as Yup from 'yup';
import Button from 'components/Button';

const stepOneValidationSchema = Yup.object({
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string().required('Password is required').min(7),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Confirm password is required'),
});

export const AuthFormFirstPage = props => {
	const handleSubmit = values => {
		props.next(values, true);
	};
	return (
		<div className={scss.container}>
			<Formik
				validationSchema={stepOneValidationSchema}
				initialValues={props.data}
				onSubmit={handleSubmit}
			>
				{() => (
					<Form className={scss.form + ' ' + props.customStyle}>
						<h2 className={scss.title}>{props.title}</h2>
						<div className={scss.input__wrapper}>
							<InputForm
              autofocus='autofocus'
								name="email"
								type="email"
								placeholder="Email"
							/>
							<ErrorMessage
								name="email"
								component="p"
								className={scss.error}
							/>
						</div>
						<div className={scss.input__wrapper}>
							<InputForm
								name="password"
								type="password"
								placeholder="Password"
							/>
							<ErrorMessage
								name="password"
								component="p"
								className={scss.error}
							/>
						</div>
						<div className={scss.input__wrapper_last}>
							<InputForm
								name="confirmPassword"
								type="password"
								placeholder="Confirm Password"
							/>
							<ErrorMessage
								name="confirmPassword"
								component="p"
								className={scss.error}
							/>
						</div>
						<div>
							<Button
								type="submit"
								className={scss.button__auth}
								buttonName="Next"
							></Button>
						</div>
						<p className={scss.redirect__auth}>
						Already have an account?
							<a
								className={scss.redirect_link__auth}
								href="/login"
							>
								Login
							</a>
						</p>
					</Form>
				)}
			</Formik>
		</div>
	);
};

// export default AuthFormFirstPage;
