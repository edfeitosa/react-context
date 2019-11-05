import muiTheme from '../../theme/muiTheme';

const styles = {
  '@global': {
    '*': {
      margin: '0px',
      padding: '0px'
    },
    body: {
      fontFamily: 'Roboto'
    },
    container: {
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    },
    h1: {
      color: muiTheme.palette.text.h1,
      fontSize: '1.5rem',
      margin: '0px 0px 10px 0px',
      fontWeight: '700'
    },
    h2: {
      color: muiTheme.palette.text.h2,
      fontSize: '1.1rem',
      margin: '0px 0px 10px 0px',
      fontWeight: '500'
    },
    a: {
      textDecoration: 'none'
    },
    p: {
      margin: '0px 0px 10px 0px',
      fontSize: '1rem',
      color: muiTheme.palette.text.main,
      lineHeight: '1.5'
    },
    '.alignTextToCenter': {
      textAlign: 'center'
    },
    '.alignTextToLeft': {
      textAlign: 'left'
    }
  }
}

export default styles;