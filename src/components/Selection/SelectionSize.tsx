import { useState } from "react";
import styled from "styled-components";

interface SizeOption {
  id: string;
  label: string;
  isChecked: boolean;
}

const SelectionSize = () => {
  const [sizeOptions, setSizeOptions] = useState<SizeOption[]>([
    { id: "less-36", label: "Менеe 36", isChecked: false },
    { id: "36-38", label: "36-38", isChecked: false },
    { id: "39-41", label: "39-41", isChecked: false },
    { id: "42-44", label: "42-44", isChecked: false },
    { id: "45-plus", label: "45 и больше", isChecked: false },
  ]);

  const handleSizeChange = (id: string) => {
    setSizeOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, isChecked: !option.isChecked } : option
      )
    );
  };
  return (
      <SelectionSizeStyle>
        <h2 className="title">Какой размер вам подойдет?</h2>
        <div className="size-options">
          {sizeOptions.map((option) => (
            <label key={option.id} className="size-option">
              <input
                type="checkbox"
                checked={option.isChecked}
                onChange={() => handleSizeChange(option.id)}
              />
              {option.label}
            </label>
          ))}
        </div>
        <div className="under__img__selection">
          <img
            className="sneakersPh"
            src="/src/assets/images/SneakersPh.png"
            alt="Shoe"
          />
        </div>
      </SelectionSizeStyle>
  );
};

const SelectionSizeStyle = styled.section`
  .size-options {
    margin-bottom: 40px;
  }
  .title {
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    font-family: Intro Book;
    color: var(--grey);
    margin-bottom: 70px;
  }

  label {
    font-family: Intro Book;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    color: black;
  }
`;

export default SelectionSize;
