// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
//import Header from './components/Header';
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
// import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
