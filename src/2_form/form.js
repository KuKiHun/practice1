// 2_form / form.js

import { useState } from "react";

// 쓰던안쓰던 props 먼저 주고 시작해
function MyForm(props) {
    const handleBtn = (event) => {
      event.preventDefault(); // 기본 동작 방지
      alert('버튼 눌림');
    };
    // 전송 버튼을 눌렀을 때의 처리 함수
    const handleSubmit = (event) => {
      event.preventDefault(); // 기본 동작 방지
  
      // 알림창에 사용자가 입력한 정보를 표시합니다.
      let message = `이름: ${name} \n 메세지: ${memo} \n 나라: ${nara} \n 성별: ${gender}`;
      alert(message);
    };
    // 각 입력 값의 상태를 초기화
    const [name, setName] = useState('');
    const [memo, setMemo] = useState('');
    const [nara, setNara] = useState('');
    const [gender, setGender] = useState('');
  
    // 각 입력란의 변경을 처리하는 핸들러 함수
    const handleName = (event) => { setName(event.target.value) } 
    const handleMemo = (event) => { setMemo(event.target.value) }
    const handleNara = (event) => { setNara(event.target.value) }
    const handleGender = (event) => { setGender(event.target.value) }
  
    // 렌더링하는 부분
    return (
      <div>
        {/* 폼 엘리먼트에 onSubmit 핸들러를 등록 */}
        <form onSubmit={handleSubmit}>
          <label>이름:</label>
           {/* 이름 입력란에 현재 상태값을 표시하고, 값이 변경될 때마다 handleName 함수가 호출됨 */}
          <input type='text' value={name} onChange={handleName} />
          <br />
  
          <label>메세지:</label>
          <input type='text' value={memo} onChange={handleMemo} />
          <textarea></textarea>
          <br />
  
          <label>여행갈 나라는?</label>
          <select value={nara} onChange={handleNara}>
            <option value="외국">외국</option>
            <option value="부탄">부탄</option>
            <option value="한국">한국</option>
            <option value="북한">북한</option>
          </select>
          <br />
  
          <label>성별:</label>
          <input type='radio' name='gender' value='남자' onChange={handleGender} />남자
          <input type='radio' name='gender' value='여자' onChange={handleGender} />여자
          <br />
            {/* 버튼 클릭 시 일반적인 동작을 방지하고, handleBtn 함수를 호출 */}
          <button onClick={handleBtn}>일반버튼</button>
          <hr />
          <input type='submit' value='전송버튼' />
        </form>
      </div>
    );
  }
  
  function App() {
    // MyForm 컴포넌트를 렌더링
    return <MyForm />;
  }
  
  export default App;