class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return <div>
        <form action="">
          AddOption component here
          <button>Add option</button>
        </form>
      </div>;
  }
}

const jsx = (
  <div>
    <Header/>
    <Action />
    <Options />
    <AddOption />
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'));