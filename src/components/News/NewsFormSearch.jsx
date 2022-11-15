// import { useState } from "react";
import scss from "./News.module.scss"
import { Input, InputForm } from 'components/Input';
// import { ErrorMessage, Form, Formik } from 'formik';

const FormSearchNews = () => {
  return (
    <div className={scss.container}>
      <h2 className={scss.title}>News</h2>
      {/* <InputForm> */}
      <Input customStyle={scss.InputNews} placeholder={"Search"} />
      {/* </InputForm> */}
    </div>
  )
}

export default FormSearchNews;
