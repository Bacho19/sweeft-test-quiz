import React from 'react';
import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage';
import EndPage from './pages/EndPage';

function App() {
  const [step, setStep] = React.useState(1)

  return (
      <div>
        {step === 1 && <StartPage setStep={setStep}/>}
        {step === 2 && <QuizPage setStep={setStep}/>}
        {step === 3 && <EndPage setStep={setStep}/>}
      </div>
  );
}

export default App;
