import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid container justifyContent="center">
      <Header/>
      <Grid container className="main">
        <Main/>
      </Grid>
    </Grid>
  );
}

export default App;