import React, { Component } from "react";

class Counter extends Component {
    state = {
        number: 0,
        cat: "Meow",
        dog: {
            age: 5,
            breed: "Jindo",
            gender: "male"
        }
    };

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1,
            age:this.state.dog.age + 1
        });
    };

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1,
            age:this.state.dog.age - 1
        });
    };

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <div>개 나이 : {this.state.dog.age}</div>            
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <div>{this.state.cat}</div>
            </div>
        );
    }
}

export default Counter;

//class fields를 사용하지 않는 경우
class Counter2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }
}
