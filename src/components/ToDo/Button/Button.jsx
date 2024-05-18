import "../ToDo.css" // navigating up to Button folder- which is on same level where ToDo.css is located
// Note: user lower case for html elements and upper case for components

const Button = ({ color, children, onClickFunction }) => {
    return (
        <button className={color === "red" ? "redBtn" : "greenBtn"} onClick={onClickFunction}>
            {children}
      </button>
          
    );
};

export default Button;

// button component has text and className which defines its color and event listener 
// button accepts the color, text, and onClickFunction as props and has a ternary statement that allows the className to be updated based on the color attribute 
// "Here, { color, children, onClickFunction } is an object destructuring syntax that extracts the color, children, and onClickFunction props from the props object passed to the Button component. This allows you to use these props directly within the component without referencing props.color, props.children, or props.onClickFunction."

// Things I learned: 
// note: "In JSX, you can add custom attributes to HTML elements using curly braces {} to denote JavaScript expressions. So, when you write <button color={"red"}> in JSX, you are passing a JavaScript expression as the value for the color attribute."
       

// 'children is a special prop in React that represents the content between the opening and closing tags of a component.""