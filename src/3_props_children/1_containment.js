// 3_props_children / 1_containment.js

import './temp.css';

function FancyBorder(props){
    return(
        <div className='FancyBorder'>
            <div>{props.item}</div>
            {props.children}
        </div>
    );
}

// FancyBorder 말고도 아래있는 태그들도 적용하려면 
//  {props.children} 사용하면 아래 h1 이나 p 태그들도 css 적용됨

function WelcomePart(props){
    return(
        <FancyBorder item="중요한 정보"> 
            <h1 className='Dialog-title'>환영합니다</h1>
            <p className='Dialog-message'>우리 사이트 방문은 당신에게 행운입니다</p>
        </FancyBorder>
    );
}

function App(){
    return  <WelcomePart/>;
}

export default App;