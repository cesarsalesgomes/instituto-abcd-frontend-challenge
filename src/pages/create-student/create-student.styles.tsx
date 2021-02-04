import { makeStyles } from '@material-ui/core/styles';
import schoolYearAvatarImage from '../../assets/school_year_avatar.svg';

const studentsStyles = makeStyles((theme) => ({
  containerCard: {
    width: '100%',
  },
  card: {
    width: '100%',
    borderRadius: '25px',
    padding: theme.spacing(4, 4, 0, 4),
    marginTop: theme.spacing(3),
  },
  form: {
    width: '100%',
  },
  formControl: {
    width: '100%',
  },
  inputRadius: {
    borderRadius: '10px',
  },
  gridItem: {
    marginTop: theme.spacing(4),
  },
  gridContainerReverse: {
    height: '100%',
  },
  gridItemSlider: {
    width: '100%',
  },
  schoolYearSliderLabel: {
    fontSize: 20,
    color: '#47CDFF',
    fontWeight: 700,
  },
  schoolYearPreDescriptionBold: {
    fontSize: 14,
    color: '#C4C4C4',
    fontWeight: 800,
    marginRight: '5px',
  },
  schoolYearPreDescriptionLight: {
    fontSize: 14,
    color: '#C4C4C4',
    fontWeight: 400,
  },
  schoolYearAvatarImage: {
    backgroundImage: `url(${schoolYearAvatarImage})`,
    height: '176px',
    width: '144px',
  },
  gridItemTerms: {
    margin: theme.spacing(6, 0, 6),
  },
  termsDescriptionLabel: {
    fontSize: 16,
    color: '#C4C4C4',
    fontWeight: 400,
  },
  submit: {
    marginBottom: theme.spacing(4),
    borderRadius: '20px',
    backgroundColor: '#47CDFF',
    color: 'white',
    height: '50px',
  },
}));

export default studentsStyles;
