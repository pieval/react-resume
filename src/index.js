/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]*/

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Grid } from 'react-flexbox-grid';
import App from './components/App';

render(
  <AppContainer>
    <Grid>
      <App />
    </Grid>
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(
      <AppContainer>
        <Grid>
          <App />
        </Grid>
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
