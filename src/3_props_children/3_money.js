import React, { useState } from 'react';


function ExchangeRateCalculator () {
  const [wonAmount, setWonAmount] = useState(0);
  const [dollarAmount, setDollarAmount] = useState(0);
  const exchangeRate = 0.000753; // 환율 예시 (원화에서 달러로 변환하는 경우)

  const WonChange = (event) => {
    const inputWon = event.target.value;
    setWonAmount(inputWon);
    const convertedDollar = inputWon * exchangeRate;
    setDollarAmount(convertedDollar.toFixed(2)); // 소수점 두 자리까지 표시
  };

  const DollarChange = (event) => {
    const inputDollar = event.target.value;
    setDollarAmount(inputDollar);
    const convertedWon = inputDollar / exchangeRate;
    setWonAmount(convertedWon.toFixed(2)); // 소수점 두 자리까지 표시
  };

  return (
    <div>
    <fieldset>
      <legend>원화 금액을 입력하세요</legend>   
        <input type="text" value={wonAmount} onChange={WonChange} />Won
    </fieldset>
      <br />
    <fieldset>
      <legend>달라 금액을 입력하세요</legend>    
        <input type="text" value={dollarAmount} onChange={DollarChange} />dollar    
    </fieldset>
    </div>
  );
};

function App() {
    return (
      <div>
        <h1>환율 계산기</h1>
        <ExchangeRateCalculator />
      </div>
    );
  }
  
  export default App;


