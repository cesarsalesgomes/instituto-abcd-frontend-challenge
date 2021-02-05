import { makeStyles } from '@material-ui/core';

const footerLoginStyles = makeStyles((theme) => ({
  box: {
    fontSize: 14,
    color: '#AFAFAF',
    fontWeight: 700,
    lineHeight: '17px',
    width: '100%',
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    textAlign: 'right',
  },
}));

export default footerLoginStyles;
