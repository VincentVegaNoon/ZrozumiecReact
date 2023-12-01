import { Item } from "../Item/Item";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledListItem = styled(Item)`
  margin-bottom: 50px;
`;

export function List() {
  return (
    <>
      <button onClick={() => alert(`Liczba emoji: ${emojis.length}`)}>Pokaż liczbę emoji</button>
      <ul className="flex flex-col gap-8 p-8">
        {emojis.map((emoji) => (
          <StyledListItem key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
