import { Field, FieldBirthday } from '../Field';
import scss from './UserDataItem.module.scss';
// import sprite from '../../../images/symbol-defs.svg';
// import { useState } from 'react';

const UserDataItem = () => {
  // const [isUpdate, setIsUpdate] = useState(false);

  return (
    <>
      <ul className={scss.user__list}>
        <Field text="Name" value="Anna" type="text" />
        <Field text="Email" value="anna00@gmail.com" type="email" />
        <FieldBirthday text="Birthday" value="00.00.0000" />
        <Field text="Phone" value="+38000000000" />
        <Field text="City" value="Kiev" />
      </ul>
    </>
  );
};

export default UserDataItem;
