import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import ValidationSchema from './validationSchema';
import { localData, sessionData } from '../utils/getData';
import Input from './Input';
import './FormPersonalInfo.scss';

const FormPersonalInfo = () => {
  const [userInfo, setUserInfo] = useState(localData || []);
  const [userInfoCard, setUserInfoCard] = useState(sessionData || []);

  useEffect(() => {
    if (userInfo.length <= 3) {
      localStorage.setItem('personal-info', JSON.stringify(userInfo))
      sessionStorage.setItem('personal-info-card', JSON.stringify(userInfoCard));
    }
  }, [userInfo, userInfoCard])

  useEffect(() => {
    document.cookie = `location=Form-page; path=/form; samesite; secure`
    document.cookie = `locationFromForm=Form-page; path=/data; samesite; secure`
  }, [userInfo])

  const handleSubmitForm = (values, {setSubmitting, resetForm}) => {
    setSubmitting(true)

    const form = {
      name: values.name,
      age: values.age,
      phone: values.phone,
      cardNumber: values.cardNumber,
    }
    const {cardNumber, ...data} = form

    setUserInfo(prev => ([...prev, data]))
    setUserInfoCard(prev => ([...prev, cardNumber]))

    console.log('form', form)
    resetForm({})
    setSubmitting(false)
  }

  return (
    <div className='form'>
      <h4 className='form__heading'>Personal Information</h4>
      <Formik initialValues={
        {
          name: '',
          age: '',
          phone: '',
          cardNumber: '',
        }
      }
              onSubmit={ handleSubmitForm }
              validationSchema={ ValidationSchema }
      >
        { ({
             values,
             handleChange,
             handleBlur,
             handleSubmit,
             isSubmitting,
             isValidating
           }) => (
          <Form onSubmit={ handleSubmit }>

            <div className='form__column'>
              <Input name='name' type='text' title='Your name *' value={ values.name || '' } onChange={ handleChange } onBlur={ handleBlur }/>
              <Input name='age' type='text' title='Your age' value={ values.age || '' } onChange={ handleChange } onBlur={ handleBlur }/>
            </div>

            <div className='form__column'>
              <Input name='phone' type='tel' title='Telephone *' value={ values.phone || '' } onChange={ handleChange } onBlur={ handleBlur }/>
              <Input name='cardNumber' type='text' title='Your card number *' value={ values.cardNumber || '' } onChange={ handleChange } onBlur={ handleBlur }/>
            </div>

            <div className='form__btn-container'>
              <button type='submit' disabled={ isSubmitting || isValidating } className='form__btn-submit'>Send</button>
            </div>
            <pre>{ JSON.stringify(values, null, 2) }</pre>
          </Form>
        )
        }
      </Formik>
    </div>
  );
};

export default FormPersonalInfo
