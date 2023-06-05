import Header from "./components/header";
import Products from "./components/products";

const Home = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Products />
    </div>
  );
}

export default Home;