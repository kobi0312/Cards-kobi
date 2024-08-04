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
import ChildComponent from "./sandbox/ChildComponent";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
