import { Form, Formik, Field  } from 'formik';
import * as Yup from 'yup';
import scss from './ModalAddsPetSell.module.scss';

 const InputTextArea = ({type= "text", name, customStyle, placeholder}) => {
	return (
		<Field as="textarea" className={scss.input + " " + customStyle} name={name} type={type} placeholder={placeholder}/>
	)
}

const stepTwoValidationSchema = Yup.object({
  comment: Yup.string()
});

export const ModalAddsPetSellSecondPage = (props) => {
    const handleSubmit = (values) => {
      props.next(values, true);
      props.closeModal();
  };
  return (
    <div className={scss.container}>
      <button type="button" onClick={props.closeModal} className={scss.btnClose}>
        +
      </button>
      <h3 className={scss.titleFirst}>Add pet</h3>
      <div className={scss.wrapForm}>
        <Formik validationSchema={stepTwoValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
          {() => (
            <Form className={scss.formSecond + ' ' + props.customStyle}>
              <p className={scss.text}>Add photo and some comments</p>
              <button type="button" className={scss.btnAddPhoto}>
                +
              </button>
              <div className={scss.wrapTextarea}>
                <label className={scss.label}> Comments</label>
                <textarea className={scss.textarea} placeholder="Type comments"></textarea>
                <InputTextArea type="text" name="comments" placeholder="write a comment"/>
              </div>
              <div className={scss.btnWrap}>
                <button type="submit" className={scss.buttonFill}>
                  Done
                </button>
                <button type="button"  onClick={props.prev} className={scss.buttonEmpty}>
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