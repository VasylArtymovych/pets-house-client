import { Field, FieldBirthday } from '../Field';
import scss from './UserDataItem.module.scss';
import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/selectors.js';

const UserDataItem = () => {
  const name = useSelector(selectors.getUserName);
  const mail = useSelector(selectors.getUserEmail);
  const phone = useSelector(selectors.getUserPhone);
  const city = useSelector(selectors.getUserCity);
  const birthday = useSelector(selectors.getUserBirthday);

  return (
    <>
      <ul className={scss.user__list}>
        <Field text="name" type="text" value={name} o />
        <Field text="email" type="email" value={mail} />
        <FieldBirthday text="Birthday" value={birthday} />
        <Field text="phone" value={phone} />
        <Field text="city" value={city} />
      </ul>
    </>
  );
};

export default UserDataItem;
