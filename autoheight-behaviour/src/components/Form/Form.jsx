import React from 'react'
import Textarea from '../Textarea/Textarea'
import './Form.scss'

const Form = () => {
  return (
    <form action='' className='form'>
      <label className='form__label' htmlFor='email_entry_notes'>Notes</label>
      <Textarea
        textareaId='email_entry_notes'
        textareaClassName='email_entry_notes'
        textareaName='email_entry_notes'
        placeholderText='Because I need to have a rest...'
      />
    </form>
  )
}

export default Form
