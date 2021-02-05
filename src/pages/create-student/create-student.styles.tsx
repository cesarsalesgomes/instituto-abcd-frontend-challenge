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
  inputLabel: {
    fontSize: 16,
    color: '#47CDFF',
    fontWeight: 700,
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
  gridItemAvatarImage: {
    textAlign: 'center',
    marginBottom: theme.spacing(7),
  },
  gridItemAvatarInput: {
    textAlign: 'center',
    position: 'absolute',
    paddingTop: '140px',
  },
  avatarInput: {
    display: 'none',
  },
  avatarImage: {
    borderRadius: '22px',
    border: '2px solid #47CDFF',
    boxSizing: 'border-box',
    height: '157px',
    width: '157px',
  },
  avatarButton: {
    marginBottom: theme.spacing(4),
    borderRadius: '20px',
    border: '1px solid #47CDFF',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 0px #47CDFF',
    backgroundColor: '#FFFFFF',
    color: '#47CDFF',
    height: '47px',
    width: '218px',
    fontWeight: 700,
    fontSize: '18px',
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
    boxShadow: '0px 4px 0px #25ABE6',
    fontWeight: 700,
    fontSize: '22px',
  },
}));

export default studentsStyles;
