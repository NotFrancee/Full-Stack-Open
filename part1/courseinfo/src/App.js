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

const Total = (props) => (
  <p>Number of exercises {props.totalExercises}</p>
)

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
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

  let totalExercises = 0
  parts.forEach(part => {
    totalExercises += part.exercises
  })

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App