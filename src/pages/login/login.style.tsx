import { makeStyles } from '@material-ui/core/styles';

import backgroundContainerImage from '../../assets/login_bg.png';
import backgroundHeaderFormImage from '../../assets/logo.png';

const loginStyles = makeStyles((theme) => ({
  loginContainer: {
    backgroundImage: `url(${backgroundContainerImage})`,
    height: '100vh',
  },
  loginFormBox: {
    backgroundColor: 'white',
    borderRadius: '25px',
  },
  loginFormHeaderImage: {
    backgroundImage: `url(${backgroundHeaderFormImage})`,
    height: '118px',
    width: '227px',
    margin: theme.spacing(6),
  },
  form: {
    margin: theme.spacing(0, 4, 0, 4),
  },
  formControlEmail: {
    width: '100%',
  },
  formControlPassword: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  inputLabel: {
    fontWeight: 700,
    color: '#47CDFF',
  },
  inputRadius: {
    borderRadius: '10px',
  },
  submit: {
    margin: theme.spacing(3, 0, 3),
    borderRadius: '20px',
    backgroundColor: '#47CDFF',
    color: 'white',
    height: '50px',
    fontWeight: 700,
    lineHeight: '17px',
    boxShadow: '0px 4px 0px #25ABE6',
  },
}));

export default loginStyles;
