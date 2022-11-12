import scss from './PetsData.module.scss';
import CetUser from '../../../images/desctop/CetUser.png';
import sprite from '../../../images/symbol-defs.svg';

const PetsData = () => {
  return (
    <ul className={scss.pets__container}>
      <li className={scss.pets__item}>
        <img className={scss.pets__animal} src={CetUser} alt="pet" />
        <div className={scss.pats__btns}>
          <button className={scss.pats__btn} type="button">
            <svg className={scss.pets__svg}>
              <use href={sprite + '#icon-loop'} />
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
              name: <span className={scss.pets__info}>Jack</span>
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
              <use href={sprite + '#icon-loop'} />
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
              name: <span className={scss.pets__info}>Jack</span>
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
    </ul>
  );
};

export default PetsData;
