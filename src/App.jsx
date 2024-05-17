import React from 'react';
import styled from 'styled-components';
import StartGame from './components/StartGame';

function App() {

  return (
    <>
      <Button>
       click here
      </Button>
    </>
  )
}

export default App;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`;