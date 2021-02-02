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
  submit: {
    margin: theme.spacing(3, 0, 3),
    borderRadius: '20px',
    backgroundColor: '#47CDFF',
    color: 'white',
    height: '50px',
  },
}));

export default loginStyles;
