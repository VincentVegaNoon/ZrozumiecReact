import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";
import { Form } from "./components/Form";

function App() {
  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <LikesCounter />
      <Plot />
      <Form />
    </>
  );
}

export default App;
