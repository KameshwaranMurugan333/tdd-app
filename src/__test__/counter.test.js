import { render, fireEvent, screen } from "@testing-library/react";
import { Counter } from "../screens";

//test blocks

// Checking counter is initialized
test("check counter initialized", () => {
    // Render the component on virtual DOM
    render(<Counter />)

    // Checking the count is initialized
    const counter = screen.getByTestId("counter");

    // Assert the expected result
    expect(counter).toHaveTextContent("0")
});

// Checking increment function is working or not
test("check increment functionality", ()=> {
    // Render the component on virtual DOM
    render(<Counter />)

    // Checking the count is initialized
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("incrementBtn");

    // Performing Click Action
    fireEvent.click(incrementBtn);

    // Assert the expected result
    expect(counter).toHaveTextContent("1")
})

// Checking decrement function is working or not
test("check decrement functionality", ()=> {
    // Render the component on virtual DOM
    render(<Counter />)

    // Checking the count is initialized
    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByTestId("decrementBtn");

    // Performing Click Action
    fireEvent.click(decrementBtn);
    
    // Assert the expected result
    expect(counter).toHaveTextContent("-1");

    fireEvent.click(decrementBtn);

    expect(counter).toHaveTextContent("-2");
})

// Checking multiply is working or not
test("check mulitpy functionality",()=>{
    // Mouting the component to virtual DOM
    render(<Counter />);

    // Getting element to check
    const counter = screen.getByTestId("counter");
    const mulitpyBtn = screen.getByTestId("multiplyBtn");
    const incrementBtn = screen.getByTestId("incrementBtn");

    // Incremention counter
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    // Checking correctly incrementd
    expect(counter).toHaveTextContent("2");

    // Multiplying counter
    fireEvent.click(mulitpyBtn);

    // Checking correctly multiplied
    expect(counter).toHaveTextContent("4");
})