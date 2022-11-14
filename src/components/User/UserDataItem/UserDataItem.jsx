import scss from './UserDataItem.module.scss';
import sprite from '../../../images/symbol-defs.svg';
import { useState } from 'react';
import { Input } from 'components/Input';

const UserDataItem = () => {
  const [isUpdate, setIsUpdate] = useState(false);

  const handleUpdateTodo = () => {
    setIsUpdate(true);
  };

  return (
    <>
      <ul className={scss.list}>
        <li className={scss.items}>
          <p>Name:</p>
          {isUpdate ? (
            <>
              <Input customStyle={scss.input__change} />
              <button className={scss.check__btn} type="button" onClick={() => setIsUpdate(false)}>
                <svg className={scss.icon__profileCheckMark}>
                  <use href={sprite + '#icon-profileCheckMark'} />
                </svg>
              </button>
            </>
          ) : (
            <>
              <span className={scss.items_info}>Anna</span>
              <button className={scss.changebtn} onClick={handleUpdateTodo}>
                <svg className={scss.icon__profilePencil}>
                  <use href={sprite + '#icon-profilePencil'} />
                </svg>
              </button>
            </>
          )}
        </li>
        <li className={scss.items}>
          <p>Email:</p>
          <span className={scss.items_info}>anna00@gmail.com</span>
          <button className={scss.changebtn}>
            <svg className={scss.icon__profilePencil}>
              <use href={sprite + '#icon-profilePencil'} />
            </svg>
          </button>
        </li>
        <li className={scss.items}>
          <p>Birthday:</p>
          <span className={scss.items_info}>00.00.0000</span>
          <button className={scss.changebtn}>
            <svg className={scss.icon__profilePencil}>
              <use href={sprite + '#icon-profilePencil'} />
            </svg>
          </button>
        </li>
        <li className={scss.items}>
          <p>Phone:</p>
          <span className={scss.items_info}>+38000000000</span>
          <button className={scss.changebtn}>
            <svg className={scss.icon__profilePencil}>
              <use href={sprite + '#icon-profilePencil'} />
            </svg>
          </button>
        </li>
        <li className={scss.items}>
          <p>City:</p>
          <span className={scss.items_info}>Kiev</span>
          <button className={scss.changebtn}>
            <svg className={scss.icon__profilePencil}>
              <use href={sprite + '#icon-profilePencil'} />
            </svg>
          </button>
        </li>
      </ul>
    </>
  );
};

export default UserDataItem;
