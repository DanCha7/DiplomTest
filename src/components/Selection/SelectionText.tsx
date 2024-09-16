import styled from "styled-components";

const SelectionText = () => {
  return (
      <PodborStyle>
        <h2 className="title">Уточните какие-либо моменты</h2>
        <div className="block">
          <textarea placeholder="Введите сообщение"></textarea>
        </div>
      </PodborStyle>
  );
};

const PodborStyle = styled.section`
  .block {
    margin-bottom: 20px;
    border-bottom: 1px solid black;
  }

  .title {
    font-size: 24px;
    font-weight: 400;
    font-family: Intro Book;
    color: var(--grey);
    line-height: 24px;
    margin-bottom: 30px;
  }

  textarea {
    width: 465px;
    height: 246px;
    border: none;
    border-radius: 4px;
    color: var(--white);
    font-family: Intro Book;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 200px;
  }

  textarea::placeholder {
    color: #dbbba9;
    padding: 20px;
  }
`;

export default SelectionText;
