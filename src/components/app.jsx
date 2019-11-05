import React, { useReducer, createContext } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import MainTemplate from './templates/MainTemplate/mainTemplate';
import muitTheme from './theme/muiTheme';

import { ticketInitial } from '../context/ticket/ticketInitial';
import ticketReducer from '../context/ticket/ticketReducer';

export const TicketDispatch = createContext(null);

const App = () => {
  const [ticket, ticketDispatch] = useReducer(ticketReducer, ticketInitial);
  return (
    <TicketDispatch.Provider value={[ ticket, ticketDispatch ]}>
      <MuiThemeProvider theme={muitTheme}>
        <MainTemplate />
      </MuiThemeProvider>
    </TicketDispatch.Provider>
  )
}

export default App;