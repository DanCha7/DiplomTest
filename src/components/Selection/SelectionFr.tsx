import { useState } from "react";

interface CheckboxItem {
  id: string;
  label: string;
  imageUrl: string;
  isChecked: boolean;
}

const SelectionFr = () => {
  const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>([
    {
      id: "1",
      label: "Option 1",
      imageUrl: "/src/assets/images/sneakersimg.png",
      isChecked: false,
    },
    {
      id: "2",
      label: "Option 2",
      imageUrl: "/src/assets/images/sneakersimg.png",
      isChecked: false,
    },
    {
      id: "3",
      label: "Option 3",
      imageUrl: "/src/assets/images/sneakersimg.png",
      isChecked: false,
    },
    {
      id: "4",
      label: "Кеды",
      imageUrl: "/src/assets/images/sneakersimg.png",
      isChecked: false,
    },
    {
      id: "5",
      label: "Option 5",
      imageUrl: "/src/assets/images/sneakersimg.png",
      isChecked: false,
    },
    {
      id: "6",
      label: "Option 6",
      imageUrl: "/src/assets/images/sneakersimg.png",
      isChecked: false,
    },
  ]);

  const handleCheckboxChange = (id: string) => {
    setCheckboxItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <>
      <p className="type__sneaker__title">
        Какой тип кроссовок рассматриваете?
      </p>
      <ul className="list__sn">
        {checkboxItems.map((item) => (
          <li key={item.id}>
            <label>
              <img src={item.imageUrl} alt={item.label} />
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SelectionFr;
