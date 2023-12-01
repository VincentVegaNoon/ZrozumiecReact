import { Item } from "../Item/Item";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const WIDTH = 120;

export function List() {
  return (
    <>
      <button
        className={`bg-transparent border border-solid border-rose-800 p-3 rounded cursour-pointer w-[${WIDTH}px] text-salmon transition-colors m-8 hover:text-white hover:bg-salmon`}
        onClick={() => alert(`Liczba emoji: ${emojis.length}`)}
      >
        Pokaż liczbę emoji
      </button>
      <ul className="flex flex-col gap-8 p-8">
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
