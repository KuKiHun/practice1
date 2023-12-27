// 4_stop_render.js

import { useState } from "react";

/*
    rendering : 화면 출력

    렌더링을 막고자 할 때 : return null
*/

function Banner(props){
    if( !props.show ) return null;
    return(<div>광고</div>)
}

function MainPage(props){
    const [show, setShow] = useState(false);

    const toggleHandler = () => {
        setShow(!show);
    }
    return(
        <div>
            <Banner show={show} />
            <hr/>
            <button onClick={toggleHandler}>{ show? '감추기' : '보이기' }</button>
        </div>
    );
}


function App(){
    return(<MainPage/>);
}
export default App;