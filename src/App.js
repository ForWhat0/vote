import React from "react";
import s from "./App.module.css";
import Menu from "./components/menu";
import Content from "./components/content";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./components/shop/context";
import Modal from "./components/shop/modal";
import { Link } from "react-router-dom";
import logo from "./components/logo.png";
import { ProductConsumer } from "./components/shop/context";
import { useState } from "react";

const APP = () => {
  const [dropdown, set_dropdowb] = useState(false);

  return (
    <ProductProvider>
      <BrowserRouter>
        <div id={s.all}>
          <Modal />
          <div className={s.header}>
            <ProductConsumer>
              {product => {
                return product.islogined === "false" ? (
                  <div className={s.header_all}>
                    <div
                      onClick={() => {
                        set_dropdowb(dropdown => !dropdown);
                      }}
                      style={{ backgroundImage: `url(${logo})` }}
                      className={s.header_avatar}
                    >
                      <i className={s.dropbtn}></i>
                    </div>
                    <div className={s.dropdown}>
                      <div
                        className={s.dropdown_content}
                        style={{ display: dropdown ? "block" : "none" }}
                      >
                        <ul>
                          <li
                            className={s.profil_text}
                            onClick={() => {
                              product.openModal();
                              set_dropdowb(dropdown => !dropdown);
                            }}
                          >
                            Увійти
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={s.header_all}>
                    <div
                      onClick={() => {
                        set_dropdowb(dropdown => !dropdown);
                      }}
                      style={{
                        backgroundImage:
                          "url(https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png)"
                      }}
                      className={s.header_avatar}
                    >
                      <i className={s.dropbtn}></i>
                    </div>

                    <div className={s.dropdown}>
                      <div
                        className={s.dropdown_content}
                        style={{ display: dropdown ? "block" : "none" }}
                      >
                        <ul>
                          <li
                            className={s.profil_text}
                            onClick={() => {
                              set_dropdowb(dropdown => !dropdown);
                            }}
                          >
                            <Link to="/cabinet">Мій кабінет</Link>
                          </li>
                          <li
                            className={s.profil_text}
                            onClick={() => {
                              product.log_out();
                              set_dropdowb(dropdown => !dropdown);
                              document.location.reload(true);
                            }}
                          >
                            Вихід
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }}
            </ProductConsumer>
          </div>
          <div className={s.welcome}>
            <div className={s.welcome_background}>
              <div className={s.welcome_main}>
                <strong className={s.welcome_main_text}>
                  Цифрова трансформація бізнесу в Україні
                </strong>
                <ProductConsumer>
                  {product => {
                    return product.islogined === "false" ? (
                      <div className={s.welcome_main_text_hello}>Вітаємо</div>
                    ) : (
                      <div className={s.welcome_main_text_hello}>
                        Вітаємо, {product.user[0].login}
                      </div>
                    );
                  }}
                </ProductConsumer>
              </div>
              <ProductConsumer>
                {product => {
                  const length = product.table.length;
                  return (
                    <div className={s.length}>
                      <div className={s.number}>{length}</div>
                      <div className={s.number_text}>
                        <img src={logo} />
                        <span>Учасників</span>
                      </div>
                    </div>
                  );
                }}
              </ProductConsumer>
            </div>
          </div>
          <div className={s.menu}>
            <Menu />
          </div>
          <div className={s.content}>
            <Content />
          </div>
        </div>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default APP;
