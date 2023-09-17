import React from "react";

class Datail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Datail

// props 객체에 state가 보이지 않는 이유는 React Router v6에서 props 객체에 state 정보가 포함되지 않기 때문입니다. 이전 버전의 React Router에서는 라우터를 통해 컴포넌트로 state를 전달할 수 있었지만, React Router v6에서는 이러한 방식이 변경되었습니다.

// React Router v6에서는 location 객체를 통해 state 정보를 전달합니다. location 객체는 컴포넌트의 props 내에 포함되어 있으며, state 속성을 포함하고 있습니다.

// 따라서 Detail 컴포넌트에서 state 정보에 접근하려면 location 객체를 통해 접근해야 합니다. 