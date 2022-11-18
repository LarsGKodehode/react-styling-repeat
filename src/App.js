import Button from "./components/Button/Button";
import Container from "./components/Container";

import "./App.css"

function App() {
  return (
    <>
      <Button>Styled Button</Button>

      <Container
        title="Some title"
        text="Some text down here"
      />
    </>
  );
}

export default App;
