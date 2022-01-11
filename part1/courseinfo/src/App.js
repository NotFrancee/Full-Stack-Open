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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const totalExercises = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header title={course} />
      <Content parts={[part1, part2, part3]} />
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App