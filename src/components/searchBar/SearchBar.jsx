import { useState } from "react";
import "./seachBar.scss";
import clsx from "clsx";

export default function SearchBar() {
  const types = ["buy", "rent"];

  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  function switchType(val) {
    setQuery((prevVal) => ({ ...prevVal, type: val }));
  }

  const buyRent = types.map((type) => {
    const className = clsx({
      active: query.type === type,
    });
    return (
      <button key={type} onClick={() => switchType(type)} className={className}>
        {type}
      </button>
    );
  });

  return (
    <div className="searchBar">
      <div className="type">{buyRent}</div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}
