import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Contacts = () => {
  return (
    <ContactsStyle>
      <div id="contacts" className="contacts">
        <div className="container contacts__container">
          <div className="left">
            <h2 className="contacts__title"> Контакты </h2>
            <div className="block__off_t">
              <h4 className="office__title">
                Главный офис
                <picture>
                  <img
                    src="./public/icons/question-mark.svg"
                    alt="question mark"
                  />
                </picture>
                <p>
                  Адрес и телефон для корреспонденции, инвесторов. Вопросы о
                  доставке, качестве обслуживания и товара просьба задавать в
                  отдел продаж
                </p>
              </h4>
              <a className="tele__contacts" href="tel:+78007898989">
                +7 800 789 89 89
              </a>
              <address className="adress__contacts">
                г. Санкт-Петербург, Комсомольская, 43 к1
              </address>
            </div>
            <div className="block__off_nn">
              <p className="office__title">ОТДЕЛ ПРОДАЖ</p>
              <a className="tele__contacts" href="tel:+78007898989">
                +7 800 789 89 89
              </a>
              <address className="adress__contacts">
                г. Санкт-Петербург, Комсомольская, 43 к1
              </address>
            </div>
            <div className="social__block">
              <ul className="social-icons-1">
                <li>
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={faVk} />
                    </i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={faInstagram} />
                    </i>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right__content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113473.56492414275!2d49.0687087892833!3d55.772095238908186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1726300326891!5m2!1sru!2sru"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </ContactsStyle>
  );
};

const ContactsStyle = styled.section`
  .info {
    width: 40%;
  }

  h4 {
    color: var(--gray);
    font-size: 10px;
    line-height: 140%;
    margin-bottom: 30px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    position: relative;
    width: fit-content;

    picture {
      box-shadow: 2px 4px 10px 0px rgba(0, 13, 84, 0.2);
      background: rgb(255, 255, 255);
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-left: 10px;
    }

    p {
      display: none;
      position: absolute;
      top: -94px;
      right: -425px;
      color: rgb(68, 75, 88);
      font-size: 14px;
      line-height: 140%;
      border-radius: 4px;
      max-width: 426px;
      padding: 10px 20px;
      background: rgb(255, 255, 255);
      box-shadow: 4px 8px 20px 0px rgba(0, 13, 84, 0.2);
      text-transform: none;
      z-index: 2;

      &:before {
        content: "";
        width: 20px;
        height: 20px;
        background: rgb(255, 255, 255);
        position: absolute;
        bottom: -5px;
        transform: rotate(45deg);
        z-index: -1;
      }
    }

    picture:hover + p {
      display: block;
    }
  }

  a {
    color: rgb(68, 75, 88);
    font-family: "Intro";
    font-size: 30px;
    line-height: 140%;
    margin-bottom: 10px;
  }

  address {
    color: rgb(68, 75, 88);
    font-size: 18px;
    line-height: 140%;
    margin-bottom: 40px;
    font-style: normal;
  }

  .links {
    display: flex;
    gap: 20px;

    a {
      width: 44px;
      height: 44px;
      background: rgb(14, 90, 76);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: rgba(14, 90, 76, 0.9);
      }

      &:active {
        background: rgba(14, 90, 76, 0.8);
      }
    }
  }

  .contacts {
    background-color: var(--bk);
    padding: 30px 0px;
  }

  .contacts__container {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .right {
    width: 700px;
    height: 200px;
  }

  .contacts__title {
    font-family: Intro Bold;
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
    color: var(--grey);
    margin-bottom: 50px;
  }

  .office__title {
    letter-spacing: 8%;
    line-height: 19.6px;
    font-size: 14px;
    font-weight: 400;
    font-family: Intro Book;
    color: var(--btn-bor);
    margin-bottom: 30px;
  }

  .tele__contacts {
    font-family: Intro Regular;
    font-size: 30px;
    line-height: 42px;
    font-weight: 400;
    color: var(--grey);
    margin: 0;
    margin-bottom: 10px;
  }

  .adress__contacts {
    font-family: Intro Book;
    font-size: 18px;
    font-weight: 400;
    line-height: 25.2px;
    color: var(--grey);
    margin-top: 50px;
    margin: 0;
    margin-bottom: 20px;
  }

  .block__off_t {
    margin-bottom: 50px;
  }

  /* ---socials--- */

  .social-icons-1 {
    display: flex;
    gap: 20px;
    padding: 0;
    list-style: none;
    margin: 10px;
  }
  .social-icons-1 li {
    display: inline-block;
    position: relative;
  }
  .social-icons-1 i,
  .social-icons-1 img {
    font-size: 30px;
    color: #fff;
    position: absolute;
    top: 11px;
    left: 17px;
    width: 24px;
    height: 24px;
    text-align: center;
    transition: all 0.3s ease-out;
  }
  .social-icons-1 a {
    display: inline-block;
  }
  .social-icons-1 a:before {
    transform: scale(1);
    content: "";
    width: 60px;
    height: 60px;
    border-radius: 100%;
    display: block;
    background: linear-gradient(45deg, #0e5a4c, #0e5a4c);
    transition: all 0.3s ease-out;
  }
  .social-icons-1 a:hover:before {
    transform: scale(0);
    transition: all 0.3s ease-in;
  }
  .social-icons-1 a:hover i,
  .social-icons-1 a:hover img {
    transform: scale(1.8);
    color: #337ab7;
    transition: all 0.3s ease-in;
  }

  @media (max-width: 1080px) {
    .contacts__container {
      flex-direction: column;
    }
  }
`;

export default Contacts;
