import { InputForm } from 'components/Input';
import { ErrorMessage, Form, Formik } from 'formik';
import scss from './AuthForm.module.scss';
import * as Yup from 'yup';
import Button from 'components/Button';

const stepOneValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export const AuthFormFirstPage = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <div className={scss.container}>
      <Formik validationSchema={stepOneValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
        {() => (
          <Form className={scss.form + ' ' + props.customStyle}>
            <h2 className={scss.title}>{props.title}</h2>
            <InputForm customStyle={scss.input__auth} name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" />
            <InputForm customStyle={scss.input__auth} name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" />
            <InputForm customStyle={scss.input__auth_last} name="confirmPassword" type="confirmPassword" placeholder="Confirm Password" />
            <ErrorMessage name="confirmPassword" />
            <div>
              <Button type="submit" className={scss.button__auth} buttonName="Next"></Button>
            </div>
            <p className={scss.redirect__auth}>
              Don't have an account?
              <a className={scss.redirect_link__auth} href="/register">
                Register
              </a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// export default AuthFormFirstPage;
