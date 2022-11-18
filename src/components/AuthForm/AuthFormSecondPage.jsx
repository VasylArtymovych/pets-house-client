import { InputForm } from 'components/Input';
import { ErrorMessage, Form, Formik } from 'formik';
import scss from './AuthForm.module.scss';
import Button from 'components/Button';
import scssButton from '../Button/Button.module.scss'
import { stepTwoValidationSchema } from 'services';
import { Link } from 'react-router-dom';

export const AuthFormSecondPage = props => {
	const handleSubmit = values => {
		props.next(values, true);
	};
	return (
		<div className={scss.container}>
			<Formik
				validationSchema={stepTwoValidationSchema}
				initialValues={props.data}
				onSubmit={handleSubmit}
			>
				{({ values }) => (
					<Form className={scss.form}>
						<h2 className={scss.title}>{props.title}</h2>
						<div className={scss.input__wrapper}>
							<InputForm
							autofocus='autofocus'
								name="name"
								type="name"
								placeholder="Name"
							/>
							<ErrorMessage
								name="name"
								component="p"
								className={scss.error}
							/>
						</div>
						<div className={scss.input__wrapper}>
							<InputForm
								
								placeholder="City, region"
								name="city"
								type="city"
							/>
							<ErrorMessage
								name="city"
								component="p"
								className={scss.error}
							/>
						</div>
						<div className={scss.input__wrapper_last}>
							<InputForm
								
								name="phone"
								type="phone"
								placeholder="Mobile phone"
							/>
							<ErrorMessage
								name="phone"
								component="p"
								className={scss.error}
							/>
						</div>
						<div className={scss.button__container} >
							<Button
								type="submit"
								customStyle={scssButton.button__auth_first}
								buttonName="Register"
								disabled={props.isLoading}
							/>
							<Button
								onClick={() => props.prev(values)}
								customStyle={scssButton.button__auth_last}
								buttonName="Back"
								
							/>
						</div>
						<p className={scss.redirect__auth}>
						Already have an account?
						<Link to='/login' className={scss.redirect_link__auth}>Login
            </Link>
						</p>
					</Form>
				)}
			</Formik>
		</div>
	);
};
