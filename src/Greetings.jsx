export function Greetings(props) {
  if (props.firstName === "Rachel") {
    return <p>Oui c'est toi, Rachel</p>;
  } else {
    return (
      <ul>
        <li>Hello {props.firstName}</li>
        <li>my age is {props.age}</li>
        <li>friend</li>
      </ul>
    );
  }
}
