import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
    
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = null;
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p className='screen' ref={resultRef}> 
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef}
          type="number" 
          placeholder="Type a number" 
        />
        <div className="buttonholder">
           <div className="operationButtons">
            <button onClick={plus}>add</button>
            <button onClick={minus}>Subtract</button>
          </div>
          <div className="operationButtons">
            <button onClick={times}>Multiple</button>
            <button onClick={divide}>Divide</button>
          </div>
        </div>
        <br />
        <div className="resetButtons">
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </div> 
        
      </form> 
    </div> 
  ); 
} 
 
export default App; 
