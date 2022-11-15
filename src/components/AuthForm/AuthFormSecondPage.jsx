import { InputForm } from 'components/Input';
import { ErrorMessage, Form, Formik } from 'formik';
import scss from './AuthForm.module.scss';
import * as Yup from 'yup';
import Button from 'components/Button';

const stepTwoValidationSchema = Yup.object({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(70, 'Too Long!')
		.required('Required')
		.label('Name')
    .matches(/^[a-zA-Z]+$/ , 'Is not in correct format'),
	city: Yup.string().label('City').required('Required'),
	phone: Yup.string().required('Required').label('Mobile phone').matches(/^\+380\d{9}$/ , 'Correct format: +380 98 111 11 11'),
});

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
					<Form className={scss.form + ' ' + props.customStyle}>
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
						<div >
							<Button
								type="submit"
								className={scss.button__auth}
								buttonName="Register"
								disabled={props.isLoading}
							></Button>
							<Button
								onClick={() => props.prev(values)}
								className={scss.button__auth}
								buttonName="Back"
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
