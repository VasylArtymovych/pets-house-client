import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { InputForm } from 'components/Input';
import sprite from '../../images/symbol-defs.svg';
import scss from './ModalAddsPet.module.scss';

const stepTwoValidationSchema = Yup.object({
  comment: Yup.string()
});

export const ModalAddsPetSecondPage = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
    props.closeModal();
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
        <Formik validationSchema={stepTwoValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
          {() => (
            <Form className={scss.formSecond + ' ' + props.customStyle}>
              <p className={scss.text}>Add photo and some comments</p>
              <button type="button" className={scss.btnAddPhoto}>
               
                <InputForm customStyle={scss.input_photo}  name="photo" type="file" />
              </button>
              <div className={scss.wrapTextarea}>
                <label className={scss.label}> Comments</label>
                <InputForm customStyle={scss.textarea} name="comments" as="textarea" placeholder="Type comments"/>
              </div>
              <div className={scss.btnWrap}>
                <button type="submit" className={scss.buttonFill}>
                  Done
                </button>
                <button type="button" onClick={props.prev} className={scss.buttonEmpty}>
                  Back
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

