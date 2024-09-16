import Logo from "../Logo";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <footer className="footer">
        <div className="container footer__content">
          <Logo />
          <ul className="list__footer">
            <li className="footer__item">
              <a href="#catalog">Каталог</a>
            </li>
            <li className="footer__item">
              <a href="">О нас</a>
            </li>
            <li className="footer__item">
              <a href="">Подбор товара</a>
            </li>
            <li className="footer__item">
              <a href="">Наша команда</a>
            </li>
            <li className="footer__item">
              <a href="">Доставка и оплата</a>
            </li>
            <li className="footer__item">
              <a href="">Контакты</a>
            </li>
          </ul>
        </div>
      </footer>
    </FooterStyle>
  );
};

const FooterStyle = styled.section`
  footer {
    background-color: var(--grey);
  }

  .footer__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list__footer {
    display: flex;
    gap: 40px;
  }
  a {
    color: white;
    font-size: 14px;
    font-family: Intro Book;
    font-weight: 400;
    line-height: 14px;
  }
`;
export default Footer;
