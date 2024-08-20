import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FilterBar from "../filterBar/filterBar";
import Product from "../product/product";
import { useContext } from "react";
import { RootContext } from "../../context/RootContext";

export default function ProductsContainer() {
  const { params, setParams } = useContext(RootContext);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", params],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/products?_sort=price&_order=${params.order}&q=${params.size}`
      );
      return res.data;
    },
  });

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <FilterBar />
      <section className="grid grid-cols-3 gap-4 py-4">
        {isLoading ? (
          <div>LOADING...</div>
        ) : (
          data.map((item) => <Product item={item} key={item.id} />)
        )}
      </section>
    </div>
  );
}
