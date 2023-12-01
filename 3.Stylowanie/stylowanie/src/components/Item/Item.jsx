import { useState } from "react";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li className="bg-salmon py-8 px-12 rounded-3xl text-center overflow-hidden">
      <span className={`block mb-10 font text-3xl transition-transform ${zoomed ? "scale-[2]" : ""}`}>{emoji}</span>
      <button
        className={`bg-transparent border border-solid border-white p-3 rounded cursour-pointer w-[120px] text-white transition-colors hover:text-salmon hover:bg-white`}
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Oddal" : "Przybliż"}
      </button>
    </li>
  );
}
