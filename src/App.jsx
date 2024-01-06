import { Greetings } from "./Greetings";

export function App() {
  return (
    <>
      <input type="text" />
      <button>Click</button>
      <Greetings firstName={"Rachel"} age={30} car={{ color: "red" }} />
    </>
  );
}
