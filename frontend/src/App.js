import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Title from './components/Title';
import Blocks from './components/Blocks';

const App = () => {
  return (
    <div>
       <Header title="Remote Sessions"/>
       <Title title ="Choose code block"></Title>
       <Blocks/>
    </div>
  );
}

export default App;
