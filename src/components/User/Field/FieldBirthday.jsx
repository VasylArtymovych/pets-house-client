import { Input } from 'components/Input';
import { useState } from 'react';
import sprite from '../../../images/symbol-defs.svg';
import scss from './Field.module.scss';

// import dayjs from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import Box from '@mui/material/Box';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export const FieldBirthday = ({ text, value }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  // const [values, setValue] = useState(dayjs('2022-04-07'));

  return (
    <li className={scss.user__items}>
      <p>{text}:</p>
      {isUpdate ? (
        <>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="For mobile"
              value={values}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={({ inputRef, inputProps, InputProps, params }) => (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <input {...params} type="data" className={scss.input__birthday} ref={inputRef} {...inputProps} />
                  {InputProps?.endAdornment}
                </Box>
              )}
            />
          </LocalizationProvider> */}
          <Input customStyle={scss.input__change} type="text" />
          <button className={scss.input__btn} type="button" onClick={() => setIsUpdate(false)}>
            <svg className={scss.icon__profileCheckMark}>
              <use href={sprite + '#icon-profileCheckMark'} />
            </svg>
          </button>
        </>
      ) : (
        <>
          <span className={scss.items_info}>00.00.0000</span>
          <button className={scss.change__btn} onClick={() => setIsUpdate(true)}>
            <svg className={scss.icon__profilePencil}>
              <use href={sprite + '#icon-profilePencil'} />
            </svg>
          </button>
        </>
      )}
    </li>
  );
};
