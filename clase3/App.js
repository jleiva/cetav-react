// La version en JSX no funciona porque falta Babel

const Pet = (props) => {
  console.log(props)
  // return React.createElement('div', 
  //   {}, 
  //   React.createElement("h1", {}, props.name),
  //   React.createElement("h2", {}, props.animal),
  //   React.createElement("h3", {}, props.breed)
  // )
  return (
    <div id="wrapper">
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h3>{props.breed}</h3>
    </div>
  )
}

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet,{name: 'Bella', animal: 'dog', breed: 'Bulldog'}),
  //   React.createElement(Pet,{name: 'Mimi', animal: 'cat', breed: 'black'})
  // ]);
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Bella" animal="dog" breed="Bulldog"/>
      <Pet name="Mimi" animal="cat" breed="black"/>
    </div>
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));