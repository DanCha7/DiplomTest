import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/slices/store";
import { fetchProducts } from "../../store/slices/productSlice";
import ProductItem from "./ProductItem";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status } = useSelector(
    (state: RootState) => state.products
  );
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedGender, setSelectedGender] = useState<string>("Мужской");
  const [visibleProducts, setVisibleProducts] = useState<number>(6);

  useEffect(() => {
    dispatch(fetchProducts({ gender: "Мужской", sizes: [] }));
  }, [dispatch]);

  const handleSizeChange = (size: number) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProducts({ gender: selectedGender, sizes: selectedSizes }));
  };

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 6);
  };

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "rejected") {
    return <div>Error: Unable to fetch products.</div>;
  }

  return (
    <CatalogStyle id="catalog">
      <div className="container">
        <h2>Каталог</h2>
        <div className="catalog__content">
          <form onSubmit={handleSubmit}>
            <h4>Подбор по параметрам</h4>
            <div>
              <h5>Размеры:</h5>
              {[36, 37, 38, 39, 40, 41, 42, 43].map((size) => (
                <label key={size}>
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeChange(size)}
                  />
                  {size}
                </label>
              ))}
            </div>
            <div>
              <h5>Гендер:</h5>
              {["Мужской", "Женский"].map((gender) => (
                <label key={gender}>
                  <input
                    type="radio"
                    name="gender"
                    defaultChecked={gender === "Мужской"}
                    value={gender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                  />
                  {gender}
                </label>
              ))}
            </div>
            <button type="submit">Применить фильтры</button>
          </form>
          <div>
            <ul>
              {products.slice(0, visibleProducts).map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </ul>
            <div className="btn__products__List">
              {visibleProducts < products.length && (
                <button onClick={handleLoadMore}>Добавить еще</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </CatalogStyle>
  );
};

const CatalogStyle = styled.section`
  margin-bottom: 60px;
  h2 {
    font-family: Intro Bold;
    font-size: 30px;
    color: var(--grey);
    margin-bottom: 60px;
  }
  form {
    background-color: var(--white);
    padding: 10px;
    border-radius: 5px;
    max-height: 597px;
    max-width: 280px;
    border: 1px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  h3,
  p {
    color: black;
  }

  img {
    max-width: 280px;
  }

  li {
    max-width: 310px;
    position: relative;
  }

  .product-image {
    position: relative;
  }

  .product-actions {
    position: absolute;
    top: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;

    .view-product,
    .add-to-cart {
      background-color: white;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .catalog__content {
    display: flex;
  }

  button {
    margin-top: 10px;
    padding: 22px 40px;
    background-color: var(--btn-lgt);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: Intro Regular;
    font-size: 16px;
    color: white;

    &:hover {
      background-color: var(--grey);
    }
  }

  @media (max-width: 1280px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
  }
`;

export default ProductList;
