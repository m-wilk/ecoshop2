import List from "../../molecules/list/List";

const dataFromBackend = [
  {
    id: 1,
    name: "Vegrtable",
  },
  {
    id: 2,
    name: "Friuts",
  },
  {
    id: 3,
    name: "Other Food",
  },
  {
    id: 4,
    name: "Vegrtable",
  },
  {
    id: 5,
    name: "Friuts",
  },
  {
    id: 6,
    name: "Other Food",
  },
  {
    id: 4,
    name: "Vegrtable",
  },
  {
    id: 5,
    name: "Friuts",
  },
  {
    id: 6,
    name: "Other Food",
  },
].map(({ id, name }) => (
  <div class="form-check">
    <label className="form-check-label">
      <input
        className="form-check-input border-black"
        type="checkbox"
        value=""
      />
      {name}
    </label>
  </div>
));

const Shop = () => {
  return (
    <div className="pt-5 pb-5 container">
      <div className="row">
        <div className="col-lg-3">
          <div className="rounded-1 shadow-lg px-3 py-4">
            <h4 className="mb-4">Product Category</h4>
            <List items={dataFromBackend} liClassName="mb-5" />
            <hr className="mt-5 mb-5 border-primary" />
            <div>wtyczka</div>
            <hr className="mt-5 mb-5 border-primary" />
            <h4 className="mb-4">Brands</h4>
            <List items={dataFromBackend} liClassName="mb-5" />
            <h4 className="mb-4">Weight</h4>
            <List items={dataFromBackend} liClassName="mb-5" />
          </div>
        </div>
        <div className="col-lg-9">reszta</div>
      </div>
    </div>
  );
};

export default Shop;
