import React, { useReducer, createContext } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import MainTemplate from './templates/MainTemplate/mainTemplate';
import muitTheme from './theme/muiTheme';

import { initialState } from '../context/initialState';
import stateReducer from '../context/stateReducer';

export const StateDispatch = createContext(null);

const App = () => {
  const [states, dispatch] = useReducer(stateReducer, initialState);
  return (
    <StateDispatch.Provider value={[ states, dispatch ]}>
      <MuiThemeProvider theme={muitTheme}>
        <MainTemplate />
      </MuiThemeProvider>
    </StateDispatch.Provider>
  )
}

export default App;