import * as Yup from 'yup';

export const stepOneValidationSchema = Yup.object({
  title: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  dateOfBirth: Yup.date().max(new Date(), "Are you a time traveler?!").required('Required'),
  breed: Yup.string().required('Required')
});

export const stepTwoValidationSchema = Yup.object({
  location: Yup.string().required('Required'),
  price: Yup.string(),
  comment: Yup.string()
});




