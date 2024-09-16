import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/slices/cartSlice";
import { AppDispatch, RootState } from "../../store/slices/store";
import { CartItem } from "../../store/slices/types";
import styled from "styled-components";

const Cart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector<RootState, CartItem[]>(
    (state) => state.cart.items
  );

  const handleRemove = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.toString().replace(/\s+/g, ""));
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <CartStyle>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ItemList>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img className="product" src={item.imgURL} alt={item.title} />
                {item.title}
                <button onClick={() => handleRemove(item.id)}>
                  <img className="trash" src="/public/icons/trash.svg" alt="" />
                </button>
              </li>
            ))}
          </ItemList>
          <TotalPrice>Итого: {totalPrice} ₽</TotalPrice>
        </>
      )}
    </CartStyle>
  );
};

const CartStyle = styled.div`
  /* Add any additional styles for the cart here */
`;

const ItemList = styled.ul`
  max-height: 300px;
  overflow-y: auto;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 30px;
    font-family: Intro Book;
    font-size: 14px;
    line-height: 20px;
    padding: 10px; /* Add some padding for better spacing */
  }

  .product {
    width: 100px;
    height: auto;
  }

  button {
    background-color: white;
    border: none;
  }
`;

const TotalPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px; /* Add some space above the total price */
`;

export default Cart;
