import { ErrorMessage, Field } from 'formik';

const Input = ({name, title, type, value, onChange, onBlur}) => {
  return (
    <div className='form__row'>
      <label htmlFor={name} className='form__label'>{title}</label>
      <Field
        type={type}
        name={name}
        id={name}
        onChange={ onChange }
        onBlur={ onBlur }
        value={value}
        className='form__input'
      />
      <ErrorMessage name={name} component='div' className='form__error'/>
    </div>
  )
}

export default Input
