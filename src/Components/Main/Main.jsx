import "./Main.css";

// Main contains a header blurb allowing uses to see what the app is about
// The Main section on html is enclosed in main html tags - hence the use of <main> tags in the JSX

const Main = () => {
  return (
    <main>
      <h1> All the stuff you have to do </h1>
      <p>
        React has an attitude and gets super moody when there's stuff to do...
      </p>
      <p>
        You can assign yourself tasks and React puts them in a list for you.
      </p>
      <p> You can then delete tasks as you complete or delete all of them. </p>
    </main>
  );
};

export default Main;
