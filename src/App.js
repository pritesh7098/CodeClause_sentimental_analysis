import React, { useState, useEffect } from 'react';
import './App.css';
import neutral from './neutral.gif';
import mood from './sad.gif';
import happy from './happy.gif';

import Sentiment from 'sentiment';
const sentiment = new Sentiment();

function App() {

  const [phrase, setPhrase] = useState('');
  const [sentimentScore, setSentimentScore] = useState(null);

  useEffect(() => {
    setSentimentScore(sentiment.analyze(phrase));
  }, [phrase]);

  return (
    
    <div className='main'>
      
     
      <header className='App-header'>

    
      
        <h2 className='text-xxl text-black font-bold bg-blue-200'>😊 Sentimental Analysis - CodeClause 🤩</h2>
<h4 className='font-bold text-white bg-gray-700 mt-2'>👇 Enter your pearl of wisdom 😎</h4>
        <input className=' mb-2 p-10 w-200 h-20 text-lg text-red-400' value={phrase} onChange={e => setPhrase(e.target.value)}
          style={{ margin: '15px',  padding: '30px', fontSize: '30px', width: '80%' }}
        />

        {
          sentimentScore !== null ?
            <p className='bg-gray-700'>👉  Sentiment Score: {sentimentScore.score}</p>
            : ''
        }

        {
          sentimentScore ?
            sentimentScore.score === 0 ?
            <img src={neutral} alt="normal" width={"170px"} height={"170px"} />
              :
              sentimentScore.score > 0 ?
              <img src={happy} alt="happy" width={"170px"} height={"170px"} />
                :
                <img src={mood} alt="negative" width={"170px"} height={"170px"} />
                   : ''
        }
                <footer className='bg-gray-700 mt-4'> Made with 💖 By Pritesh Dhanad </footer>


      </header>

      
    </div>
  );
}

export default App;
