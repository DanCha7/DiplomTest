import { useState } from "react";
import SelectionFr from "./SelectionFr";
import styled from "styled-components";
import SelectionSize from "./SelectionSize";
import SelectionText from "./SelectionText";
import SelectionContacts from "./SelectionContacts";

const Selection = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count < 3) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <PodborStyle id="podbor__sec">
      <div className="container">
        <div className="content__selection">
          <div>
            {count < 3 && (
              <p className="my__choose__title">
                Мы подберем идеальную пару для вас
              </p>
            )}
            {count < 3 && (
              <p className="my__choose__under">
                Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
                для вас моделями
              </p>
            )}
            {count === 0 && <SelectionFr />}
            {count === 1 && <SelectionSize />}
            {count === 2 && <SelectionText />}
            {count === 3 && <SelectionContacts />}
          </div>
          <div className="under__block__page">
            {count < 3 && <p className="Page__num">{count + 1}/3</p>}
            {count < 3 && <button onClick={handleClick}>Следующий шаг</button>}
          </div>
        </div>
      </div>
    </PodborStyle>
  );
};

const PodborStyle = styled.section`
  padding: 50px 0px;

  .Page__num {
    line-height: 16px;
    font-family: Intro Book;
    font-weight: 400;
    font-size: 16px;
    color: #808080;
  }

  .my__choose__title {
    line-height: 30px;
    font-family: Intro Bold;
    font-weight: 700;
    font-size: 30px;
    color: var(--grey);
    margin-bottom: 15px;
  }

  .my__choose__under {
    line-height: 16px;
    font-family: Intro Book;
    font-weight: 400;
    font-size: 16px;
    color: #808080;
    padding: 10px 0px;
    border-bottom: 1px solid #808080;
    margin-bottom: 24px;
  }

  button {
    border-radius: 4px;
    border: 1px solid var(--grey);
    background: none;
    padding: 15px 30px;
    font-family: Intro Regular;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    color: var(--grey);
  }

  .type__sneaker__title {
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    font-family: Intro Book;
    color: var(--grey);
  }

  .content__selection {
    background-color: var(--white);
    border-radius: 4px;
    padding: 50px;
    height: auto;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  li {
    width: 300px;
  }

  .sneakersPh {
    width: 100%;
  }

  img {
    margin-bottom: 30px;
  }

  .under__img__selection {
    border-bottom: 1px solid black;
    margin-bottom: 30px;
  }

  .under__block__page {
    border-top: 1px solid black;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1280px) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    
  }
`;

export default Selection;
