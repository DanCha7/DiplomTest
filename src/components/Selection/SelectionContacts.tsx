import styled from "styled-components";

const SelectionContacts = () => {
  return (
    <SelectionContactsStyle>
      <h2 className="title">Ваша подборка готова!</h2>
      <p className="under__title">
        Оставьте свои контактные данные, чтобы бы мы могли отправить
        подготовленный для вас каталог
      </p>

      <form action="">
        <h4 className="text__yourch">Получить предложение</h4>
        <p className="text__under">
          Получите подборку подходящих для вас моделей на почту
        </p>
        <input type="text" placeholder="Имя" />
        <input type="email" placeholder="Email" />
        <button>Получить</button>
      </form>
    </SelectionContactsStyle>
  );
};

const SelectionContactsStyle = styled.section`
  .title {
    line-height: 30px;
    font-family: Intro Bold;
    font-weight: 700;
    font-size: 30px;
    color: var(--grey);
    margin-bottom: 15px;
  }

  .under__title {
    line-height: 16px;
    font-family: Intro Book;
    font-weight: 400;
    font-size: 16px;
    color: #dbbba9;
    padding: 10px 0px;
    border-bottom: 1px solid #dbbba9;
    margin-bottom: 24px;
  }

  form {
    background-color: #dbbba9;
    padding: 40px 40px;
    border-radius: 4px;
  }

  .text__yourch {
    line-height: 50.4px;
    font-family: Intro Bold;
    font-weight: 700;
    font-size: 36px;
    color: white;
    margin-bottom: 10px;
  }

  .text__under {
    font-size: 18px;
    line-height: 25.2px;
    font-weight: 400;
    font-family: Intro Book;
    color: white;
    margin-bottom: 20px;
  }

  button {
    background-color: red;
  }
`;

export default SelectionContacts;
