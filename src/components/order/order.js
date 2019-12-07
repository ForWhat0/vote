import React from "react";
import s from "./info.module.css";
import Product from "../shop/Product";
import { ProductConsumer } from "../shop/context";
import Form from "./form";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <ProductConsumer>
      {product => {
        const {
          nextItem,
          number,
          start,

          nextItem_for_second_question,
          nextItem_for_first_question,
          nextItem_first_question,
          nextItem_second_question,
          get_start
        } = product;

        const length = product.products.length;
        return (
          <React.Fragment>
            {product.islogined === "false" ? (
              <Form
                error={product.error}
                error_text={product.error_text}
                error_login={product.error_login}
                error_password={product.error_password}
                login={product.do_login}
              />
            ) : product.time_poll_good === true ? (
              <Product
                is_start={start}
                start={get_start}
                one={nextItem_first_question}
                second={nextItem_second_question}
                nextItem_for_first={nextItem_for_first_question}
                nextItem_for_second={nextItem_for_second_question}
                index={nextItem}
                length={length}
                number={number}
                item={product.single}
              />
            ) : (
              <div className={s.thx}>
                <li>
                  Ваш індекс цифрової трансформації ={" "}
                  <span style={{ color: "green" }}>
                    {product.index_user == 0
                      ? product.user[0].last_index
                      : product.index_user}{" "}
                  </span>
                </li>
                Дякуємо Вам , днів до наступного опитування:{" "}
                <span style={{ color: "green" }}>{product.left_days}</span>
                <li>
                  Ви можете спостерігати за вашим прогресом у вашому{" "}
                  <Link
                    style={{ color: "green", borderBottom: "1px solid black" }}
                    to="/cabinet"
                  >
                    кабінеті
                  </Link>
                </li>
              </div>
            )}
          </React.Fragment>
        );
      }}
    </ProductConsumer>
  );
};
export default Info;
