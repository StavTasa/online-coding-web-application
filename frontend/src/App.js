import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Lobby from "./pages/Lobby/Lobby";

const App = () => {
  return (
    <div>
       <Lobby title="Remote Sessions"/>
    </div>
  );
}

export default App;
