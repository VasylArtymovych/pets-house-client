import { InputForm } from 'components/Input';
import { ErrorMessage, Form, Formik } from 'formik';
import scss from './AuthForm.module.scss';
import * as Yup from 'yup';

const stepTwoValidationSchema = Yup.object({
  name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required').label('Name'),
  city: Yup.string().label('City'),
  phone: Yup.string().required().label('Mobile phone')
});

export const AuthFormSecondPage = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <div className={scss.container}>
      <Formik validationSchema={stepTwoValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className={scss.form + ' ' + props.customStyle}>
            <h2 className={scss.title}>{props.title}</h2>
            <InputForm customStyle={scss.input__auth} name="name" type="name" placeholder="Name" />
            <ErrorMessage name="name" />
            <InputForm customStyle={scss.input__auth} placeholder="City, region" name="city" type="city" />
            <ErrorMessage name="city" />
            <InputForm customStyle={scss.input__auth_last} name="phone" type="phone" placeholder="Mobile phone" />
            <ErrorMessage name="phone" />
            <div>
              <button onClick={() => props.prev(values)} className={scss.button__auth}>
                Back
              </button>
              <button type="submit" className={scss.button__auth}>
                Submit
              </button>
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
