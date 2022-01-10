import React from 'react'

const Header = (props) => (
  <>
  <h1>{props.title}</h1>
  </>
)

const Part = (props) => (
  <p>{props.part} {props.exercises}</p>
)

const Content = (props) => {
  const contentEl = props.content.map(content => (
    <Part 
      key={content.part}
      part={content.part} 
      exercises={content.exercises} />
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

  const content = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    },
  ]

  const totalExercises = content[0].exercises + content[1].exercises + content[2].exercises

  return (
    <div>
      <Header title={course} />
      <Content content={content} />
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App