import { useState } from "react";
import { Review } from "./Review";

const initialReviews = [
  { author: "Brain", text: "Najlepszy film ever", id: 1 },
  { author: "Jessica", text: "Nie podoba mi sie", id: 2 },
];

export function Form() {
  const [reviews, setReviews] = useState(initialReviews);
  const [inputValue, setInputValue] = useState("Filip");
  const [textareaValue, setTextareaValue] = useState("Tekst");

  const reviewElement = reviews.map((r) => <Review key={r.id} author={r.author} text={r.text} />);

  function handleSubmit(event) {
    event.preventDefault();

    const author = inputValue;
    const text = textareaValue;

    setReviews((prevReviews) => {
      return [{ author, text, id: prevReviews.length + 1 }, ...prevReviews];
    });
  }

  console.log("Wartosc zmiennej stanowej input: ", inputValue);
  console.log("Wartosc zmiennej stanowej textarea: ", textareaValue);
  return (
    <>
      <hr />
      <ul>{reviewElement}</ul>
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
