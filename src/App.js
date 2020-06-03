import React, { useState, useEffect } from 'react'
import './styles/app.css'
import TriviaData from './components/TriviaData'

const App = () => {

  const API_URL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple'

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [gameEnded, setGameEnded] = useState(false)

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

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex)

    if (answer === questions[currentIndex].correct_answer){
    //increase the score
      setScore(score + 1)
    }
    // check for the answer
    
    if (newIndex >= questions.length){
      setGameEnded(true)
    }
    // if correct show next question


    // change score if correct
  }

  return gameEnded ? (
    <h1 className='text-3xl text-black font-bold'> Your score was {score}</h1>
  ) : (questions.length > 0 ? (
    <div className='container'>
      <TriviaData 
        data={questions[currentIndex]}
        handleAnswer={handleAnswer}/>
    </div>
    ) : ( 
      <h1 className='text-xl font-bold'>Loading...</h1>
  ))
}

export default App;
