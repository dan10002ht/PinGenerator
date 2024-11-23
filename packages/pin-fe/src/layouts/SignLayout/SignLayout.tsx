import './SignLayout.scss';
import {Link} from 'react-router-dom';
import {ButtonBase, Divider, styled} from '@mui/material';
import GoogleIcon from '../../components/atoms/Icon/GoogleIcon.tsx';
import PropTypes from 'prop-types';

const CustomButton = styled(ButtonBase)(({theme}) => ({
  '&': {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#E5FFF5',
    color: '#008060',
    fontSize: '14px',
    transition: 'transform .2s, box-shadow .2s',
  },
  '& svg': {
    marginRight: '4px',
  },
  '&:hover': {
    boxShadow: '0px 4px 4px 0px #00000005',
  },
}));

const SignLayout = ({children, isSignUp = false}) => {
  const signLinkProps = {
    to: isSignUp ? '/auth/login' : '/auth/register',
    children: isSignUp ? 'Sign in' : 'Sign up',
  };
  return (
    <div className="Pin-Sign__Wrapper">
      <div className="Pin-Sign__Decoration">
        <img src="https://i.imgur.com/v0bVBmV.png" alt="Decoration image" />
      </div>
      <div className="Pin-Sign__Top">
        <div className="Pin-Sign__Top--Information">
          <div className="Pin-Sign__Title">Sign in to</div>
          <div className="Pin-Sign__SubTitle">Lorem ipsum is simply</div>
          <div className="Pin-Sign__Description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s,
          </div>
        </div>
      </div>
      <div className="Pin-Sign__Content">
        <div className="Pin-Form">
          <div className="Pin-Form__TopWrapper">
            <div className="Pin-Form__Top">
              <div className="Pin-Form__Welcome">
                <span>Welcome to </span>
                <span className="Pin-Form__Welcome--Primary">AutoPIN</span>
              </div>
              <div className="Pin-Form__SignWrapper">
                <span>No Account?</span>
                <Link className="Pin-Form__SignLink" {...signLinkProps} />
              </div>
            </div>
            <h2 className="Pin-Form__Title">{isSignUp ? 'Sign up' : 'Sign in'}</h2>
          </div>
          {children}
          <Divider color="grey" sx={{color: 'grey', fontWeight: 350, fontSize: 12}}>
            or continue with
          </Divider>
          <CustomButton>
            <GoogleIcon />
            Sign in with Google
          </CustomButton>
        </div>
      </div>
      <div className="Pin-Sign__Bottom"></div>
    </div>
  );
};

SignLayout.propTypes = {
  children: PropTypes.node,
  isSignUp: PropTypes.bool,
};

export default SignLayout;