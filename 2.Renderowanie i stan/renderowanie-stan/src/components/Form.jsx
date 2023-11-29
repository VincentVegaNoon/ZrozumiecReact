import { useState } from "react";

export function Form({ onReviewSubmit }) {
  const [inputValue, setInputValue] = useState("Filip");
  const [textareaValue, setTextareaValue] = useState("Tekst");

  function handleSubmit(event) {
    event.preventDefault();

    const author = inputValue;
    const text = textareaValue;

    onReviewSubmit(author, text);
    setInputValue("");
    setTextareaValue("");
  }

  return (
    <>
      <hr />

      <h2>Dodaj recenzje</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="author">Autor</label>
          </div>
          <input
            type="text"
            name="author"
            id="author"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <div>
            <label htmlFor="text">Tekst</label>
          </div>
          <textarea
            name="text"
            id="text"
            value={textareaValue}
            onChange={(event) => {
              setTextareaValue(event.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit" disabled={inputValue === "" || textareaValue === ""}>
          Dodaj
        </button>
      </form>
    </>
  );
}
