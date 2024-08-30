const Bredcrumb = ({ items }) => {
  const lastItemIndex = items.length - 1;
  return (
    <div>
      {items.map((item, index) => {
        return (
          <>
            <span>
              <a className="text-decoration-none text-black" href={item.url}>
                {item.name}
              </a>
            </span>
            {index !== lastItemIndex ? <span> / </span> : null}
          </>
        );
      })}
    </div>
  );
};

export default Bredcrumb;
