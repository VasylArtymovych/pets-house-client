import scss from './Button.module.scss';

const Button = (props) => {
  return (
    <>
      <button className={scss.button + ' ' + props.customStyle} type="submit">
        {props.buttonName}
      </button>
    </>
  );
};

export default Button;
