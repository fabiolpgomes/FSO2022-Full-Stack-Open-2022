/*
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const c
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
*/

function Header(props) {
  return <h1>{props.course}</h1>;
}

function Parts(props) {
  return (
    <p>
      {props.name} <span>{props.exercises}</span>
    </p>
  );
}

function Content(props) {
  return (
    <div>
      <Parts
        name={props.content.parts[0].name}
        exercises={props.content.parts[0].exercises}
      />
      <Parts
        name={props.content.parts[1].name}
        exercises={props.content.parts[1].exercises}
      />
      <Parts
        name={props.content.parts[2].name}
        exercises={props.content.parts[2].exercises}
      />
    </div>
  );
}

function Total(props) {
  return (
    <h1>
      {props.sum[0].exercises + props.sum[1].exercises + props.sum[2].exercises}
    </h1>
  );
}

function App() {
  const course = "Half Stack application development";

  const content = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total sum={content.parts} />
    </div>
  );
}

export default App;
