import { InputForm } from 'components/Input';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import sprite from '../../images/symbol-defs.svg';
import scss from './ModalAddsPet.module.scss';


const stepOneValidationSchema = Yup.object({
  namePet: Yup.string().required('Required'),
  birthDate: Yup.date().nullable().min(new Date(1900, 0, 1)),
  breed: Yup.string()
});

export const ModalAddsPetFirstPage = (props) => {
    const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <div className={scss.container}>
      <button type="button" onClick={props.closeModal} className={scss.btnClose}>
        <svg className={scss.crossSmall}>
          <use href={sprite + '#icon-blackCross'} />
        </svg>
      </button>
      <h3 className={scss.title}>Add pet</h3>
      <div className={scss.wrapForm}>
        <Formik validationSchema={stepOneValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
          {() => (
            <Form className={scss.formFirst + ' ' + props.customStyle}>
              <label htmlFor="namePet" className={scss.label}>
                Name pet
              </label>
              <InputForm customStyle={scss.input} name="namePet" placeholder="Type name pet" />
              <ErrorMessage name="namePet" />
              <label htmlFor="birthDate" className={scss.label}>
                Date of birth
              </label>
              <InputForm customStyle={scss.input} name="birthDate" placeholder="Type date of birth" />
              <ErrorMessage name="birthDate" />
              <label htmlFor="breed" className={scss.label}>
                Breed
              </label>
              <InputForm customStyle={scss.input_last} name="breed" placeholder="Type breed" />
              <ErrorMessage name="breed" />
              <div className={scss.btnWrap}>
                <button type="submit" className={scss.buttonFill}>
                  Next
                </button>
                <button type="button" className={scss.buttonEmpty} onClick={props.closeModal}>
                  Cancel
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
