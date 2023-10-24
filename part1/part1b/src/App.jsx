import { useState } from "react";

// const Stats = (props) => {
//   let all = props.good + props.neutral + props.bad;
//   if (all === 0) {
//     return (
//       <div>
//         <h2>no feedback given</h2>
//       </div>
//     );
//   }

//   return (
//     <tb>
//       <tr>good: {props.good}</tr>
//       <tr>neutral:{props.neutral}</tr>
//       <tr>bad:{props.bad}</tr>
//       <tr>all: {props.good + props.neutral + props.bad}</tr>
//       <tr>
//         average{" "}
//         {(props.good - props.bad) / (props.good + props.bad + props.neutral)}
//       </tr>
//       <tr>
//         percentage_positive{" "}
//         {(props.good / (props.good + props.bad + props.neutral)) * 100}%
//       </tr>
//     </tb>
//   );
// };

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const setToGood = (newValue) => () => {
//     console.log("good now", newValue); // print the new value to console
//     setGood(newValue);
//   };

//   const setToNeutral = (newValue) => () => {
//     console.log("neutral now", newValue); // print the new value to console
//     setNeutral(newValue);
//   };

//   const setToBad = (newValue) => () => {
//     console.log("bad now", newValue); // print the new value to console
//     setBad(newValue);
//   };

//   return (
//     <div>
//       <h1>GIVE FEEDBACK</h1>

//       <button onClick={setToGood(good + 1)}>good</button>
//       <button onClick={setToNeutral(neutral + 1)}>neutral</button>
//       <button onClick={setToBad(bad + 1)}>bad</button>

//       <h2>Stats</h2>
//       <Stats good={good} neutral={neutral} bad={bad} />
//     </div>
//   );
// };

// 1.12* to 1.16: anecdotes

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0)); // Initialize points array

  const getRandomInt = () => {
    const randomInt = Math.floor(Math.random() * anecdotes.length);
    console.log(randomInt);
    setSelected(randomInt);
  };

  const handleVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  let maxVotes = Math.max(...points);
  let aneIndex = points.indexOf(maxVotes);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>It has {points[selected]} votes</p>
      <button onClick={getRandomInt}>Another</button>
      <button onClick={handleVote}>Vote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[aneIndex]}</p>
      <p>It has {maxVotes} votes</p>
    </div>
  );
};

export default App;
