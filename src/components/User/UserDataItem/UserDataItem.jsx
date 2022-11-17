import { Field, FieldBirthday } from '../Field';
import scss from './UserDataItem.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/selectors.js';
// import { useLogInMutation } from '../../../redux/fetchUser';

const UserDataItem = () => {
  const [info, setInfo] = useState('');

  const name = useSelector(selectors.getUserName);
  const id = useSelector(selectors.getUserId);
  const mail = useSelector(selectors.getUserEmail);
  const phone = useSelector(selectors.getUserPhone);
  const city = useSelector(selectors.getUserCity);

  // const token = useSelector(selectors.getToken);

  // const [logIn] = useLogInMutation();
  // // console.log('name:', name);
  // // console.log('token:', token);
  // const email = 'ivika@gmail.com';
  // const password = 'ivika123456';
  // // const email = 'Maksim@gmail.com';
  // // const password = 'Maksim123456';

  // useEffect(() => {
  //   logIn({ email, password });
  // }, [logIn]);
  // // logIn
  // useEffect,
  const infoHandle = (e) => {
    setInfo(e);
  };

  return (
    <>
      <ul className={scss.user__list}>
        <Field text="Name" type="text" name={name} id={id} onInfoHandle={infoHandle} />
        <Field text="Email" type="email" name={mail} id={id} onInfoHandle={infoHandle} />
        <FieldBirthday text="Birthday" value="00.00.0000" onInfoHandle={infoHandle} />
        <Field text="Phone" name={phone} id={id} onInfoHandle={infoHandle} />
        <Field text="City" name={city} id={id} onInfoHandle={infoHandle} />

        {/* <Field text="Name" type="text" name="Anna" />
        <Field text="Email" type="email" name="anna00@gmail.com|" />
        <FieldBirthday text="Birthday" />
        <Field text="Phone" name="+38000000000" />
        <Field text="City" name="Kiev" /> */}
      </ul>
    </>
  );
};

export default UserDataItem;
