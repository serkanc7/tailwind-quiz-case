import React, { useEffect, useState } from 'react'

const Quiz = () => {

    const [questions, setQuestions] = useState([])
    const [questionNumber, setQuestionNumber] = useState(0)
    const [timer, setTimer] = useState(30)
    const [answers, setAnswers] = useState([])

    const correctAnswers = ['A', 'D', 'C', 'B', 'D', 'B', 'A', 'C', 'D', 'B']

    const fetchQuestionData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setQuestions(data.slice(0, 10))
            })
    }

    useEffect(() => {
        fetchQuestionData()
        setTimer(30)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer - 1)
        }, 1000)

        if (timer === 0) {
            setTimer(30)
            setQuestionNumber(questionNumber + 1)
        }

        questionNumber === 10 && clearInterval(interval)

        return () => clearInterval(interval)
    }, [timer, questionNumber, setQuestionNumber])


    const addAnswer = (index, choice) => {
        setAnswers([...answers, { questionIndex: questionNumber, answer: questions[questionNumber].body.split(' ')[index], choice }])
        setQuestionNumber(questionNumber + 1)
        setTimer(30)
    }

    const clickNextQuestion = () => {
        setQuestionNumber(questionNumber + 1)
        setTimer(30)
    }

    if (!questions.length) return (
        <div>
            Loading...
        </div>
    )

    if (questionNumber === 10) return (
        <main className='result-page'>
            <h2>Result page</h2>

            {
                correctAnswers.map((correctAnswer, index) => {
                    return (
                        <div className='result' key={index}><span className='correct'>{index + 1}. Correct answer: {correctAnswer}</span>  - <span className='answer'>Cevabınız: {answers.map(answer => {
                            if (answer.questionIndex === index) {
                                return <span className={ answer.choice === correctAnswer && 'green' }> {answer.choice} {answer.answer} </span>
                            }
                        })}</span></div>
                    )
                })
            }
        </main>
    )


    return (
        <main className='quiz-page'>
            <div className='timer'><span>Timer: </span>{timer}</div>
            <p className='question'><span>{questionNumber + 1}. </span>{questions[questionNumber].body}</p>
            <div className='choices'>
                {['A', 'B', 'C', 'D'].map((choice, index) => {
                    return (
                        <button className='choice' key={index} disabled={timer > 20} onClick={() => addAnswer(index, choice)}><span>{choice}</span>: {questions[questionNumber].body.split(' ')[index]}</button>
                    )
                })

                }

            </div>
            <button className='next-button' disabled={timer > 20} onClick={clickNextQuestion}>Next question</button>
        </main>
    )
}

export default Quiz