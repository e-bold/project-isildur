function ListGroup() {
  const items = ["New York", "San Francisco", "London", "Chicago"];

  return (
    <>
      <h1>Hello</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
