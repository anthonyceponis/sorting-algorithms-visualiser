import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;
