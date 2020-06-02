import React, { useState, useEffect } from 'react'
import './styles/app.css'


const App = () => {

  const API_URL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple'

  const [quizInfo, setQuizInfo] = useState([])

  useEffect(() => {
    fetch(`${API_URL}`)
    .then((response) => {
      if (response.ok){
        return response
      } else {
        let errorMessage = `${response.status} ${response.statusText}`,
          error = new Error(errorMessage)
          throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      setQuizInfo(body.results)
    })
    .catch(error => console.log(`Error in fetch ${error.message}`))
  }, [])

  // console.log(quizInfo[0])
  return (
    <div className='container'>
      <div className='bg-white p-16 rounded-lg shadow-md'>
        <h2 className='text-3xl'>
          This is where the question will be
        </h2>
      </div>
      <div className='flex flex-wrap mt-4 justify-around'>
        <button className='bg-white w-2/5 p-4 mb-4 font-semibold rounded shadow'>Answer 1</button>
        <button className='bg-white w-2/5 p-4 mb-4 font-semibold rounded shadow'>Answer 2</button>
        <button className='bg-white w-2/5 p-4 font-semibold rounded shadow'>Answer 3</button>
        <button className='bg-white w-2/5 p-4 font-semibold rounded shadow'>Answer 4</button>
      </div>
      {/* {
        quizInfo.map((trivia) => (
          <div>
            <div>
              <ul>
                <li>{trivia.incorrect_answers[0]} </li>
                <li>{trivia.incorrect_answers[1]} </li>
                <li>{trivia.incorrect_answers[2]} </li>
                <li>{trivia.correct_answer}</li>
              </ul>
            </div>
            <div>        
            </div>
          </div>       
        ))
      } */}
    </div>
  );
}

export default App;
