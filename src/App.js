import { Container, Content } from './styles';
import { useContext } from 'react';

import Display from './components/Display';
import Keyboard from './components/Keyboard';

import { DisplayContext } from './components/Reducer' 

const App = () => {
  const { display } = useContext(DisplayContext);

  return (
    <Container>
      <Content>
        <Display value={display.display}/>
        <Keyboard />
      </Content>
    </Container>
  );
}

export default App;