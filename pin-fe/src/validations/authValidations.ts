import {yupResolver} from '@hookform/resolvers/yup';
import yup from './yupGlobal.ts';

export const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('This field is required')
    .max(100, 'First name must be less than 100 characters'),
  lastName: yup
    .string()
    .required('This field is required')
    .max(100, 'Last name must be less than 100 characters'),
  email: yup.string().required('This field is required'),
  password: yup.string().required('This field is required'),
});

export const signInSchema = yup.object().shape({
  email: yup.string().required('This field is required'),
  password: yup.string().required('This field is required'),
});
