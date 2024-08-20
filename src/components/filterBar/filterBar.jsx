import { useContext } from "react";
import { RootContext } from "../../context/RootContext";

export default function FilterBar() {
  const { params, setParams } = useContext(RootContext);
  return (
    <div className="flex justify-around items-center">
      <span>Products</span>

      <div>
        <label htmlFor="order">Order</label>
        <select
          name="order"
          id="order"
          onChange={(e) => setParams({ ...params, order: e.target.value })}
        >
          <option value="asc">Lowest</option>
          <option value="desc">Highest</option>
        </select>
      </div>

      <div>
        <label htmlFor="Filter">Filter</label>
        <select
          name="Filter"
          id="Filter"
          onChange={(e) => setParams({ ...params, size: e.target.value })}
        >
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
}
