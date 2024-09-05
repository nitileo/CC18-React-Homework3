import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="text-center flex flex-col gap-1">
      <h1 className="text-2xl bg-red-400 p-2 font-bold text-white">
        Product Search
      </h1>
      <SearchBar setData={setData} />
      <ProductList data={data} />
    </div>
  );
}

export default App;
