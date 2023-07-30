import React,{useState} from "react";


function Item({ name, category }) {
  const [className, setClassName] = useState("");

  function changeClassName() {
   
    const updatedClassName = "in-cart";
    setClassName(updatedClassName);
  }

  return (
    <li className={className}>
    <span>{name}</span>
    <span className="category">{category}</span>
    <button className="add" onClick={changeClassName}>
      Add to Cart
    </button>
  </li>
  );
}

export default Item;
