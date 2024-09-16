import Gallery from "../Gallery";

const Questions = () => {
  return (
    <div className="container questions__content">
      <div className="left__content">
        <div className="form__subm">
          <h2 className="quest__title">Есть вопросы?</h2>
          <p className="under__tit">
            Заполните форму и наш менеджер свяжется с вами
          </p>
          <form className="form__otpr" action="">
            <input type="text" placeholder="Ваше имя" />
            <input type="phone" placeholder="Номер телефона" />
            <button className="sbm__tp" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
      <div className="right__content">
        <Gallery />
      </div>
    </div>
  );
};

export default Questions;
