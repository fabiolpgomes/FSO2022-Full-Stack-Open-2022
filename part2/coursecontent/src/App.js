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
      <Parts
        name={props.content.parts[3].name}
        exercises={props.content.parts[3].exercises}
      />
    </div>
  );
}

function Total(props) {
  return (
    <h1>
       Total of {props.sum[0].exercises + props.sum[1].exercises + props.sum[2].exercises + props.sum[3].exercises} exercises.
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
      {
        name: "Redux",
        exercises: 11,
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
