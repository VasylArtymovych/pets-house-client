import scss from './News.module.scss';
import { Input } from 'components/Input';
import Scss from 'components/Input/Input.module.scss';
import { useTranslation } from 'react-i18next';

const FormSearchNews = () => {
  const { t } = useTranslation();
  return (
    <div className={scss.container}>
      <h2 className={scss.title}>{t('news')}</h2>
      <Input customStyle={Scss.InputNews} placeholder={'Search'} />
      <button className={scss.buttonSearch}>
        <svg className={scss.search_icon} width="18px" height="18px">
          <use href="../../images/img_our_friend/sprite.svg#icon-search"></use>
        </svg>
      </button>
    </div>
  );
};

export default FormSearchNews;
