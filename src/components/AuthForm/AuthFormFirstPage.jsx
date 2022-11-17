import { InputForm } from 'components/Input';
import { ErrorMessage, Form, Formik } from 'formik';
import scss from './AuthForm.module.scss';
import Button from 'components/Button';
import { stepOneValidationSchema } from 'services';

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
						<div className={scss.button__container}>
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

