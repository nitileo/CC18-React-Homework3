import React, { useState, useEffect } from "react";

export default function SearchBar(props) {
  const { setData } = props;
  const [search, setSearch] = useState("");
  const [realSearch, setRealSearch] = useState("");

  async function fetchData() {
    const productInfo = await fetch(
      `https://dummyjson.com/products/search?q=${realSearch}`
    );
    const result = await productInfo.json();
    console.log(result);
    // console.log("test");
    setData(result.products);
  }

  useEffect(() => {
    let sto = setTimeout(() => {
      setRealSearch(search);
    }, 1000);
    return () => {
      clearTimeout(sto);
    };
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [realSearch]);

  return (
    <div>
      <input
        type="text"
        className="bg-slate-200 w-2/5 rounded-lg mt-3 p-2"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
