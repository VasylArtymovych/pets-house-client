import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { InputForm } from 'components/Input';
import sprite from '../../images/symbol-defs.svg';
import scss from './ModalAddsPetSell.module.scss';

const stepTwoValidationSchema = Yup.object({
  location: Yup.string(),
  price: Yup.string(),
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
        <svg className={scss.crossSmall}>
          <use href={sprite + '#icon-blackCross'} />
        </svg>
      </button>
      <h3 className={scss.titleSecond}>Add pet</h3>
      <div className={scss.wrapForm}>
        <Formik validationSchema={stepTwoValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
          {() => (
            <Form className={scss.formSecond + ' ' + props.customStyle}>
              <div className={scss.wrapRadio}>
                <p className={scss.textIcon}>
                  The sex<span className={scss.mark}>*</span>:
                </p>
                <div className={scss.wrapIcon}>
                  <Field className={scss.radioInput} name="gender" type="radio" id="male" value="male" />
                  <label htmlFor="male" className={scss.labelGender + ' ' + scss.activGender}>
                    <svg className={scss.icon}>
                      <use href={sprite + '#icon-male'} />
                    </svg>
                    Male
                  </label>

                  <Field className={scss.radioInput} name="gender" type="radio" id="female" value="female" />
                  <label htmlFor="female" className={scss.labelGender + ' ' + scss.activGender}>
                    <svg className={scss.icon}>
                      <use href={sprite + '#icon-female'} />
                    </svg>
                    Female
                  </label>
                </div>
              </div>

              <label htmlFor="locations" className={scss.label}>
                Location<span className={scss.mark}>*</span>:
              </label>
              <InputForm customStyle={scss.input} name="locations" placeholder="Type name pet" />
              <ErrorMessage name="locations" />

              {props.data.category === 'sell' && (
                <div>
                  <label htmlFor="price" className={scss.label}>
                    Price<span className={scss.mark}>*</span>:
                  </label>
                  <InputForm customStyle={scss.input} name="price" placeholder="Type date of birth" />
                  <ErrorMessage name="price" />
                </div>
              )}

              <p className={scss.label}>Load the pet’s image:</p>
              <button type="button" className={scss.btnAddPhoto}>
                {/* <svg className={scss.iconBigPlus}>
                    <use href={sprite + '#icon-bigPlus'} />
                </svg> */}
                <InputForm customStyle={scss.input_photo} name="photo" type="file" />
              </button>
              <div className={scss.wrapTextarea}>
                <label className={scss.label}> Comments</label>
                <InputForm customStyle={scss.textarea} name="comments" as="textarea" placeholder="Type comments" />
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


