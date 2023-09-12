import React from "react";

class App extends React.Component {
  //로딩 상태를 구분해주는 변수 isLoading state
  state = {
    isLoading : true,
  };

  // 컴포넌트가 처음 화면에 그려지는 실행되는 함수 componentDidMount()
  // 화면에 처음 시작에는 isLoading의 상태가 false였다가 6초(6000)이후 true로 state가 변경됨
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false});
    },6000);
  }


  render() {
    const {isLoading} = this.state;
    return <div>{isLoading? 'Loading...': 'We are ready'}</div>;   //삼항 연산자 true일때는 왼쪽, false 일때는 오른쪽
  }  

}

export default App;
