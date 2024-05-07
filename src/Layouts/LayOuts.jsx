import { FaHeart } from "react-icons/fa";

import styles from "./LayOut.module.css";

function LayOuts({children}) {
  return (
    <>
    <header>
        <h1>Crypto</h1>
        <p><a>simpel Example </a> | React</p>
    </header>
    
    {children}
    
    <footer>
     <p>Develope By Neda</p>
     <FaHeart color="red"/>
    </footer>
      
    </>
  )
}

export default LayOuts
