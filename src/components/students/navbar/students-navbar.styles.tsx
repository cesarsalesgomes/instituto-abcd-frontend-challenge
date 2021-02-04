import { makeStyles } from '@material-ui/core/styles';

const studentsNavbarStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '126px',
    borderRadius: '25px',
    padding: theme.spacing(0, 3, 0, 3),
    marginTop: theme.spacing(3),
  },
  containerCard: {
    height: '100%',
  },
  inputSearch: {
    borderRadius: '10px',
  },
  button: {
    margin: theme.spacing(3, 0, 3),
    borderRadius: '20px',
    backgroundColor: '#47CDFF',
    color: 'white',
    height: '52px',
    width: '100%',
  },
}));

export default studentsNavbarStyles;
