import React, { useContext } from 'react'
import va from "./assets/ai.png";
import { CiMicrophoneOn } from 'react-icons/ci';
import './App.css';
import { datacontext } from './context/UserContext';
import speakimg from "./assets/speak.gif";
import aigif from "./assets/aiVoice.gif";
const App = () => {
  let {recognition,speaking,setSpeaking,text,setText,response,setResponse}= useContext(datacontext)

  return (

    <div className='main'>
      <img src={va} alt="" id='shifra' />
      <span>I'm Shifra, Your Advanced Virtual Assistant</span>
      {!speaking?      <button onClick={()=>{
        setText("listening...")
        setSpeaking(true);
        setResponse(false);
        recognition.start()
      }}>Click here<CiMicrophoneOn /> </button>
       :
       <div className='response'>
        {!response?
       <img src={speakimg} alt="" id='speak' />
        :
        <img src={aigif} alt=""  id='aigif' />
         }

        <p>{text}</p>
       </div>
        }

    </div>
  )
}

export default App