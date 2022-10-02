import React from "react"

export const Counter = (props) => {

    const [count, setCount] = React.useState(0);

    return <div>
        <p data-testid="counter">{count}</p>
        <button data-testid="incrementBtn" onClick={(e) => setCount(count + 1)} >Increment</button>
        <button data-testid="decrementBtn" onClick={(e) => setCount(count - 1)}>Decrement</button>
        <button data-testid="multiplyBtn" onClick={(e) => setCount(count * 2)}>Decrement</button>
    </div>
}