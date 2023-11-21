const address = "https://zrozumiecreact.pl";

export default function Link({ text = address, shouldOpenNewTab }) {
  const target = shouldOpenNewTab ? "_blank" : "";
  const rel = shouldOpenNewTab ? "noopener noreferrer" : "";

  return (
    <a href={address} target={target} rel={rel}>
      {text}
    </a>
  );
}
