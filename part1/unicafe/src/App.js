import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => (
  <>
    <h1>Statistics</h1>

    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
  </>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (feedback) => {
    switch (feedback) {
      case "good": 
        setGood(prev => prev += 1)
        break
      case "neutral": 
        setNeutral(prev => prev += 1)
        break
      case "bad": 
        setBad(prev => prev += 1)
        break
      default: 
        console.log("default case got called")
        break
    }
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={() => handleClick("good")} text="good"/>
      <Button handleClick={() => handleClick("neutral")} text="neutral"/>
      <Button handleClick={() => handleClick("bad")} text="bad"/>

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad} />

    </div>
  )
}

export default App