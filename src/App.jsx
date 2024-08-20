import Cart from "./components/cart/cart";
import ProductsContainer from "./components/productsContainer/productsContainer";

function App() {
  return (
    <div className="flex justify-around pt-6">
      <ProductsContainer />
      <Cart />
    </div>
  );
}

export default App;
