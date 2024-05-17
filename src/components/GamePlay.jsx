import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import Rules from './Rules';
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";

const GamePlay = () => {
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const roleDice = () => {

    if(!selectNumber)
    {
        setError("You have not selected any number");
        return;
    }
    

    const randomNumber = generateRandomNum(1, 7);
    setCurrentDice((prev) => randomNumber);

    if(selectNumber === randomNumber)
    {
        setScore((prev) => prev + randomNumber);
    }
    else
    {
        setScore((prev) => prev - 2);
    }

    setSelectNumber(undefined);

  }

  const resetScore = () => {
    setScore(0);
  }

  const MainContainer = styled.main`
    padding-top: 70px;

    .top_section {
      display: flex;
      justify-content: space-around;
      align-items: end;
    }

    .btns {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 40px;
    }
  `;

  return (
    <>
      <MainContainer>
        <div className="top_section">
          <TotalScore score = {score} />
          <NumberSelector 
            error = {error}
            setError = {setError}
            selectNumber = {selectNumber}
            setSelectNumber = {setSelectNumber}
          />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
        <div className="btns">
            <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
            <Button onClick={() => setShowRules((prev) => !prev)}> { showRules ? "Hide" : "Show" } Rules </Button>
        </div>
        { showRules && <Rules/> }
      </MainContainer>
    </>
  );
};

export default GamePlay;
