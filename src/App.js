import React, { useState, useEffect } from 'react'
import './styles/app.css'
import TriviaData from './components/TriviaData'

const App = () => {

  const API_URL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple'

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch(API_URL)
    .then((response) => {
      if (response.ok){
        return response
      } else {
        let errorMessage = `${response.status} ${response.statusText}`,
          error = new Error(errorMessage)
          throw(error)
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setQuestions(data.results)
    })
    .catch(error => console.log(`Error in fetch ${error.message}`))
  }, [])

  const handleAnswer = () => {
    // check for the answer
  }

  return questions.length > 0 ? (
    <div className='container'>
      <TriviaData data={questions[0]} handleAnswer={handleAnswer}/>
      
    </div>
    ) : ( 
      <h1 className='text-xl font-bold'>Loading...</h1>
    )
}

export default App;
