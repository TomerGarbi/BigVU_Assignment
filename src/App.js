

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {VideoPlayer} from './components/videoPlayer/VideoPlayer';
import { Course } from "./components/course/Course";
import { Home } from "./components/home/Home";
import "./App.css"

function App() {
  return (
    <div className="App" style={{font: "Inter", color:"#253658", fontSize: "20px"}}>
      <div className="main">
        <Course />
      </div>
    </div>
  );
}

export default App;
