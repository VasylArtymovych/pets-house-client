import { useTranslation } from 'react-i18next';
import scss from './ChangeLanguage.module.scss';

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  function changeLanguage(e) {
    const whatLanguage = e.target.value;
    localStorage.setItem('whatLanguage', whatLanguage);
    const language = localStorage.getItem('whatLanguage');

    i18n.changeLanguage(language);
  }

  return (
    <div className={scss.buttonLanguage}>
      <select className={scss.changeLang} onChange={changeLanguage}>
        <option className={scss.changeLangItem} value="en">
          EN
        </option>

        <option className={scss.changeLangItem} value="ua">
          UA
        </option>
      </select>
    </div>
  );
};

export default ChangeLanguage;
