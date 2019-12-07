import React from "react";
import { ProductConsumer } from "./context";
import { Redirect } from "react-router";
import StarRatings from "react-star-ratings";
import { Line, defaults } from "react-chartjs-2";
defaults.global.maintainAspectRatio = false;
defaults.global.defaultFontSize = 8;
defaults.global.legend = false;
defaults.scale.ticks.minRotation = 0;
defaults.scale.ticks.maxRotation = 100;
export default function Cabinet(props) {
  return (
    <ProductConsumer>
      {product => {
        if (product.islogined === "false") {
          return <Redirect to="/" />;
        }
        if (!product.user[0].last_index) {
          return <Redirect to="/order" />;
        }

        return (
          <article style={{ height: "50vh", width: "90%", marginLeft: "5%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <div
                style={{
                  width: "80%",
                  margin: "40px 0 16px",
                  backgroundColor: "white",
                  border: "solid 2px gray",
                  textAlign: "center",
                  padding: "12px"
                }}
              >
                <p style={{ padding: "0" }}>
                  Ваш індекс: {product.user[0].last_index}
                </p>
              </div>
              <StarRatings
                rating={product.user[0].last_index * 5}
                starDimension="24px"
              />
            </div>
          </article>
        );
      }}
    </ProductConsumer>
  );
  if (props.item) {
    const { all_index, all_times } = props.item;
    console.log(all_index, all_times);
    const data = {
      labels: [12, 12],

      datasets: [
        {
          data: [12, 12],
          fill: false,
          backgroundColor: [
            "#001f3f",
            "#0074D9",
            "#7FDBFF",
            "#39CCCC",
            "#3D9970",
            "#2ECC40",
            "#01FF70",
            "#FFDC00",
            "#FF851B",
            "#FF4136",
            "#85144b",
            "#F012BE",
            "#B10DC9",
            "#111111",
            "#AAAAAA",
            "#001f3f",
            "#0074D9",
            "#7FDBFF",
            "#39CCCC",
            "#3D9970",
            "#2ECC40",
            "#01FF70",
            "#FFDC00",
            "#FF851B",
            "#FF4136",
            "#85144b",
            "#F012BE",
            "#B10DC9",
            "#111111",
            "#AAAAAA"
          ]
        }
      ]
    };
    const options = {
      plugins: {
        datalabels: {
          display: true,
          color: "red",
          borderRadius: 10,
          backgroundColor: function(context) {
            return context.dataset.backgroundColor;
          },
          align: "center",
          textAlign: "center",
          font: {
            weight: "bold"
          }
        }
      }
    };
    return (
      <React.Fragment>
        <article style={{ height: "50vh", width: "90%", marginLeft: "5%" }}>
          <Line width={"100%"} options={options} data={data} />
        </article>
      </React.Fragment>
    );
  } else {
    return <div>wait</div>;
  }
}
