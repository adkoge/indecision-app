console.log("My app is running");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderOptionsApp();
  }
};

// on click -> wipe the array -> rerender
const removeAllItems = () => {
  app.options = [];
  renderOptionsApp();
}

const appRoot = document.getElementById("app");

const renderOptionsApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAllItems}>Remove All</button>
      {<p>1</p>}
      <ol>
        {
          app.options.map(option => {
            return (
              <li key={option}>{option}</li>
            )
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, appRoot);
}

renderOptionsApp();