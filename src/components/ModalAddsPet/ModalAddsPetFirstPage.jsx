import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import PetsIcon from '@mui/icons-material/Pets';
import { InputForm } from 'components/Input';
import scss from './ModalAddsPet.module.scss';
import { useTranslation } from 'react-i18next';

const stepOneValidationSchema = Yup.object({
  name: Yup.string().required('Required'),
  dateOfBirth: Yup.string()
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      'Incorrect date format'
    )
    .required('Required'),
  breed: Yup.string()
});

export const ModalAddsPetFirstPage = (props) => {
  const { t } = useTranslation();
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <div className={scss.container}>
      <button type="button" onClick={props.closeModal} className={scss.btnClose}>
        <PetsIcon />
      </button>
      <h3 className={scss.title}>{t('Add pet')}</h3>
      <div className={scss.wrapForm}>
        <Formik validationSchema={stepOneValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
          {() => (
            <Form className={scss.formFirst + ' ' + props.customStyle}>
              <label htmlFor="namePet" className={scss.label}>
                {t('Name pet')}
              </label>
              <div className={scss.inputWrapper}>
                <InputForm customStyle={scss.input} name="name" placeholder="Type name pet" />
                <ErrorMessage name="name" className={scss.error} component="p" />
              </div>

              <label htmlFor="dateOfBirth" className={scss.label}>
                {t('Date of birth')}
              </label>
              <div className={scss.inputWrapper}>
                <InputForm customStyle={scss.input} name="dateOfBirth" placeholder="Type date of birth" />
                <ErrorMessage name="dateOfBirth" className={scss.error} component="p" />
              </div>
              <label htmlFor="breed" className={scss.label}>
                {t('Breed')}
              </label>
              <div className={scss.inputWrapperLast}>
                <InputForm customStyle={scss.input_last} name="breed" placeholder="Type breed" />
                <ErrorMessage name="breed" className={scss.error} component="p" />
              </div>
              <div className={scss.btnWrap}>
                <button type="submit" className={scss.buttonFill}>
                  {t('Next')}
                </button>
                <button type="button" className={scss.buttonEmpty} onClick={props.closeModal}>
                  {t('Сancel')}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

// {/* <Button type="submit" className={scss.buttonFill + ' ' + props.customStyle} buttonName="Next"></Button>
//  <Button type="button" className={scss.buttonEmpty} buttonName="Cancel"></Button> */}
