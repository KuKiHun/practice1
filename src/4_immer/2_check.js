import produce from 'immer';
import { useState } from "react";

const App = () => {
    const [studentMng, setStudentMng] = useState({
        names: ['홍길동', '박길동'],
        major: [
            { dept: '컴공', title: '자바' },
            { dept: '소공', title: '파이썬' },
            { dept: '소공', title: '리눅스' },
            { dept: '컴공', title: '리액트' },
        ],
        hobby: ['티비', '먹기', '잠자기']
    });

    const listData = () => {
        console.log('0>', studentMng);
    }

    // major 배열에서 2번째 데이타에서 title 속성값을 '스프링'으로 변경하는 함수
    const normal = () => {
        const temp = [...studentMng.major];
        temp[1] = { ...temp[1], title: '스프링' };
        setStudentMng({ ...studentMng, major: temp });
        console.log('[1] --------------------');
        console.log('[temp]', temp);//스프링으로 변경됨
        console.log('[studentMng]', studentMng);//스프링으로 변경안됨
    }

    // immer를 사용하여 major 배열에서 2번째 데이타에서 title 속성값을 '스프링'으로 변경하는 함수
    const immerz = () => {
        const temp = produce(studentMng, draft => {
            draft.major[1].title = '스프링';
        });
        setStudentMng(temp);
        console.log('[2] --------------------');
        console.log('[temp]', temp);//스프링으로 변경됨
        console.log('[studentMng]', studentMng);//스프링으로 변경안됨
    }

    return (
        <div>
            <button onClick={normal}>일반방식</button>
            <button onClick={immerz}>immer 방식</button>
            <hr />
            <button onClick={listData}>확인</button>
        </div>
    );
}

export default App;