import { Link, Route, Routes } from "react-router-dom";
import InputSample from "./Pages/InputSample/InputSample";
import MainAside from "./component/Aside/MainAside/MainAside";
import { Global } from "@emotion/react";
import { reset } from "./styles/Global/reset";

function Test1(){
    return(<h1>Test1</h1>);
}

function Test2(){
    return(<h1>Test2</h1>);
}

function App() {
  return (
    <>
      <Global styles={reset}/>
      <MainAside />
      <Routes>
        <Route path="/t1" Component={Test1}/> 
        <Route path="/t2" Component={Test2}/> 
        <Route path="/sample/input/1" Component={InputSample}/> 
      </Routes>
    </>    
  );
}

export default App;
