import React, { useState, useEffect } from 'react'
import './styles/app.css'
import TriviaData from './components/TriviaData'

const App = () => {

  const API_URL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple'

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)

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
      const questions = data.results.map((question) => ({
        ...question,
        answers: [
          question.correct_answer,
          ...question.incorrect_answers,
        ].sort(() => Math.random() - 0.5),
      }))
      setQuestions(questions)
    })
    .catch(error => console.log(`Error in fetch ${error.message}`))
  }, [])

  const handleAnswer = (answer) => {
    if (!showAnswers) { // prevent double answers
      if (answer === questions[currentIndex].correct_answer){
      //increase the score
        setScore(score + 1)
      }
  }
    setShowAnswers(true)
    // check for the answer
    // if correct show next question


    // change score if correct
    // const newIndex = currentIndex + 1
    // setCurrentIndex(newIndex)
  }

  const handleNextQuestion = () => {
    setShowAnswers(false)

    setCurrentIndex(currentIndex + 1)
  }

  return questions.length > 0 ? (
    <div className='container'>
      {currentIndex >= questions.length ? (
      <h1 className='text-3xl text-black font-bold'> Your score was {score}</h1>
      ) : (
        <TriviaData 
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleAnswer={handleAnswer}
          handleNextQuestion={handleNextQuestion}
        />
      )}
    </div>
    ) : ( 
      <h1 className='text-xl font-bold'>Loading...</h1>
  )
}

export default App;
