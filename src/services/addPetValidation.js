import * as Yup from 'yup';

export const stepOneValidationSchema = Yup.object({
  name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Required'),
  dateOfBirth: Yup.string()
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      'Incorrect date format'
    )
    .required('Required'),
  breed: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!')
});

export const stepTwoValidationSchema = Yup.object({
  comments: Yup.string().min(8, 'Too Short!').max(120, 'Too Long!').required('Required')
});