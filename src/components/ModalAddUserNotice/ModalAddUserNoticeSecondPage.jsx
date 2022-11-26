import { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import PetsIcon from '@mui/icons-material/Pets';
import { Input, InputForm } from 'components/Input';
import sprite from '../../images/symbol-defs.svg';
import scss from './ModalAddUserNotice.module.scss';
import { notice } from 'services';

export const ModalAddUserNoticeSecondPage = (props) => {
  const { t } = useTranslation();
  const [img, setImg] = useState();
  const [file, setFile] = useState(null);

  const imageHandler = async (e) => {
    const fileUploaded = e.target.files[0];
    setImg(URL.createObjectURL(fileUploaded));
    setFile(fileUploaded);
  };

  const handleSubmit = ({ title, name, dateOfBirth, breed, location, price, comments, category, sex }) => {
    const fileImg = new FormData();
    fileImg.append('title', title);
    fileImg.append('name', name);
    fileImg.append('dateOfBirth', dateOfBirth);
    fileImg.append('breed', breed);
    fileImg.append('location', location);
    price && fileImg.append('price', price);
    fileImg.append('petImage', file);
    fileImg.append('comments', comments);
    fileImg.append('category', category);
    fileImg.append('sex', sex);

    props.next(fileImg, true);
    props.closeModal();
  };

  return (
    <div className={scss.container}>
      <button type="button" onClick={props.closeModal} className={scss.btnClose}>
        <PetsIcon />
      </button>
      <h3 className={scss.titleSecond}>{t('Add pet')}</h3>
      <div className={scss.wrapForm}>
        <Formik validationSchema={notice.stepTwoValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
          {() => (
            <Form className={scss.formSecond + ' ' + props.customStyle}>
              <div className={scss.wrapRadio}>
                <p className={scss.textIcon}>
                  {t('The sex')}
                  <span className={scss.mark}>*</span>:
                </p>
                <div className={scss.wrapIcon}>
                  <Field className={scss.radioInput} name="sex" type="radio" id="male" value="male" />
                  <label htmlFor="male" className={scss.labelGender + ' ' + scss.activGender}>
                    <svg className={scss.icon}>
                      <use href={sprite + '#icon-male'} />
                    </svg>
                    {t('Male')}
                  </label>

                  <Field className={scss.radioInput} name="sex" type="radio" id="female" value="female" />
                  <label htmlFor="female" className={scss.labelGender + ' ' + scss.activGender}>
                    <svg className={scss.icon}>
                      <use href={sprite + '#icon-female'} />
                    </svg>
                    {t('Female')}
                  </label>
                </div>
              </div>

              <label htmlFor="location" className={scss.label}>
                {t('Location')}
                <span className={scss.mark}>*</span>:
              </label>
              <div className={scss.inputWrapper}>
                <InputForm customStyle={scss.input} name="location" placeholder="City, Region" />
                <ErrorMessage name="location" className={scss.error} component="p" />
              </div>
              {props.data.category === 'sell' && (
                <>
                  <label htmlFor="price" className={scss.label}>
                    {t('Price')}
                    <span className={scss.mark}>*</span>:
                  </label>
                  <div className={scss.inputWrapper}>
                    <InputForm customStyle={scss.input} name="price" placeholder="Not start with 0" />
                    <ErrorMessage name="price" />
                  </div>
                </>
              )}

              <p className={scss.label}>{t('Load the pet’s image:')}</p>
              <button type="button" className={scss.btnAddPhoto}>
                {!file ? (
                  <svg className={scss.crossBig}>
                    <use href={sprite + '#icon-blackCross'} />
                  </svg>
                ) : (
                  <img className={scss.avatar__img} src={img} alt="avatar" />
                )}
                <Input customStyle={scss.input_photo} name="petImage" type="file" accept="image/*" onChange={(e) => imageHandler(e)} />
              </button>
              <div className={scss.wrapTextarea}>
                <label className={scss.label}>{t('Comments')}</label>
                <InputForm customStyle={scss.textarea} name="comments" as="textarea" placeholder="Min 8, max 48 characters" />
              </div>
              <div className={scss.btnWrap}>
                <button type="submit" className={scss.buttonFill}>
                  {t('Done')}
                </button>
                <button type="button" onClick={props.prev} className={scss.buttonEmpty}>
                  {t('Back')}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
