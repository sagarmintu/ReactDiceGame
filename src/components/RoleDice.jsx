import styled from "styled-components";

const RoleDice = ({ currentDice, roleDice }) => {

  const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    .dice {
        cursor: pointer;
    }

    p {
        font-size: 24px;
    }
  `;

  return (
    <>
      <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="dice images" />
        </div>
        <p>Click on Dice to roll</p>
      </DiceContainer>
    </>
  );
};

export default RoleDice;
