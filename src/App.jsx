import React from 'react';
import { Container, Button } from '@material-ui/core';
import { sendMessage } from './utils';

function App() {
  return (
    <Container>
      <h1>Screenshot!!</h1>
      <Button
        variant="contained"
        onClick={() => sendMessage('screenshot')}
        color="primary"
      >
        Button
      </Button>
    </Container>
  );
}

export default App;
