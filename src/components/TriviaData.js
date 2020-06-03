import React from 'react'

const TriviaData = ({ handleAnswer, data: { question, correct_answer, incorrect_answers }}) => {

    const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)

    return (
        <div>
            <div className='bg-white p-16 rounded-lg shadow-md'>
                <h2 className='text-3xl' dangerouslySetInnerHTML={{ __html: question }}/>
            </div> 
            <div className='grid grid-cols-2 gap-6 mt-8'>
                {shuffledAnswer.map(answer => (
                     <button 
                        className={`${correct_answer === answer ? 'bg-green-300' : 'bg-white'} p-4 font-semibold rounded shadow`}
                        onClick={() => handleAnswer(answer)} 
                        answer={answer} 
                    >
                     {answer}
                    </button>


                ))}
                
            </div>
        </div>
    )
}

export default TriviaData

