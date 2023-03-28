

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Course } from "./components/course/Course";
import { Home } from "./components/home/Home";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  //return (<div><VideoPlayerTest/></div>)
  return (
    <div className="App" style={{font: "Inter", color:"#253658", fontSize: "20px"}}>
      <div className="main">
        <Router>
          <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path={'/:anything'} element={<Course />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
