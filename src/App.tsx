import { useState } from "react";

import moneyIcon from "/images/money.svg";
import envelopeIcon from "/images/envelope.svg";
import documentIcon from "/images/document.svg";
import percentIcon from "/images/percent.svg";
import searchIcon from "/images/search.svg";
import file from "/images/file.svg";
import vkIcon from "/images/vk.svg";
import mailIcon from "/images/mail.svg";
import webMoneyIcon from "/images/web-money.svg";
import yandexMoneyIcon from "/images/yandex-money.svg";
import qiwiIcon from "/images/qiwi.svg";

import "./App.scss";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    systemType: "",
    email: "",
    name: "",
    range: 75,
    file: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      range: parseInt(e.target.value),
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file: file,
    }));
  };

  const handleFileButtonClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput?.click();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Данные формы:", formData);
    alert("Данные формы в консоли");
  };

  return (
    <>
      <header className="header">
        <div className="header__container">
          <a href="#" className="header__logo">
            <span className="header__logo-text">loremipsum</span>
            <span className="header__logo-text--accent">.net</span>
          </a>

          <nav className="header__nav">
            <ul
              className={`header__menu ${
                isMenuOpen ? "header__menu--active" : ""
              }`}
              id="menu"
            >
              <li className="header__menu-item">
                <a className="header__menu-link" href="#business">
                  Бизнес
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="#about">
                  О нас
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="#pricing">
                  Цены
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="#order">
                  Оформить заказ
                </a>
              </li>
            </ul>

            <button
              className={`header__burger ${
                isMenuOpen ? "header__burger--active" : ""
              }`}
              id="burger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="header__burger-line" />
              <span className="header__burger-line" />
              <span className="header__burger-line" />
            </button>
          </nav>
        </div>
      </header>

      <section className="hero" id="business">
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              <span className="hero__title-text hero__title-text--accent">
                lorem ipsum{" "}
              </span>
              <span className="hero__title-text">
                dolor sit ametconsectetur{" "}
              </span>
              <span className="hero__title-text hero__title-text--accent">
                adipiscing
              </span>
            </h1>

            <p className="hero__subtitle">
              At vero eos et accusamus et iusto odio dignissimos ducimus!
            </p>

            <ul className="hero__list">
              <li className="hero__list-item">Totam rem aperiam eaque ipsa</li>
              <li className="hero__list-item">
                Sit voluptatem accusantium doloremque laudantium
              </li>
              <li className="hero__list-item">
                Sed ut perspiciatis, unde omnis iste natus error
              </li>
            </ul>

            <div className="hero__buttons">
              <button className="hero__button hero__button--primary">
                Заказать
              </button>
              <button className="hero__button hero__button--secondary">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="order">
        <div className="services__container">
          <div className="services__header">
            <h2 className="services__title">
              Оформление <span className="services__title--accent">заказа</span>
            </h2>
            <p className="services__subtitle">
              Перед заполнением формы ознакомьтесь с нашей схемой работы!
            </p>
          </div>

          <div className="services__list">
            <div className="services__item">
              <div className="services__icon">
                <img src={searchIcon} alt="" />
              </div>
              <p className="services__item-title">Lorem ipsum dolor sit amet</p>
            </div>

            <div className="services__item">
              <div className="services__icon">
                <img src={percentIcon} alt="" />
              </div>
              <p className="services__item-title">Сonsecteturadipiscing elit</p>
            </div>

            <div className="services__item">
              <div className="services__icon">
                <img src={documentIcon} alt="" />
              </div>
              <p className="services__item-title">Sed do eiusmod tempor</p>
            </div>

            <div className="services__item">
              <div className="services__icon">
                <img src={envelopeIcon} alt="" />
              </div>
              <p className="services__item-title">
                Esse cillum dolore eu fugiat
              </p>
            </div>

            <div className="services__item">
              <div className="services__icon">
                <img src={moneyIcon} alt="" />
              </div>
              <p className="services__item-title">
                Excepteur sint occaecat cupidatat non proident
              </p>
            </div>
          </div>

          <form className="services__form" onSubmit={handleSubmit}>
            <div className="services__form-grid">
              <select
                className="services__form-select"
                id="systemType"
                name="systemType"
                value={formData.systemType}
                onChange={handleInputChange}
              >
                <option value="">Выберите тип системы</option>
                <option value="1">Sed ut perspiciatis</option>
                <option value="2">Nemo enim ipsam</option>
                <option value="3">Et harum quidem</option>
                <option value="4">Temporibus autem</option>
                <option value="5">Itaque earum rerum</option>
              </select>

              <input
                className="services__form-input"
                type="email"
                placeholder="Ваш e-mail"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                required
              />

              <input
                className="services__form-input"
                type="text"
                placeholder="Ваше имя"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="services__form-range-container">
              <div className="services__form-range-wrapper">
                <div className="services__form-range-header">
                  <label className="services__form-range-label" htmlFor="range">
                    Sed ut perspiciatis, unde omnis iste natus error
                  </label>

                  <span className="services__form-range-value">
                    {formData.range} %
                  </span>
                </div>

                <input
                  className="services__form-range"
                  type="range"
                  min="0"
                  max="100"
                  value={formData.range}
                  id="range"
                  name="range"
                  onChange={handleRangeChange}
                />
              </div>

              <div className="services__form-file-container">
                <button
                  className="services__form-file-button"
                  type="button"
                  onClick={handleFileButtonClick}
                >
                  <img src={file} alt="" />
                  <span>Прикрепить файл</span>
                </button>

                <input
                  className="services__form-file-input"
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                />

                {formData.file && (
                  <span className="services__form-file-name">
                    {formData.file.name}
                  </span>
                )}
              </div>
            </div>

            <button className="services__form-submit" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container">
          <p className="footer__copyright">
            © 2018 «LOREMIPSUM.NET» Все права защищены.
          </p>

          <span className="footer__divider" />

          <div className="footer__links">
            <a className="footer__link" href="#">
              <img src={qiwiIcon} alt="" />
              <span>QIWI wallet</span>
            </a>

            <a className="footer__link" href="#">
              <img src={yandexMoneyIcon} alt="" />
              <span>Yandex Money</span>
            </a>

            <a className="footer__link" href="#">
              <img src={webMoneyIcon} alt="" />
              <span>Web Money</span>
            </a>
          </div>

          <span className="footer__divider" />

          <div className="footer__links">
            <a className="footer__link" href="mailto:info@ipsum28.com">
              <img src={mailIcon} alt="" />
              <span>info@ipsum28.com</span>
            </a>

            <a className="footer__link" href="#">
              <img src={vkIcon} alt="" />
              <span>Мы вконтакте</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
