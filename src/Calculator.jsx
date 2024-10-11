import { useState } from "react";
import Navbar from "./Navbar";

export default function Calculator() {
  const [value, setValue] = useState("");

  return (
    <section className="calc">
      <Navbar />
      <input className="input" value={value}></input>
      <div className="calculatorApp">
        <div className="calculatorRow">
          <button
            className="button"
            value={7}
            onClick={(e) => {
              setValue('');
            }}
          >
            AC
          </button>
          <button
            className="button"
            onClick={(e) => setValue(value.slice(0, -1))}
            value={8}
          >
            DE
          </button>
          
        </div>
     
        <div className="calculatorRow">
          <button
            className="button"
            value={7}
            onClick={(e) => {
              setValue(e.target.value);
            }}
          >
            7
          </button>
          <button
            className="button"
            onClick={(e) => setValue(value + e.target.value)}
            value={8}
          >
            8
          </button>
          <button
            className="button"
            onClick={(e) => setValue(value + e.target.value)}
            value={9}
          >
            9
          </button>
          <button
            className="button"
            onClick={(e) => setValue(value + e.target.value)}
            value={"*"}
          >
            x
          </button>
        </div>
        <div className="calculatorRow">
          <button
            className="button"
            onClick={(e) => setValue(value + e.target.value)}
            value={4}
          >
            4
          </button>
          <button
            className="button"
            onClick={(e) => setValue(value + e.target.value)}
            value={5}
          >
            5
          </button>
          <button
            className="button"
            onClick={(e) => setValue(value + e.target.value)}
            value={6}
          >
            6
          </button>
          <button
            className="button"
            onClick={(e) => setValue(value + e.target.value)}
            value={"+"}
          >
            +
          </button>
        </div>
        <div className="calculatorRow">
          <button
            className="button"
            onClick={(e) => setValue(value + e.target.value)}
            value={1}
          >
            1
          </button>
          <button
            className="button"
            onClick={(e) => setValue(value + e.target.value)}
            value={2}
          >
            2
          </button>
          <button
            className="button"
            onClick={(e) => setValue(value + e.target.value)}
            value={3}
          >
            3
          </button>
          <button
            className="button"
            onClick={(e) => setValue(value + e.target.value)}
            value={"-"}
          >
            -
          </button>
        </div>
        <div className="calculatorRow">
          <button value={"="} onClick={(e) => setValue(eval(value))}>
            =
          </button>
        </div>
      </div>
    </section>
  );
}
