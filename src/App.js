import logo from './logo.svg';
import React, { useState, useEffect } from "react"

import './App.css';

function App() {
  const [welcome, setWelcome] = useState("");
  const [fullText, setFullText] = useState("Welcome to CS61a!");
  const [index, setIndex] = useState(0);
    useEffect(() => {
      if (index < fullText.length) {
        setTimeout(() => {
          setWelcome(welcome + fullText[index])
          setIndex(index + 1)
        }, 65)
      }
    }, [index])
  return (
    <div className="App">
      <div className='about-me'>
        <div className='name'>
          <text> Abby Brooks-Ramirez</text>
          <a className='email' href='https://mail.google.com/mail/u/0/?fs=1&to=a.brooks@berkeley.edu&tf=cm' target='_blank'>a.brooks@berkeley.edu</a>
        </div>
        <div className='resource-links'>
        <text className='title'> Quick Links</text>
          <a class = "link" href='https://forms.gle/raVBb2M1MMd4F1gU7' target='_blank'>✧ Discussion Attendance</a>
          <a class = "link" href='https://forms.gle/Dc4HsU4Vwo5HCiEG6' target='_blank'>✧ Anonymous Feedback </a>
          <a class = "link" href='https://edstem.org/us/courses/42930/' target='_blank'>✧ Ed </a>
        </div>
        <div className='section-offerings'>
          <div className='section-info'>
            <text>Section One</text>
            <div className='div-contents'>
              <text className='lab'>[Lab] Monday 5:00 to 6:30 @ Soda 277</text>
              <text>[Discussion] Wednesday 5:00 to 6:30 @ Wheeler 120</text>
            </div>
          </div>
          <div className='section-info'>
            <div className='filler'></div>
            <text>Section Two</text>
            <div className='div-contents'>
              <text className='lab'>[Lab] Monday 5:00 to 6:30 @ Soda 277</text>
              <text>[Discussion] Wednesday 5:00 to 6:30 @ Dwinelle 243</text>
            </div>
          </div>
        </div>
      </div>
      <div className='discussion'> 
        <text className='welcome'> {welcome} </text>
        <div className='discussion-module'>
            <text>Discussion 00</text>
            <div className='discussion-links'>
              <a class = "button"
               className='discussion-button'
                target = "_blank"
                 href = 'https://docs.google.com/presentation/d/1Pb-mgJ_tlTEF_6L5wmtHvYoUNNbTArQ0PumB9RL1RnM/edit?usp=sharing'>
                   Slides </a>
              <a class = "button" className='discussion-button' target = "_blank" href = ''> Worksheet </a>
            </div>
            <svg class = "blob">
              <path id='blob' fill='none' strokeWidth={'10px'} stroke='#DECADD'></path>
            </svg>
        </div>

        </div>
    </div>
  );
}

export default App;
