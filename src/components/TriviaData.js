import React from 'react'

const TriviaData = ({ showAnswers, handleNextQuestion, handleAnswer, data: { question, correct_answer, answers }}) => {

    return (
        <div className='flex flex-col'>
            <div className='bg-white p-16 rounded-lg shadow-md'>
                <h2 className='text-3xl' dangerouslySetInnerHTML={{ __html: question }}/>
            </div> 
            <div className='grid grid-cols-2 gap-6 mt-8'>
                {answers.map((answer, id) => {
                    const bgColor = showAnswers ? 
                    answer === correct_answer ? 
                    'bg-green-500' : 'bg-red-500' : 'bg-white'
                    return (
                        <button
                            key={id} 
                            className={`${bgColor} p-4 font-semibold rounded shadow`}
                            onClick={() => handleAnswer(answer)} 
                            answer={answer} 
                            dangerouslySetInnerHTML={{ __html: answer }}
                        />
                    )})}        
            </div>
            {showAnswers && (
                <button 
                    className={`ml-auto mt-6 bg-blue-400 text-white p-4 font-semibold rounded shadow`}
                    onClick={handleNextQuestion}
                >
                    Next Question
                </button>
            )} 
        </div>
    )
}

export default TriviaData

