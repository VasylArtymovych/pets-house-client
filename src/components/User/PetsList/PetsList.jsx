import CetUser from '../../../images/desctop/CetUser.png';
import sprite from '../../../images/symbol-defs.svg';
import scss from './PetsList.module.scss';

const PetsList = () => {
  return (
    <>
      <li className={scss.pets__item}>
        <img className={scss.pets__animal} src={CetUser} alt="pet" />
        <div className={scss.pats__btns}>
          <button className={scss.pats__btn} type="button">
            <svg className={scss.pets__svg}>
              <use href={sprite + '#icon-profilePencil'} />
            </svg>
          </button>
          <button className={scss.pats__btn} type="button">
            <svg className={scss.pets__svg}>
              <use href={sprite + '#icon-remov-pets'} />
            </svg>
          </button>
        </div>
        <ul className={scss.pets__list}>
          <li className={scss.pets__items}>
            <p>
              Name: <span className={scss.pets__info}>Jack</span>
            </p>
          </li>
          <li className={scss.pets__items}>
            <p>
              Date of birth: <span className={scss.pets__info}>22.04.2018</span>
            </p>
          </li>
          <li className={scss.pets__items}>
            <p>
              Breed: <span className={scss.pets__info}>22.04.2018</span>
            </p>
          </li>
          <li className={scss.pets__items}>
            <p>
              Comments:
              <span className={scss.pets__info}>
                Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                dolor sit amet, consectetur
              </span>
            </p>
          </li>
        </ul>
      </li>

      <li className={scss.pets__item}>
        <img className={scss.pets__animal} src={CetUser} alt="pet" />
        <div className={scss.pats__btns}>
          <button className={scss.pats__btn} type="button">
            <svg className={scss.pets__svg}>
              <use href={sprite + '#icon-profilePencil'} />
            </svg>
          </button>
          <button className={scss.pats__btn} type="button">
            <svg className={scss.pets__svg}>
              <use href={sprite + '#icon-remov-pets'} />
            </svg>
          </button>
        </div>
        <ul>
          <li className={scss.pets__items}>
            <p>
              Name: <span className={scss.pets__info}>Jack</span>
            </p>
          </li>
          <li className={scss.pets__items}>
            <p>
              Date of birth: <span className={scss.pets__info}>22.04.2018</span>
            </p>
          </li>
          <li className={scss.pets__items}>
            <p>
              Breed: <span className={scss.pets__info}>22.04.2018</span>
            </p>
          </li>
          <li className={scss.pets__items}>
            <p>
              Comments:
              <span className={scss.pets__info}>
                Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              </span>
            </p>
          </li>
        </ul>
      </li>
    </>
  );
};

export default PetsList;
