import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/slices/store";
import styled from "styled-components";

interface BtnHeaderProps {
  onOpenModal: () => void;
}

const BtnHeader: React.FC<BtnHeaderProps> = ({ onOpenModal }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Button className="cart__btn" onClick={onOpenModal}>
      Корзина
      <img
        className="add_to_cart"
        src="/public/icons/add-to-basket.svg"
        alt="cart"
      />
      <span>{totalItems}</span>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  aligh-items: center;
  position: relative;
  background: none;
  border: none;
  color: white;
  font-family: "Intro Book";
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
  gap: 10px;

  span {
    position: absolute;
    right: -3px;
    bottom: -8px;
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: var(--btn-lgt);
    border-radius: 50%;
    line-height: 14px;
    font-size: 13px;
  }

  .add_to_cart {
    vertical-align: top;
    width: 18px;
  }
`;

export default BtnHeader;
