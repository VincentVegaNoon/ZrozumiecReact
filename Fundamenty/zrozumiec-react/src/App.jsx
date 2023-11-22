import { PersonInfo } from "./components/PersonInfo";
import dogImg from "./assets/dog.jpg";

function App() {
  const jan = {
    name: "Jan",
    lastName: "Kowalski",
    mail: "j.kowalski@gmial.com",
    tel: "+48 888 000 111",
  };
  const janina = {
    name: "Janina",
    lastName: "Kowalska",
    mail: "janina.kowalska@gmial.com",
    tel: "+48 888 000 222",
  };
  const karol = {
    name: "Karol",
    lastName: "Kowalski",
    mail: "karol.kowalski@gmial.com",
  };
  return (
    <>
      <PersonInfo person={jan} />
      <PersonInfo person={janina} />
      <PersonInfo person={karol} />
      <img src={dogImg} alt="" />
    </>
  );
}

export default App;
