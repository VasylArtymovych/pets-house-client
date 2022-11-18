import { Field, FieldBirthday } from '../Field';
import scss from './UserDataItem.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/selectors.js';
import { useLogInMutation } from '../../../redux/fetchUser';

const UserDataItem = () => {
  const name = useSelector(selectors.getUserName);
  const id = useSelector(selectors.getUserId);
  const mail = useSelector(selectors.getUserEmail);
  const phone = useSelector(selectors.getUserPhone);
  const city = useSelector(selectors.getUserCity);

  // const token = useSelector(selectors.getToken);

  const [logIn] = useLogInMutation();
  // console.log('name:', name);
  // console.log('token:', token);

  const email = 'Maksim@gmail.com';
  const password = 'Maksim123456';

  useEffect(() => {
    logIn({ email, password });
  }, [logIn]);

  return (
    <>
      <ul className={scss.user__list}>
        <Field text="Name" type="text" name={name} id={id} />
        <Field text="Email" type="email" name={mail} id={id} />
        <FieldBirthday text="Birthday" value="00.00.0000" />
        <Field text="Phone" name={phone} id={id} />
        <Field text="City" name={city} id={id} />

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
