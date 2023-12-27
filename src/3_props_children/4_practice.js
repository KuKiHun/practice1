import { useState } from "react";

function FancyBorder(props) {
    return (
        <div className='FancyBorder'>
            {props.children}
        </div>
    )
}

function TextPart(props) {
    return (
        <FancyBorder>
            <h1 className='Money-title'> {props.money} </h1>
            {/* <p className='Dialog-message'> {props.message} </p> */}
            {props.children}
        </FancyBorder>
    )
}

function WonMoney() { // 컴포넌트 이름을 대문자
    const [wonmoney, setwonmoney] = useState(0);
    const [dalarmoney, setdalarmoney] = useState(0);

    const wonToDollar = (won) => {
        const exchangeRate = 0.00085; // 1 KRW = 0.00085 USD
        return (won * exchangeRate).toFixed(2);
    }

    const dollarToWon = (dollar) => {
        const exchangeRate = 1176.47; // 1 USD = 1176.47 KRW
        return (dollar * exchangeRate).toFixed(2);
    }

    const handleWonChange = (event) => {
        const won = event.target.value;
        const dollar = wonToDollar(won);
        setwonmoney(won);
        setdalarmoney(dollar);
    }

    const handleDollarChange = (event) => {
        const dollar = event.target.value;
        const won = dollarToWon(dollar);
        setdalarmoney(dollar);
        setwonmoney(won);
    }

    return (
        <TextPart money='원화 금액을 입력하세요'>
            <input type='text' value={wonmoney} onChange={handleWonChange} />
            <p>달러: {dalarmoney}</p>
        </TextPart>
    )
}

function DollarMoney() { // 컴포넌트 이름을 대문자
    const [dalarmoney, setdalarmoney] = useState(0);
    const [wonmoney, setwonmoney] = useState(0);

    const wonToDollar = (won) => {
        const exchangeRate = 0.00085; // 1 KRW = 0.00085 USD
        return (won * exchangeRate).toFixed(2);
    }

    const dollarToWon = (dollar) => {
        const exchangeRate = 1176.47; // 1 USD = 1176.47 KRW
        return (dollar * exchangeRate).toFixed(2);
    }

    const handleWonChange = (event) => {
        const won = event.target.value;
        const dollar = wonToDollar(won);
        setwonmoney(won);
        setdalarmoney(dollar);
    }

    const handleDollarChange = (event) => {
        const dollar = event.target.value;
        const won = dollarToWon(dollar);
        setdalarmoney(dollar);
        setwonmoney(won);
    }

    return (
        <TextPart money='달러 금액을 입력하세요'>
            <input type='text' value={dalarmoney} onChange={handleDollarChange} />
            <p>원화: {wonmoney}</p>
        </TextPart>
    )
}

function App() {
    return (
        <div>
            <WonMoney /> {/* 컴포넌트를 정상적으로 렌더링하기 위해 JSX 형식으로 수정 */}
            <hr />
            <DollarMoney /> {/* 컴포넌트를 정상적으로 렌더링하기 위해 JSX 형식으로 수정 */}
        </div>
    )
}

export default App;