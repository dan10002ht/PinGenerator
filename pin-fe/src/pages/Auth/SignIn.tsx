import SignLayout from '../../layouts/SignLayout/SignLayout.tsx';
import {FormControl, Box} from '@mui/material';
import CustomInput from '../../components/atoms/CustomInput/CustomInput.tsx';
import CustomButton from '../../components/atoms/CustomButton/CustomButton.tsx';
import {signInInputs} from '../../const/sign/signInput.ts';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {signInSchema} from '../../validations/authValidations.ts';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onRegister = (values: object) => {
    console.log({values, errors});
  };

  const onError = (err) => {
    console.log(err);
  };

  return (
    <SignLayout>
      <Box component="form" onSubmit={handleSubmit(onRegister, onError)}>
        <FormControl style={{width: '100%', gap: '24px'}}>
          {signInInputs.map((x) => (
            <Box key={x.key} className="Form-Input__Wrapper">
              <label htmlFor={x.key}>
                {[x.label, x.isRequired && '*'].filter(Boolean).join(' ')}
              </label>
              <CustomInput fullWidth placeholder={x.label} {...register(x.key)} />
            </Box>
          ))}
          <CustomButton type="submit" color="primary">
            Sign in
          </CustomButton>
        </FormControl>
      </Box>
    </SignLayout>
  );
};

export default SignIn;
