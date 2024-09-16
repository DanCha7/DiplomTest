import Logo from "../Logo";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../Products/ModalCart";
import BtnHeader from "../Products/CartHeader";
import Cart from "../Products/Basket";


const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderStyle>
      <header className="header">
        <div className="container header__content">
          <Logo />
          <nav>
            <ul className="list__header">
              <li className="list__item">
                <a href="">Каталог</a>
              </li>
              <li className="list__item">
                <a href="">О нас</a>
              </li>
              <li className="list__item">
                <a href="">Подбор товара</a>
              </li>
              <li className="list__item">
                <a href="#aboutus">Наша команда</a>
              </li>
              <li className="list__item">
                <a href="">Доставка и оплата</a>
              </li>
              <li className="list__item">
                <a href="#contacts">Контакты</a>
              </li>
              <li className="list__item">
                <BtnHeader onOpenModal={handleOpenModal} /> 
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Cart />
      </Modal>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.section`
  header {
    position: absolute;
    width: 100%;
  }
  .header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid white;
  }

  .list__header {
    display: flex;
    gap: 30px;
  }

  a {
    color: white;
    font-family: "Intro Book";
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
  }
`;

export default Header;






