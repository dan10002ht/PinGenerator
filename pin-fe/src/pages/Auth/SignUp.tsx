import SignLayout from '../../layouts/SignLayout/SignLayout.tsx';
import {Box, FormControl} from '@mui/material';
import CustomInput from '../../components/atoms/CustomInput/CustomInput.tsx';
import CustomButton from '../../components/atoms/CustomButton/CustomButton.tsx';
import {signUpInputs} from '../../const/sign/signInput.ts';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {signUpSchema} from '../../validations/authValidations.ts';
import useCreateApi from '../../hooks/api/useCreateApi.ts';

const SignUp = () => {
  const {creating, handleCreate} = useCreateApi({
    url: '/auth/register',
  });
  const {register, handleSubmit} = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onRegister = (data: object) => {
    handleCreate(data);
  };

  return (
    <SignLayout isSignUp>
      <Box component="form" onSubmit={handleSubmit(onRegister)}>
        <FormControl style={{width: '100%', gap: '24px'}}>
          {signUpInputs.map((x) => {
            if (x.label)
              return (
                <Box key={x.key} className="Form-Input__Wrapper">
                  <label htmlFor={x.key}>
                    {[x.label, x.isRequired && '*'].filter(Boolean).join(' ')}
                  </label>
                  <CustomInput fullWidth type={x.type} placeholder={x.label} {...register(x.key)} />
                </Box>
              );
            return (
              <Box sx={{display: 'flex', gap: '8px'}}>
                {x.map((y) => (
                  <Box key={y.key} className="Form-Input__Wrapper">
                    <label htmlFor={y.key}>
                      {[y.label, y.isRequired && '*'].filter(Boolean).join(' ')}
                    </label>
                    <CustomInput
                      fullWidth
                      type={x.type}
                      placeholder={y.label}
                      {...register(y.key)}
                    />
                  </Box>
                ))}
              </Box>
            );
          })}
          <CustomButton type="submit" color="primary">
            Sign up
          </CustomButton>
        </FormControl>
      </Box>
    </SignLayout>
  );
};

export default SignUp;
