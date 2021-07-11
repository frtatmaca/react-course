import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import Routes from './Routes';

import Theme from './styles/muiTheme';

import createStore from './store';

const THEME = createMuiTheme(Theme);
const STORE = createStore();

const App = () => {
    return (
        <MuiThemeProvider theme={THEME}>
            <Provider store={STORE}>
                <Router>
                    <Routes />
                </Router>
            </Provider>
        </MuiThemeProvider>
    );
};

export default App;