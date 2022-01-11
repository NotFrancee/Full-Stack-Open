import React from 'react'

const Header = (props) => (
  <h1>{props.title}</h1>
)

const Part = (props) => (
  <p>{props.name} {props.exercises}</p>
)

const Content = (props) => {
  const contentEl = props.parts.map(part => (
    <Part 
      key={part.name}
      name={part.name}
      exercises={part.exercises} />
  ))

  return (
    <>
    {contentEl}
    </>
  )
}

const Total = (props) => {
  let totalExercises = 0
  props.parts.forEach(part => {
    totalExercises += part.exercises
  })

  return (
  <p>Number of exercises {totalExercises}</p>
)}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App