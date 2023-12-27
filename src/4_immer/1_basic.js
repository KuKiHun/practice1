// 4_immer / 1_basic.js

/*
    immer : 불변성 라이브러리
*/

import produce from 'immer';
import { useState } from 'react';

// function App(){}
const App = () => {

    const [todo, setTodo] = useState([
        { item : '밥먹기', done:true},
        { item : '잠자기', done:false},
        { item : '놀기', done:true},

    ]);

    const listData = () => {
        console.log('0>',todo);
    }

    // 1번째 데이타에서 item 의 값을 '공부하기' 변경
     const modify0 = () => {
        setTodo(()=>{todo[1].item='공부하기'});
    }

    //...data > 전체데이타 복사
    // [1] 배열에서 하나씩 추출하여 변경하고 다시 저장하는 방식
    const modify1 = () => {
        const temp = todo.map((data, idx)=>{
            return (idx===1)? {...data, item:'공부하기'}: data;
        });
        setTodo(temp);
        console.log('[1] --------------------')
        console.log('[temp]', temp);
        console.log('[todo]',todo);
    }
    // [2] immer 에 produce() 이용
    const modify2 = () => {
        const temp = produce(todo, (data)=>{data[1].item='공부하자2222'})
        setTodo(temp);
        console.log('[2] --------------------')
        console.log('[temp]', temp);
        console.log('[todo]',todo);
    }

    return(
        <div>
            <button onClick={listData}>확인</button>
            <hr/>
            <button onClick={modify0}>수정0</button>
            <button onClick={modify1}>수정1</button>
            <button onClick={modify2}>수정2</button>
        </div>
    )
}

export default App;