import "./App.css";
import Message from "./Message";

const App = () => {
  return (
    <div className="App">
      <Message message="siks" color="red" />
      <Message message="otro msg" color="blue" />
    </div>
  );
};

export default App;
