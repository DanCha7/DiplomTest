import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/slices/store";
import { addToCart } from "../store/slices/cartSlice";
import styled from "styled-components";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === Number(id))
  );

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    if (product && selectedSize) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          quantity: 1,
          imgURL: product.imgUrl,
          price: product.price,
          sizes: selectedSize,
        })
      );
    }
  };

  const handleBackgroundClick = () => {
    navigate("/");
  };

  return (
    <Background onClick={handleBackgroundClick}>
      {" "}
      <ProductContainer
        className="container owner__block"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        <div className="image__sgmnt">
          <img src={product.imgUrl} alt={product.title} />
          <div className="description__sgmnt">
            <h4>Описание</h4>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="right__block">
          <div className="artikul__block">
            <p>Артикул: {product.vendorСode}</p>
            <p>В наличии: {product.inStock}</p>
          </div>
          <h2>{product.title}</h2>
          <div className="stars__comment">
            {Array.from({ length: product.stars }).map((_, index) => (
              <img key={index} src="/public/icons/stars.svg" alt="Star" />
            ))}
          </div>
          <div className="size__block">
            <p className="title__choose__size">Выберите размер:</p>
            {product.sizes.map((size) => (
              <label key={size}>
                <input
                  type="radio"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => setSelectedSize(size)}
                />
                {size}
              </label>
            ))}
          </div>
          <div
            className="price"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <p className="title__price">{product.price}</p>
            <p className="title__oldprice">{product.oldPrice}</p>
          </div>
          <button onClick={handleAddToCart}>Заказать</button>
          <div className="free__door">
            <ul>
              <li>
                <img className="app__img" src="/public/icons/app.svg" alt="" />
                Бесплатная доставка до двери
              </li>
              <li>
                <img className="app__img" src="/public/icons/app.svg" alt="" />
                Оплата заказа при получении
              </li>
              <li>
                <img className="app__img" src="/public/icons/app.svg" alt="" />
                Обмен в течении двух недель
              </li>
            </ul>
          </div>
          <p className="title__characteristics">Характеристики:</p>
          <ul>
            <li>
              <p className="title__charsik">Пол: {product.gender}</p>
            </li>
            <li>
              <p className="title__charsik">Цвета: {product.color}</p>
            </li>
            <li>
              <p className="title__charsik">Состав: {product.compound}</p>
            </li>
            <li>
              <p className="title__charsik">Страна: {product.country}</p>
            </li>
          </ul>
        </div>
      </ProductContainer>
    </Background>
  );
};
const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ProductContainer = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  display: flex;
  gap: 30px;

  .image__sgmnt {
    max-width: 550px;
  }

  img {
    max-width: 538px;
    height: auto;
  }

  button {
    padding: 22px 47px;
    background-color: var(--red);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    font-family: Intro Regular;
  }

  button:hover {
    background-color: var(--grey);
  }

  .stars__comment {
    display: flex;
    justify-content: center;
    margin: 10px 0;
    margin-bottom: 40px;
  }

  .stars__comment img {
    width: 20px;
    height: auto;
    margin: 0 2px;
  }

  .size__block {
    margin: 20px 0;
  }

  .size__block label {
    margin-right: 15px;
  }
  h2 {
    font-family: Intro Book;
    font-size: 24px;
    line-height: 33.6px;
  }

  .desciption__block {
    display: flex;
    align-items: center;
  }

  .right__block {
    display: flex;
    flex-direction: column;
    max-width: 50%;
  }

  .description__sgmnt {
    font-family: Intro Book;
    font-size: 16px;
    line-height: 22.4px;
    font-weight: 400;
    color: var(--btn-l-grey);
    max-width: 500px;
  }

  h4 {
    font-family: Intro Book;
    font-size: 24px;
    color: var(--btn-l-grey);
  }

  .artikul__block {
    display: flex;
    gap: 80px;
    color: #b2b5bb;
    font-size: 16px;
    font-family: Intro Book;
    margin-bottom: 40px;
  }

  .title__price {
    color: var(--btn-l-grey);
    font-family: Intro Bold;
    font-size: 30px;
    line-height: 30px;
  }

  .title__oldprice {
    color: gray;
    font-size: 16px;
    font-family: Intro Book;
  }

  .title__choose__size {
    font-family: Intro Book;
    font-size: 16px;
    margin-bottom: 50px;
  }

  .price {
    margin-bottom: 40px;
  }

  li {
    display: flex;
    gap: 10px;
    font-family: Intro Book;
    font-size: 14px;
    color: #b2b5bb;
    justify-content: left;
  }

  .app__img {
    width: 15px;
  }

  .title__characteristics {
    font-family: Intro Book;
    font-size: 24px;
    line-height: 33.6px;
  }

  .title__charsik {
    font-family: Intro Book;
    font-size: 16px;
    line-height: 22.4px;
    font-weight: 400;
    color: var(--btn-l-grey);
  }

  .free__door {
    margin-bottom: 50px;
  }
`;

export default ProductDetail;
