import Button from "../Button/Button"
import "../ToDo.css" // navigating up to List folder- which is on same level where ToDo.css is located

const List = ({ children}) => {
    return (
        <li>
            {children}
        </li>

    );
};

// By using the children prop, your List component becomes more flexible and reusable. You can use it to render different types of content or components as children, depending on your needs. This makes your code more modular and easier to maintain, as you can use the same component in 

export default List

// Destructuring props object to access 'toDoItem' prop with { }, see the Button.jsx note