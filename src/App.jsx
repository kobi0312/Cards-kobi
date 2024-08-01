import { BrowserRouter } from "react-router-dom";
import Cards from "./cards/components/Cards";
import CardsPage from "./cards/pages/CardsPage";
import Router from "./routes/Router";
import Counter from "./sandbox/Counter";
import EventComponent from "./sandbox/EventComponent";
import EventComponent2 from "./sandbox/EventComponent2";
import HwStates from "./sandbox/HwStates";
import MyFormExample from "./sandbox/MyFormExample";

import MyUseStateComponent from "./sandbox/MyUseStateComponent";
import Todolist from "./sandbox/Todolist";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;

//npm i react-router-dom
