import { useState } from "react";

function App() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const [closeWarning, setCloseWarning] = useState(true);

  function handleClick() {
    setIsSpoilerShown(!isSpoilerShown);
    console.log(isSpoilerShown);
  }

  function handleCloseWarningClick() {
    setCloseWarning(!closeWarning);
    console.log(closeWarning);
  }

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h2>Fabuła</h2>
      {closeWarning ? (
        <p>
          Uwaga! Opis fabuly zawiera spoilery <button onClick={handleCloseWarningClick}>X</button>
        </p>
      ) : (
        <p>Dobrzy walcza ze zlymi. Trzeba wylaczyc pole silowe</p>
      )}
      <button onClick={handleClick}>{isSpoilerShown ? "Ukryj spoiler" : "Pokaz spoiler"}</button>
      {isSpoilerShown && <p>Vader okazuje sie byc ojcem luka</p>}
    </>
  );
}

export default App;
