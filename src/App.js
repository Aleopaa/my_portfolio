import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import { AboutPage, HomePage, ProjectPage} from './pages';
import {default as Layout} from './layouts';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout/>}>
<Route path="/" element={<HomePage/>}></Route>
<Route path="about" element={<AboutPage/>}></Route>
<Route path="projects" element={<ProjectPage/>}></Route>
</Route>
</Routes>
  );
}

export default App;
