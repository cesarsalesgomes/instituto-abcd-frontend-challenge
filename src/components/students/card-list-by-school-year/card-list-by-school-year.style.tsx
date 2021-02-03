import { makeStyles } from '@material-ui/core';

const studentCardListStyles = makeStyles((theme) => ({
  title: {
    fontSize: 22,
    color: '#616161',
    fontWeight: 700,
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

export default studentCardListStyles;
