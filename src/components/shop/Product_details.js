import React from "react";
import { ProductConsumer } from "./context";
import s from "./Product_details.module.css";
import { Link } from "react-router-dom";
import { relative } from "path";
import Modal_for_details from "./modal_for_details";

const design = [
  {
    url:
      "https://new.art-holst.com.ua/wp-content/uploads/holst_attachments/interiors/12.jpg"
  },
  {
    url:
      "https://new.art-holst.com.ua/wp-content/uploads/holst_attachments/interiors/10.jpg"
  },
  {
    url:
      "https://new.art-holst.com.ua/wp-content/uploads/holst_attachments/interiors/11.jpg"
  }
];

const size = [
  {
    size: "20x30",
    height: "12%",
    width: "10%",
    left: "46%",
    bottom: "69%",
    big_height: "12%",
    big_left: "46%",
    big_bottom: "69%"
  },
  {
    size: "30x30",
    width: "12%",
    height: "12%",
    left: "44%",
    bottom: "69%",
    big_width: "12%",
    big_height: "12%",
    big_left: "44%",
    big_bottom: "69%",
    price: 10
  },
  {
    size: "30x40",
    width: "12%",
    height: "16%",
    left: "44%",
    bottom: "67%",
    big_width: "12%",
    big_height: "16%",
    big_left: "44%",
    big_bottom: "67%",
    price: 20
  },
  {
    size: "40x60",
    width: "16%",
    height: "24%",
    left: "42%",
    bottom: "63%",
    big_width: "16%",
    big_height: "24%",
    big_left: "42%",
    big_bottom: "63%",
    price: 30
  },
  {
    size: "50x70",
    width: "20%",
    height: "28%",
    left: "40%",
    bottom: "61%",
    big_width: "20%",
    big_height: "28%",
    big_left: "40%",
    big_bottom: "61%",
    price: 40
  },
  {
    size: "60x90",
    width: "24%",
    height: "36%",
    left: "38%",
    bottom: "57%",
    big_width: "24%",
    big_height: "36%",
    big_left: "38%",
    big_bottom: "57%",
    price: 50
  },
  {
    size: "80x110",
    height: "44%",
    left: "34%",
    bottom: "53%",
    width: "32%",
    big_height: "44%",
    big_left: "34%",
    big_bottom: "53%",
    big_width: "32%",
    price: 60
  },
  {
    size: "100x100",
    height: "40%",
    left: "30%",
    bottom: "55%",
    width: "40%",
    big_height: "40%",
    big_left: "30%",
    big_bottom: "55%",
    big_width: "40%",
    price: 70
  },
  {
    size: "100x130",
    height: "52%",
    left: "30%",
    bottom: "45%",
    width: "40%",
    big_height: "52%",
    big_left: "30%",
    big_bottom: "45%",
    big_width: "40%",
    price: 80
  },
  {
    size: "160x130",
    height: "55%",
    left: "2%",
    bottom: "45%",
    width: "96%",
    big_height: "55%",
    big_left: "2%",
    big_bottom: "45%",
    big_width: "96%",
    price: 100
  }
];

class ProductDetails extends React.Component {
  state = {
    show_original: true,
    original_price: "",
    price_size: "",
    size_state: "20x30",
    background: "none",
    width: "12%",
    height: "16%",
    left: "44%",
    bottom: "67%",
    big_height: "auto",
    big_width: "auto",
    big_left: "",
    big_bottom: "",
    dropdown: false
  };
  change_size = e => {
    if (this.state.big_width == "auto") {
      this.setState({
        height: e.target.getAttribute("height"),
        width: e.target.getAttribute("width"),
        left: e.target.getAttribute("left"),
        bottom: e.target.getAttribute("bottom"),
        dropdown: false,
        price_size:
          this.state.original_price + Number(e.target.getAttribute("price")),
        size_state: e.target.getAttribute("size_state")
      });
    } else {
      this.setState({
        big_height: e.target.getAttribute("big_height"),
        big_width: e.target.getAttribute("big_width"),
        big_left: e.target.getAttribute("big_left"),
        big_bottom: e.target.getAttribute("big_bottom"),
        height: e.target.getAttribute("height"),
        width: e.target.getAttribute("width"),
        left: e.target.getAttribute("left"),
        bottom: e.target.getAttribute("bottom"),
        dropdown: false,
        price_size:
          this.state.original_price + Number(e.target.getAttribute("price")),
        size_state: e.target.getAttribute("size_state")
      });
    }
  };
  change_design = e => {
    if (this.state.big_width == "auto") {
      this.setState({
        width: "12%",
        height: "16%",
        left: "44%",
        bottom: "67%",
        big_width: "12%",
        big_height: "16%",
        big_left: "44%",
        big_bottom: "67%",
        background: e.target.getAttribute("name"),
        show_original: false
      });
    } else {
      this.setState({
        show_original: false,
        background: e.target.getAttribute("name")
      });
    }
  };

  original = e => {
    this.setState({
      show_original: true,
      background: e.target.getAttribute("name")
    });
  };
  dropdown = () => {
    this.setState({
      dropdown: !this.state.dropdown
    });
  };

  componentDidMount() {
    this.imagestore();
  }

  render() {
    const {
      background,
      show_original,
      height,
      price_size,
      width,
      left,
      bottom,
      original_price,
      size_state
    } = this.state;
    var sectionStyle = {
      backgroundImage: `url(${background})`
    };

    return (
      <ProductConsumer>
        {value => {
          const { id, img, tittle, name, inCart } = value.details;
          this.imagestore = () => {
            this.setState({
              original_price: Number(value.details.price),
              price_size: Number(value.details.price)
            });
          };
          return (
            <div className={s.global}>
              <Modal_for_details
                price={price_size}
                size_state={size_state}
                name={name}
                img={img}
                inCart={inCart}
              />
              <div className={s.img_container} style={sectionStyle}>
                {show_original ? (
                  <img src={img} style={{ width: "auto", height: "auto" }} />
                ) : (
                  <div
                    style={{
                      backgroundImage: `url(${img})`,
                      height: height,
                      left: left,
                      bottom: bottom,
                      width: width,
                      position: "absolute",
                      backgroundSize: "cover",
                      webkitBoxShadow: "1px 1px 5px 0px rgba(0,0,0,.75)",
                      mozBoxShadow: "1px 1px 5px 0px rgba(0,0,0,.75)",
                      boxShadow: "1px 1px 5px 0px rgba(0,0,0,.75)",
                      webkitBackfaceVisibility: "hidden",
                      webkitTransform: "translateZ(0) scale(1,1.0)",
                      transform: "translateZ(0)",
                      textalign: "center",
                      backgroundPosition: "center center",
                      zIndex: "2"
                    }}
                  ></div>
                )}
              </div>
              <div className={s.change_design_shadow}>
                <div className={s.change_design}>
                  <div className={s.little_pictures}>
                    <img
                      src={img}
                      onClick={this.original}
                      className={s.first_little_pictures}
                      name="none"
                    />
                  </div>
                  {design.map(choose => (
                    <div
                      className={s.little_pictures}
                      name={choose.url}
                      onClick={this.change_design}
                      style={{ backgroundImage: `url(${choose.url})` }}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${img})`,
                          height: height,
                          left: left,
                          bottom: bottom,
                          width: width,
                          position: "absolute",
                          backgroundSize: "cover",
                          webkitBoxShadow: "1px 1px 5px 0px rgba(0,0,0,.75)",
                          mozBoxShadow: "1px 1px 5px 0px rgba(0,0,0,.75)",
                          boxShadow: "1px 1px 5px 0px rgba(0,0,0,.75)",
                          webkitBackfaceVisibility: "hidden",
                          webkitTransform: "translateZ(0) scale(1,1.0)",
                          transform: "translateZ(0)",
                          textalign: "center",
                          backgroundPosition: "center center",
                          zIndex: "2"
                        }}
                        name={choose.url}
                        onClick={this.change_design}
                      >
                        {" "}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={s.info}>
                <h1>{name}</h1>
                <p>{tittle}</p>
              </div>

              <div className={s.price}>
                <div className={s.dropdown}>
                  <button className={s.dropbtn} onClick={this.dropdown}>
                    Виберіть розмір &#11015;
                  </button>
                  <div
                    className={s.dropdown_content}
                    style={{ display: this.state.dropdown ? "block" : "none" }}
                  >
                    {size.map(size => (
                      <li
                        onClick={this.change_size}
                        className={s.param_size}
                        height={size.height}
                        big_height={size.big_height}
                        width={size.width}
                        big_width={size.big_width}
                        left={size.left}
                        big_left={size.big_left}
                        bottom={size.bottom}
                        big_bottom={size.big_bottom}
                        price={size.price}
                        size_state={size.size}
                      >
                        {size.size}
                      </li>
                    ))}
                  </div>
                </div>

                <h3>
                  ${price_size} - {size_state}
                </h3>
              </div>
              <div className={s.butt}>
                <Link to="/">
                  <button className={s.detail_button}>BACK</button>
                </Link>
                <Link to={inCart ? "/Cart" : "/ProductDetails"}>
                  <button
                    className={s.detail_button}
                    onClick={
                      inCart
                        ? ""
                        : () => {
                            value.addToCart_from_details(
                              id,
                              size_state,
                              price_size,
                              original_price,
                              name
                            );
                            value.Modal_for_detailsOpen();
                          }
                    }
                  >
                    {inCart ? "inCart" : "Add to Cart"}
                  </button>
                </Link>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default ProductDetails;
