import { useCartContext } from "../../context/RootContext";

export default function Cart() {
  const { cart, deleteCart } = useCartContext();

  function calcCart() {
    if (cart.length !== 0) {
      console.log(cart);
      let sumPrice = cart.map((item) => item.price);
      return (sumPrice = sumPrice.reduce((acc, value) => (acc += value)));
    }
  }

  function calcCountProduct() {
    if (cart.length !== 0) {
      let count = cart.length;
      return count;
    } else {
      return 0;
    }
  }

  let count = calcCountProduct();

  return (
    <div className="flex flex-col">
      {count === 0 ? (
        <h1 className="w-72 text-center">Cart is empty now</h1>
      ) : (
        <h1 className="text-center">{count} Product</h1>
      )}
      <div className="border-t border-black">
        {cart.map((item) => (
          <div key={item.id} className="p-2 border-2 rounded-md my-4">
            <div className="flex justify-between items-center">
              <img src={item.imgUrl} alt={item.name} className="w-16 mr-4" />
              <div className="flex flex-col items-start gap-2">
                <p className="overflow-hidden whitespace-nowrap text-ellipsis w-64">
                  {item.name}
                </p>
                <div className="flex justify-between gap-3">
                  <div className="space-x-1">
                    <span>${item.price}</span>
                    <span>*{item.count}</span>
                  </div>
                  <button
                    className="bg-blue-300 rounded-md py-1 px-3"
                    onClick={() => deleteCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {cart.length !== 0 && (
          <div className="flex justify-between items-center">
            <span>{calcCart()}</span>
            <button className="bg-yellow-300 rounded-md py-2 px-4">
              Proceed
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
