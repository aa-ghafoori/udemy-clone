import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  props: {
    MuiTextField: {
      InputLabelProps: {},
    },
  },
});

export default theme;
