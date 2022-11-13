import { Field } from 'formik';
import scss from './Input.module.scss';

 const InputForm = ({type= "text", name, customStyle, placeholder}) => {
	return (
		<Field className={scss.input + " " + customStyle} name={name} type={type} placeholder={placeholder}/>
	)
}

const Input = ({type= "text", name, id, label, customStyle, placeholder, value, onChange, onBlur }) => {
	return (
		<label>
			{label}
		<input className={scss.input + " " + customStyle} type={type} id={id} name={name} placeholder={placeholder} onChange={onChange} onBlur={onBlur} value={value}/>
	</label>
	)
}

export {Input, InputForm};