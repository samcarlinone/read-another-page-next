import { createUseStyles } from 'react-jss'
import { ThemeProvider } from 'theming'
import theme from '../../styles/theme'

const useStyles = createUseStyles(theme => ({
  '@global': {
    'html, body': {
      margin: 0,
      padding: 0,

      backgroundColor: '#EEE',
    },
    '#__next': {
      overflow: 'hidden',
    },
    'a': {
      color: '#A91616',
    },
    'a:visited': {
      color: '#862222',
    },
  },
}))

const ComposeWithTheme = (Component) => props => {
  useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
};

export default ComposeWithTheme
