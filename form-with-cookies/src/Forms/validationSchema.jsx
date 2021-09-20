import * as yup from 'yup'

const phoneRegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
const cardRegExp = /^(?:[0-9]{16})$/

const ValidationSchema = yup.object().shape({
  name: yup.string()
    .min(2)
    .max(20)
    .required('Required'),
  age: yup.number()
    .typeError('Age must be a number')
    .min(18, 'Min age is ${min}')
    .max(99, 'Max age is ${max}'),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
    .min(10)
    .max(12)
    .required('Required'),
  cardNumber: yup.string().matches(cardRegExp, 'Card number is not valid')
    .required('Required')
    .min(16)
    .max(16)
});

export default ValidationSchema;
