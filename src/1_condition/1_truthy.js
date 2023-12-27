// 1_condition/1_truthy.js

function MemberGreeting(props){
    return <h1> 오늘도 반갑습니다</h1>;
}
function GuestGreeting(props){
    return <h2>회원가입을 해주세요</h2>
}

function Greeting(props){
    const isLogin = [];

    /*
        {}          :true (MemberGreeting)
        []          :true (MemberGreeting)
        ''          :false
        0           :false
        1           :true (MemberGreeting)
        -1          :true (MemberGreeting)
        null        :false
        NaN         :false
        undefined   :false
        "0"         :true (MemberGreeting)
        "false"     :false
    */

    if(isLogin) return <MemberGreeting/>
    else return <GuestGreeting/>
}

function App(){
    return <Greeting/>
}
export default App;