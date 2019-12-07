import React from "react";
import s from "./content.module.css";
import Product from "./Product";
import { ProductConsumer, indecators } from "./context";
import Tittle from "./tittle";
import Gallery from "./gallery";
import News from "./news";
import Map from "./map";
import Change_type_chart from "./change_type_chart";
const Content = () => {
  return (
    <div className={s.all}>
      <div className={s.selectors}>
        <ProductConsumer>
          {product => {
            const { change_Option } = product;
            return (
              <select onChange={e => change_Option(e.target.value)}>
                {product.indecators.map(product => {
                  return (
                    <option value={product.indecator}>
                      {product.indecator}
                    </option>
                  );
                })}
              </select>
            );
          }}
        </ProductConsumer>

        <ProductConsumer>
          {product => {
            const { change_Chart } = product;
            return (
              <select onChange={e => change_Chart(e.target.value)}>
                {product.options.map(product => {
                  return <option value={product.id}>{product.select}</option>;
                })}
              </select>
            );
          }}
        </ProductConsumer>
      </div>
      <ProductConsumer>
        {product => {
          const { change_Oblast } = product;
          return (
            <React.Fragment>
              <div className={s.map}>
                <Map oblast={change_Oblast} id={product.oblast} />
              </div>
              <div className={s.news}>
                <News
                  oblast={product.oblast}
                  type={product.type}
                  votes={product.chart}
                />
              </div>
            </React.Fragment>
          );
        }}
      </ProductConsumer>

      <div className={s.type}>
        <ProductConsumer>
          {product => {
            const { change_typeChart } = product;
            return <Change_type_chart click={change_typeChart} />;
          }}
        </ProductConsumer>
      </div>
    </div>
  );
};
export default Content;
