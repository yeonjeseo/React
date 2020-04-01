import React from 'react';

const MyAge = ({age}) => {
    return (
        <div>
            안녕하세요! 제 나이는 {age} 입니다.
        </div>
    )
}

MyAge.defaultProps = {
    age : '기본값'
}
export default MyAge;