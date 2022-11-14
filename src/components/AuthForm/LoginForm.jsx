import { InputForm } from 'components/Input';
import { ErrorMessage, Form, Formik } from 'formik';
import scss from './AuthForm.module.scss';
import * as Yup from 'yup';
import Button from 'components/Button';

const stepOneValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required')
});

export const LoginForm = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
    // logIn({values})
  };
  return (
    <div className={scss.container}>
      <Formik validationSchema={stepOneValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
        {() => (
          <Form className={scss.form + ' ' + props.customStyle}>
            {/* <h2 className={scss.title}>{nameUser}</h2> */}
            <h2 className={scss.title}>{props.title}</h2>
            <InputForm customStyle={scss.input__auth} name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" />
            <InputForm customStyle={scss.input__auth_last} name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" />

            <div>
              <Button type="submit" className={scss.button__auth} buttonName="Login"></Button>
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
