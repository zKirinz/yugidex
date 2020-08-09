import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import YugiDex from './YugiDex';
import CardsMoreDetail from './CardsMoreDetail';
import {
  Switch,
  Route
} from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
})

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} render={props => <YugiDex {...props} />} />
        <Route exact path={process.env.PUBLIC_URL + '/:cardID'} render={props => <CardsMoreDetail {...props} />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
