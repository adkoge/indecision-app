const appRoot = document.getElementById("app");

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  console.log(`Toggle state is ${visibility}`);

  renderVisibilityApp();
}

const renderVisibilityApp = () => {
  const jsx = (
    <div>
      <h1>Visibilty Toggle</h1>
      <button onClick={toggleVisibility}>{visibility ? "Hide details" : "Show details"}</button>
      {visibility && (
        <div>
          <p>These are some details</p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(jsx, appRoot);
}

renderVisibilityApp();
