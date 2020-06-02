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
    <div className="App">
      <div>This is where the question will be</div>
      <div>
        <div>Answer 1</div>
        <div>Answer 2</div>
        <div>Answer 3</div>
        <div>Answer 4</div>
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
