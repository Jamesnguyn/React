console.log("App js running");

const app = {
  title: 'Indecision App',
  subTitle: 'paragraph',
  options: ['One', 'Two'],
};

const template = (
  <div> 
    <h1> { app.title } </h1> 
    { app.subTitle && <p> {app.subTitle} </p> }
    <p> { app.options.length > 0 ? 'Here are your options' : 'No options' } </p>
    <ol>
      <li> one </li>
      <li> two </li>
    </ol>
  </div>
);

let currentCount = 0;

const increment = () => {
  currentCount++;
  renderCounterApp();
};

const decrement = () => {
  currentCount--;
  renderCounterApp();
};

const reset = () => {
  currentCount = 0;
  renderCounterApp();
};

//console.log(templateTwo);

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {currentCount} </h1>
      <button onClick = { increment } > + 1 </button>
      <button onClick = { reset } > RESET </button>
      <button onClick = { decrement } > - 1 </button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();