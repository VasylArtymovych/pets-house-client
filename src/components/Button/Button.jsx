import scss from './Button.module.scss';

const Button = ({ customStyle, buttonName, type = 'button', onClick }) => {
  return (
    <>
      <button className={scss.button + ' ' + customStyle} type={type} onClick={onClick}>
        {buttonName}
      </button>
    </>
  );
};

export default Button;
