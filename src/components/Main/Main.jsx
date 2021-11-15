import React, { useState, useEffect } from "react";
import { API_URL } from "../../config";
import "./Main.css";
import Preloader from "../Preloader/Preloader";
import GoodsList from "../GoodsList/GoodsList";
import Cart from "../Cart/Cart";
import CartList from "../CartList/CartList";

export default function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShown, setCartShown] = useState(false);

  //fetch data from API
  const getData = (url, setValue) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.books && setValue(data.books);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  //shown or hidden cart
  const toggleCartDisplay = () => {
    setCartShown(!isCartShown);
  };

  //add good to cart
  const addToCart = (item) => {
    //to check if item already in cart
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      //first time in cart
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      //good is already in a cart
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  //get goods on componentDidMount
  useEffect(() => {
    getData(API_URL, setGoods);
  }, []);

  return (
    <main className="container content">
      <Cart
        order={order}
        quantity={order.length}
        toggleCartDisplay={toggleCartDisplay}
      />
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <GoodsList goods={goods} addToCart={addToCart} />
        </div>
      )}

      {isCartShown && (
        <CartList
          order={order}
        />
      )}
    </main>
  );
}
