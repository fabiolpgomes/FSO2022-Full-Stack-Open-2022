import { useState } from "react";

function Header(props) {
  return <h1>{props.text}</h1>;
}

function Button(props) {
  return <button onClick={props.handle}>{props.text}</button>;
}

function StatisticLine(props) {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
}

function Statistics({ clicks }) {
  const average = (clicks.good + clicks.bad * -1) / clicks.total;
  const positive = (clicks.good / clicks.total) * 100;

  if (clicks.total === 0) {
    return <div>No Feedback given</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={clicks.good} />
          <StatisticLine text="Neutral" value={clicks.neutral} />
          <StatisticLine text="Bad" value={clicks.bad} />
          <StatisticLine text="All" value={clicks.total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  });

  const addGood = () => {
    setClicks({ ...clicks, good: clicks.good + 1, total: clicks.total + 1 });
  };

  const addNeutral = () => {
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1,
      total: clicks.total + 1,
    });
  };

  const addBad = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1, total: clicks.total + 1 });
  };

  return (
    <div>
      <Header text="Give Feedback" />
      <Button handle={addGood} text="good"></Button>
      <Button handle={addNeutral} text="neutral"></Button>
      <Button handle={addBad} text="bad"></Button>

      <div>
        <Header text="Statistics" />
        <Statistics clicks={clicks} />
      </div>
    </div>
  );
}


export default App;
