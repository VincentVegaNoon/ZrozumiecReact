import ReactDOM from "react-dom/client";
import Link from "./components/Link";

const element = (
  <>
    <h1>Nasza strona</h1>
    <main>
      <Link text="Sprawdz strone kursu!" shouldOpenNewTab={true} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perspiciatis vero ducimus qui eligendi ad
        veniam quia itaque facere saepe?
      </p>
      <Link text="https://zrozuimecreact.pl" shouldOpenNewTab={false} />
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
