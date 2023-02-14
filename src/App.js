import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList/>}></Route>
          <Route path="/day/:day" element={<Day/>}></Route>
          <Route path="/create_word" element={<CreateWord/>}></Route>
          <Route path="/create_day" element={<CreateDay/>}></Route>
          <Route element={<EmptyPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
