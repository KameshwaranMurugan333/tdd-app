import React from "react"

export const Counter = () => {

    const [count, setCount] = React.useState(0);

    const incrementBtnClick = () => setCount(count + 1);

    const decrementBtnClick = () => setCount(count - 1);

    return <div>
        <h1>Counter App</h1>

        <h3 data-testid="counterText">{count}</h3>
        
        <button
            data-testid="incrementBtn"
            onClick={incrementBtnClick}>
            Increment 
        </button>

        <button
            data-testid="decrementBtn"
            onClick={decrementBtnClick}
        >
            Decrement
        </button>
    </div>
}