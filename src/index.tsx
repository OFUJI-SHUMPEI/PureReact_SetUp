import * as ReactDOM from "react-dom";
import "./style.css";

const App = () => (
  <div>
    <h1 className="hello-react">Hello React!</h1>
  </div>
);

ReactDOM.render(<App />, document.querySelector("#app"));
