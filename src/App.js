import { useState } from "react";
import { Container, StyleNoFeedback, TitleStatics } from "./App.styled";
import { Buttons } from "./components/Buttons/Buttons";
import { Statistics } from "./components/Statistics/Statistics";

const App = () => {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);
  const allButtons = [
    ["Good", () => setGood((state) => state + 1)],
    ["Neutral", () => setNeutral((state) => state + 1)],
    ["Bad", () => setBad((state) => state + 1)],
  ];

  const totalFeedbacks = Good + Neutral + Bad;
  const positiveAverage = (Good / totalFeedbacks) * 100;
  const staticData = {
    ...{ Good, Neutral, Bad },
    ...{ total: totalFeedbacks, positive: positiveAverage },
  };

  return (
    <Container>
      <h1>Please leave feedback</h1>
      <Buttons buttons={allButtons}></Buttons>
      <TitleStatics>
        Statistics
        {totalFeedbacks !== 0 ? (
          <Statistics
            value={positiveAverage}
            total={totalFeedbacks}
            data={staticData}
          ></Statistics>
        ) : (
          <StyleNoFeedback>No feedback given</StyleNoFeedback>
        )}
      </TitleStatics>
    </Container>
  );
};

export default App;
