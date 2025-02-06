import SignLayout from '../../layouts/SignLayout/SignLayout.tsx';
import {FormControl, Box} from '@mui/material';
import TextField from '../../components/atoms/TextField/TextField.tsx';
import Button from '../../components/atoms/Button/Button.tsx';
import {signInInputs} from '../../const/sign/signInput.ts';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {signInSchema} from '../../validations/authValidations.ts';
import useCreateApi from '../../hooks/api/useCreateApi.ts';
import pickFields from '../../helpers/utils/pickFields.ts';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.tsx';

const SignIn = () => {
  const {fetchUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const {creating: loggingIn, handleCreate: handleLogin} = useCreateApi({
    url: '/auth/login',
    fullResp: true,
  });
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onRegister = async (values: object) => {
    console.log({values});
    
    const {success, data} = await handleLogin(pickFields(values, ['email', 'password']));
    console.log({success, data});
    await fetchUser()
    if (success) {
      navigate('/');
    }
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
              <TextField fullWidth placeholder={x.label} {...register(x.key)} />
            </Box>
          ))}
          <Button type="submit" color="primary">
            Sign in
          </Button>
        </FormControl>
      </Box>
    </SignLayout>
  );
};

export default SignIn;
