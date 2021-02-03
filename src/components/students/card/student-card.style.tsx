import { makeStyles } from '@material-ui/core';

const studentCardStyles = makeStyles((theme) => ({
  root: {
    width: 276,
    height: 321,
  },
  media: {
    height: 199,
    width: 236,
    marginTop: theme.spacing(3),
  },
  title: {
    fontSize: 22,
    color: '#616161',
    fontWeight: 800,
  },
  subTitle: {
    fontSize: 22,
    color: '#616161',
    fontWeight: 400,
  },
}));

export default studentCardStyles;
