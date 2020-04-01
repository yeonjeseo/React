import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyName from './MyName';
import MyAge from './MyAge';
import Counter from './Counter';

function App() {
    const name = "Yeon Jeffrey Seo";
    const value = 1;
    const style = {
        backgroundColor: "black",
        padding: "16px",
        color: "white",
        fontSize: "12px"
    };

    return (
        <Fragment>
            <div>
                <input type='text'></input>
            </div>
            <div>blahblah</div>
            <div>Hello {name}</div>
            <div>{1 + 1 === 3 ? <span>true</span> : <span>false</span>}</div>
            <div style={style}>{1 + 5 === 6 && <div>맞아요!</div>}</div>
            <div>
                {(function() {
                    if (value === 1) return <div>하나!</div>;
                    if (value === 2) return <div>둘!</div>;
                    if (value === 3) return <div>셋</div>;
                })()}
            </div>
            {/* 익명 함수 */}
            <div>
                {(() => {
                    if (value === 1) return <div>하나!</div>;
                    if (value === 2) return <div>둘!</div>;
                    if (value === 3) return <div>셋!</div>;
                })()}
            </div>
            <div className='App'>안녕하세요!</div>
            <MyName/>
            <MyAge age = "31"/>
            <Counter/>
        </Fragment>
    );
}

export default App;
