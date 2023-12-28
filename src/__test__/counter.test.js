import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from '../screens/counter';

// 1. To check wheather the counter screen is rendered or not
test('Check Counter component rendered correctly', () => {
    render(<Counter />);
    const linkElement = screen.getByText(/Counter App/i);
    expect(linkElement).toBeInTheDocument();
});

// 2. To check wheather the increment button is present in the counter component
test('Check Increment button is there or not', () => {
    render(<Counter />);
    const linkElement = screen.getByTestId("incrementBtn");
    
    expect(linkElement).toBeInTheDocument();

    expect(linkElement).toHaveTextContent("Increment");
})

// 3. To check wheather the decrement button is present in the counter component
test('Check Decrement button is there or not', () => {
    render(<Counter />);
    const linkElement = screen.getByTestId("decrementBtn");
    expect(linkElement).toBeInTheDocument();
})

// 4. To check wheater the counter text is present or not
test('Check counter text is present or not', () => {
    render(<Counter />);
    const linkElement = screen.getByTestId("counterText");
    expect(linkElement).toBeInTheDocument();
})

// Functionality TestCases

// 5. To check wheater the counter is initialized to 0
test('Check counter is initialized to 0', () => {
    render(<Counter />);
    const counterTextEle = screen.getByTestId("counterText");
    expect(counterTextEle).toHaveTextContent(0);
})

// 6. To check wheather the increment is working fine
test('Check increment functionality', () => {
    render(<Counter />);

    const incrementBtn = screen.getByTestId("incrementBtn");
    fireEvent.click(incrementBtn);

    const counterTextEle = screen.getByTestId("counterText");
    expect(counterTextEle).toHaveTextContent(1);
})

// 7. To check wheather the decrement is working fine
test('Check decrement functionality', () => {
    render(<Counter />);

    const decrementBtn = screen.getByTestId("decrementBtn");
    fireEvent.click(decrementBtn);

    const counterTextEle = screen.getByTestId("counterText");
    expect(counterTextEle).toHaveTextContent(-1);
})

// 8. To check wheather the increment and decrement is working fine continuously
test('Check increment and decrement is working fine continuously', () => {
    render(<Counter />);

    const counterTextEle = screen.getByTestId("counterText");
    const counter = counterTextEle.innerText;

    const incrementBtn = screen.getByTestId("incrementBtn");
    fireEvent.click(incrementBtn);
    expect(counterTextEle).toHaveTextContent(1);

    const decrementBtn = screen.getByTestId("decrementBtn");
    fireEvent.click(decrementBtn);
    expect(counterTextEle).toHaveTextContent(0);
})