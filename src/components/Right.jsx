import { useState } from "react";

export default function Right() {
  const [quantity, setQuantity] = useState(0);

  const addArticle = () => {
    setQuantity((previousValue) => previousValue + 1);
  };

  const removeArticle = () => {
    if (!quantity) {
      setQuantity(0);
    } else {
      setQuantity((previousValue) => previousValue - 1);
    }
  };

  return (
    <section className="right">
      <h2>SNEAKER COMPANY</h2>
      <h3>Fall Limited Edition Sneakers</h3>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everthing
        the weather can offer.
      </p>
      <div className="price">
        <h2>$125.00</h2>
        <h3>50%</h3>
      </div>
      <h4>$250.00</h4>
      <div className="basket">
        <div className="basket_manager">
          <button onClick={removeArticle}>-</button>
          <p>{quantity}</p>
          <button onClick={addArticle}>+</button>
        </div>
        <button>Add to cart</button>
      </div>
    </section>
  );
}
