import React, { useContext, useState } from "react";
import { ProductContext, StylesContext } from "../../store.jsx";
import { OverviewContext, initialState } from "./context.jsx";

export default function Overview() {
  const product = useContext(ProductContext);
  const styles = useContext(StylesContext);

  // console.log("Overview Context from component", product.name);

  return (
    <OverviewContext.Provider value={initialState}>
      <div>
        <PriceInput />
      </div>
    </OverviewContext.Provider>
  );
}

const PriceInput = () => {
  const state = useContext(OverviewContext);
  const [input, SetInput] = useState("");
  const isValid = useState(false);

  var onChange = (e) => {
    SetInput(e.target.value);
    console.log(input);
  };

  return (
    <div>
      <input onChange={onChange}></input>
    </div>
  );
};
