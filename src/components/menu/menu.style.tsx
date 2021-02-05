import { makeStyles } from '@material-ui/core';
import CssConstants from '../../constants/css';

import headerImage from '../../assets/logo.png';

const menuStyles = makeStyles((theme) => ({
  headerImage: {
    backgroundImage: `url(${headerImage})`,
    height: '118px',
    width: '227px',
    margin: theme.spacing(6),
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: CssConstants.DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: CssConstants.DRAWER_WIDTH,
  },
  menuLabel: {
    fontSize: 30,
    color: '#CACACA',
    fontWeight: 700,
    lineHeight: '36px',
  },
}));

export default menuStyles;
