import {ButtonBase, styled} from '@mui/material';

const CustomButton = styled(ButtonBase)(({theme}) => ({
  '&': {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#AEE9D1',
    fontSize: "14px",
    transition: "transform .5s, box-shadow .5s"
  },
  '&:hover': {
    boxShadow: "0px 4px 4px 0px #00000010"
  }
}))

const Button = ({children, ...props}) => {
  return (
    <CustomButton {...props}>
      {children}
    </CustomButton>
  );
}

export default Button;