import { useState } from 'react';
import { Form, Formik } from 'formik';
import { Input, InputForm } from 'components/Input';
import sprite from 'images/symbol-defs.svg';
import scss from './ModalAddsPet.module.scss';
import DefaultAvatar from 'images/desctop/DefaultAvatar.png';
import { pet } from 'services';

export const ModalAddsPetSecondPage = (props) => {
  const [img, setImg] = useState(DefaultAvatar);
  const [file, setFile] = useState(null);

  const imageHandler = async (e) => {
    const fileUploaded = e.target.files[0];
    setImg(URL.createObjectURL(fileUploaded));
    setFile(fileUploaded);
  };

  const handleSubmit = ({ name, dateOfBirth, breed, comments }) => {
    const fileImg = new FormData();
    fileImg.append('name', name);
    fileImg.append('dateOfBirth', dateOfBirth);
    fileImg.append('breed', breed);
    fileImg.append('petImage', file);
    fileImg.append('comments', comments);

    props.next(fileImg, true);
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
        <Formik validationSchema={pet.stepTwoValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
          {() => (
            <Form encType="multipart/form-data" className={scss.formSecond + ' ' + props.customStyle}>
              <p className={scss.text}>Add photo and some comments</p>
              <button type="button" className={scss.btnAddPhoto}>
                {!file ? (
                  <svg className={scss.crossBig}>
                    <use href={sprite + '#icon-blackCross'} />
                  </svg>
                ) : (
                  <img className={scss.avatar__img} src={img} alt="avatar" />
                )}
                <Input customStyle={scss.input_photo} type="file" accept="image/*" onChange={(e) => imageHandler(e)} />
              </button>

              <div className={scss.wrapTextarea}>
                <label className={scss.label}> Comments</label>
                <InputForm customStyle={scss.textarea} name="comments" as="textarea" placeholder="Min 8, max 120 characters" />
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
