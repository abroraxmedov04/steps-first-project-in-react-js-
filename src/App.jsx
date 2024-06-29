import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setOpen(!open)}>
        &times;
      </button>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step == 1 ? "active" : ""}`}>1</div>
            <div className={`${step == 2 ? "active" : ""}`}>2</div>
            <div className={`${step == 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#FFFFFF" }}
              onClick={() => setStep((val) => val - 1)}
              disabled={step <= 1}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#FFFFFF" }}
              onClick={() => setStep((val) => val + 1)}
              disabled={step >= 3}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
