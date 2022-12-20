import Button from "./components/button/button";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Button variant="primary">Primary Button</Button>
      <Button>Secondary Button</Button>
      <Button variant="dashed">Dashed Button</Button>
      <Button variant="text">Text Button</Button>
      <Button variant="link">Link Button</Button>
    </div>
  );
}

export default App;
