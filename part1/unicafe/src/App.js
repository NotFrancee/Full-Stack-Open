import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
  
  const total = good + neutral + bad
  const average = ( good - bad ) / total
  const positive = ( good / total ) * 100

  return total ? (
  <>
    <table>
    <StatisticLine text="good" value={good}/>
    <StatisticLine text="neutral" value={neutral}/>
    <StatisticLine text="bad" value={bad}/>
    <StatisticLine text="all" value={total}/>
    <StatisticLine text="average" value={average}/>
    <StatisticLine text="positive" value={`${positive} %`}/>
    </table>
  </>
  ) : (
    <>
      <p>No feedback given</p>
    </>
  )}

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
      
      <h1>Statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad} />

    </div>
  )
}

export default App