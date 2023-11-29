import { useState } from "react";
import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";
import { Form } from "./components/Form";
import { Reviews } from "./components/Reviews";

const initialReviews = [
  { author: "Brain", text: "Najlepszy film ever", id: 1 },
  { author: "Jessica", text: "Nie podoba mi sie", id: 2 },
];

function App() {
  const [reviews, setReviews] = useState(initialReviews);
  const [counterShown, setCounterShown] = useState(true);
  const [numberOfLikes, setNumberOfLikes] = useState(50);

  function handleLikeButtonClick() {
    setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 1);
  }

  function handleLoveButtonClick() {
    setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 3);
  }

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <button
        onClick={() => {
          setCounterShown(!counterShown);
        }}
      >
        {counterShown ? "Schowaj counter" : "Pokaz counter"}
      </button>
      {counterShown && (
        <LikesCounter
          numberOfLikes={numberOfLikes}
          onLikeButtonClick={handleLikeButtonClick}
          onLoveButtonClick={handleLoveButtonClick}
        />
      )}
      <Plot />
      <Reviews reviews={reviews} />
      <Form
        onReviewSubmit={(author, text) => {
          setReviews((prevReviews) => {
            return [{ author, text, id: prevReviews.length + 1 }, ...prevReviews];
          });
        }}
      />
    </>
  );
}

export default App;
