import { makeStyles } from '@material-ui/core/styles';

const studentListStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
  gridItem: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
}));

export default studentListStyles;
