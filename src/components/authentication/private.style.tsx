import { makeStyles } from '@material-ui/core';
import CssConstants from '../../constants/css';

const privateStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
  content: {
    flexGrow: 1,
    width: `calc(100% - ${CssConstants.DRAWER_WIDTH}px)`,
    marginLeft: CssConstants.DRAWER_WIDTH,
  },
}));

export default privateStyles;
