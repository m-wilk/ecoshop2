const List = ({ items, liClassName = 'mb-3' }) => {
  return (
    <ul className="list-unstyled">
      {items.map((item) => (
        <li className={liClassName}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
