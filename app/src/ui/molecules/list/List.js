const List = ({ items }) => {
  return (
    <ul className="list-unstyled">
      {items.map((item) => (
        <li className="mb-3">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
