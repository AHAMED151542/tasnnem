import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import FingerprintScreen from './components/FingerprintScreen';
import QuestionScreen from './components/QuestionScreen';
import ProposalScreen from './components/ProposalScreen';
import SecondQuestionScreen from './components/SecondQuestionScreen';
import HeartClickScreen from './components/HeartClickScreen';
import PoemScreen from './components/PoemScreen';
import IdentityQuestionScreen from './components/IdentityQuestionScreen';
import ComplimentsScreen from './components/ComplimentsScreen';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    setCurrentScreen(prev => prev + 1);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 font-sans">
      <AnimatePresence mode="wait">
        {currentScreen === 0 && (
          <FingerprintScreen key="screen-0" onUnlock={handleNext} />
        )}
        {currentScreen === 1 && (
          <QuestionScreen key="screen-1" onNext={handleNext} />
        )}
        {currentScreen === 2 && (
          <ProposalScreen key="screen-2" onYes={handleNext} />
        )}
        {currentScreen === 3 && (
          <SecondQuestionScreen key="screen-3" onNext={handleNext} />
        )}
        {currentScreen === 4 && (
          <HeartClickScreen key="screen-4" onNext={handleNext} />
        )}
        {currentScreen === 5 && (
          <PoemScreen key="screen-5" onNext={handleNext} />
        )}
        {currentScreen === 6 && (
          <IdentityQuestionScreen key="screen-6" onNext={handleNext} />
        )}
        {currentScreen === 7 && (
          <ComplimentsScreen key="screen-7" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
