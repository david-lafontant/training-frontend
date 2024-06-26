import { useEffect } from "react";
import { Navigation, Footer } from "./components/index";
import 'bootstrap/dist/js/bootstrap.bundle';
import AddLibrary from './utils/addLibrary';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'


function App() {
  useEffect(()=>{AddLibrary('./src/utils/bs-init.js')},[])

  return (
    <>
    <Navigation />
      <div>
        <button className="btn btn-primary">Hello</button>

        <p className="outer">
          outer <p className='inner'>inner peace</p>
        </p>
       </div>
    <Footer />
    </>
  )
}

export default App
