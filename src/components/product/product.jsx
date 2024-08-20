import { useCartContext } from "../../context/RootContext";

export default function Product({ item }) {
  const { addToCart, deleteCart, cart } = useCartContext();

  return (
    <div className="flex flex-col border-2 p-2 gap-2">
      <div>
        <img
          src={item.imgUrl}
          alt={item.name}
          className="w-[300px] h-[383px]"
        />
      </div>
      <div className="text-xl">
        <h1>{item.name}</h1>
      </div>
      <div className="flex justify-around p-4 items-center">
        <span>{item.price}$</span>

        <button
          className="bg-yellow-300 rounded-md py-1 px-3"
          onClick={() => addToCart(item)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
