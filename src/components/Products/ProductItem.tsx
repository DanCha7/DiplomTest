import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { ISneakers } from "../../store/slices/types";
import { AppDispatch } from "../../store/slices/store";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ProductItemProps {
  product: ISneakers;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          quantity: 1,
          imgURL: product.imgUrl,
          price: product.price,
        })
      );
    }
  };

  return (
    <StyledListItem
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-image">
        <img src={product.imgUrl} alt={product.title} />
        {hovered && (
          <div className="product-actions">
            <Link to={`/products/${product.id}`} className="view-product">
              <img src="/public/icons/show-grey.svg" alt="View" />
            </Link>
            <div className="add-to-cart" onClick={handleAddToCart}>
              <img src="/public/icons/add-to-basket.svg" alt="/" />
            </div>
          </div>
        )}
      </div>
      <h3 className="title__name">{product.title}</h3>
      <p className="title__price">{product.price}р</p>
    </StyledListItem>
  );
};

const StyledListItem = styled.li`
  position: relative;
  list-style: none;
  transition: background-color 0.3s ease;

  .title__name {
    font-family: Intro Book;
    font-size: 16px;
    color : var(--grey)
  }

  .title__price {
    color : var (--grey);
    font-size : 20px ;
    font-family : Intro Regular;

  }

  .product-image {
    position: relative;
    overflow: hidden;
    transition: filter 0.3s ease;

    img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    &:hover {
      filter: brightness(0.7); 
    }

    .product-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      gap: 10px;
      opacity: 0;
      transition: opacity 0.3s ease;

      .view-product,
      .add-to-cart {
        background-color: rgb(41, 41, 41);
        border-radius: 50%; 
        width: 80px; 
        height: 80px; 
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
        z-index: 5000;

        img {
          width: 40%;
          height: auto;
        }

        &:hover {
          background-color: rgb(21, 21, 21); /* Darker on hover */
        }
      }
    }

    &:hover .product-actions {
      opacity: 1; /* Show buttons on hover */
    }
  }

  h3 {
    margin: 10px 0;
  }

  p {
    margin: 0;
  }
`;

export default ProductItem;
