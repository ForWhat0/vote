import React from "react";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/database";
import undefined from "firebase/storage";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDHwImovP8jh8c9j5JgzK1ewBusjnzF3pQ",
  authDomain: "digital-transformation-ua.firebaseapp.com",
  databaseURL: "https://digital-transformation-ua.firebaseio.com",
  projectId: "digital-transformation-ua",
  storageBucket: "digital-transformation-ua.appspot.com",
  messagingSenderId: "724050622658",
  appId: "1:724050622658:web:73c8e8b84f7cf20672635b",
  measurementId: "G-KRVWFLMMJH"
};
firebase.initializeApp(config);
const storage = firebase.storage();
var gallery = firebase.database().ref("database");
var users = firebase.database().ref("users");
var votes = firebase.database().ref("votes");
var indecators = firebase.database().ref("indecator");
var order = firebase.database().ref("order");
var answers = firebase.database().ref("answers");
var customer = firebase.database().ref("customer");
firebase.auth();
export {
  storage,
  gallery,
  order,
  customer,
  votes,
  indecators,
  users,
  answers,
  firebase as default
};
const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    summ_hw: 0,
    summ_di: 0,
    summ_hr: 0,
    index_user: 0,
    table: [],
    left_days: "30",
    time_poll_good: false,
    answers: [],
    error: false,
    error_text: "",
    error_login: false,
    error_password: false,
    user: null,
    islogined: "false",
    start: false,
    type: "bar",
    indecators: [],
    oblast: "all",
    options: [],
    chart: [],
    single: [],
    number: 0,
    products: [],
    single_question: 0,
    orders: [],
    votes: [],
    customers: [],
    details: "",
    cart: [],
    modalOpen: false,
    Modal_for_detais: false,
    modalProduct: "",
    orderOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  componentDidMount() {
    const item = [...this.state.products];
    const indecator = [...this.state.indecators];
    const fuck = [...this.state.single];
    const portret = [...this.state.orders];
    const vote = [...this.state.votes];
    const table = [...this.state.table];

    gallery.on("child_added", snap => {
      item.push({
        id: snap.key,
        select: snap.val().select,
        option: snap.val().option,
        dataa: snap.val().data,
        indecator: snap.val().indecator,
        weight_of_question: snap.val().weight_of_question,
        weight_of_option: snap.val().weight_option,
        Cherkasy: snap.val().Cherkasy,
        Chernihiv: snap.val().Chernihiv,
        Chernivtsi: snap.val().Chernivtsi,
        Dnipropetrovsk: snap.val().Dnipropetrovsk,
        Donetsk: snap.val().Donetsk,
        Ivano_Frankivsk: snap.val().Ivano_Frankivsk,
        Kharkiv: snap.val().Kharkiv,
        Kherson: snap.val().Kherson,
        Khmelnytskyi: snap.val().Khmelnytskyi,
        Kiev: snap.val().Kiev,
        Kirovohrad: snap.val().Kirovohrad,
        Luhansk: snap.val().Luhansk,
        Lviv: snap.val().Lviv,
        Mykolaiv: snap.val().Mykolaiv,
        Odessa: snap.val().Odessa,
        Poltava: snap.val().Poltava,
        Rivne: snap.val().Rivne,
        Sumy: snap.val().Sumy,
        Ternopil: snap.val().Ternopil,
        Vinnytsia: snap.val().Vinnytsia,
        Volyn: snap.val().Volyn,
        Zakarpattia: snap.val().Zakarpattia,
        Zaporizhia: snap.val().Zaporizhia,
        Zhytomyr: snap.val().Zhytomyr,
        Crimea: snap.val().Crimea,
        Kiev_City: snap.val().Kiev_City
      });

      this.setState({
        products: item,
        options: item,
        single: item[0],
        chart: item[0]
      });
    });
    indecators.on("child_added", snap => {
      indecator.push({
        id: snap.key,
        indecator: snap.val().indecator
      });

      this.setState({
        indecators: indecator
      });
    });
    votes.on("child_added", snap => {
      vote.push({
        id: snap.key,
        question: snap.val().question,
        option: snap.val().option
      });

      this.setState({
        votes: vote
      });
    });

    order.on("child_added", snap => {
      portret.push({
        id: snap.key,
        img: snap.val().img,
        email: snap.val().email,
        name: snap.val().name,
        tittle: snap.val().tittle,
        size: snap.val().size,
        price: snap.val().price
      });

      this.setState({
        orders: portret
      });
    });
    answers.on("child_added", snap => {
      table.push({
        id: snap.key,
        user: snap.val().user,
        date: snap.val().data,
        answers: snap.val().answers
      });

      this.setState({
        table: table
      });
    });
  }
  delete_order = id => {
    let userRef = order.child(id);
    userRef.remove();
  };
  delete_gallery = id => {
    let userRef = gallery.child(id);
    userRef.remove();
  };
  delete_customer = id => {
    let userRef = customer.child(id);
    userRef.remove();
  };
  update_order = (id, price, size) => {
    order.child(id).update({ price: price, size: size });
  };
  update_gallery = (id, name, price, tittle) => {
    gallery.child(id).update({ name: name, price: price, tittle: tittle });
  };
  update_customer = (
    id,
    name,
    price,
    tittle,
    email,
    name_of_product,
    size,
    country,
    city,
    address,
    count
  ) => {
    customer.child(id).update({
      name: name,
      total: price,
      tittle: tittle,
      email: email,
      name_of_product: name_of_product,
      size: size,
      country: country,
      city: city,
      address: address,
      count: count
    });
  };
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  getOrder = id => {
    const product = this.state.orders.find(item => item.id === id);
    return product;
  };
  getCustomer = id => {
    const product = this.state.customers.find(item => item.id === id);
    return product;
  };
  addToCart = (id, price) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.id = id;
    product.count = 1;
    product.price = price;
    product.total = Number(price);
    product.original_price = Number(price);
    product.size = "20x30";
    product.dropdown = false;
    this.setState(
      () => {
        return { product: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotal();
      }
    );
  };
  addToCart_from_details = (
    id,
    size_state,
    price_size,
    original_price,
    name
  ) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    product.price = price_size;
    product.name = name;
    product.id = id;
    product.dropdown = false;
    product.original_price = original_price;
    product.total = price_size;
    product.size = size_state;
    this.setState(
      () => {
        return { product: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotal();
      }
    );
  };
  showDetails = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { details: product };
    });
  };
  get_start = () => {
    this.setState({
      start: true
    });
  };
  showOrderDetails = id => {
    const product = this.getOrder(id);
    this.setState(() => {
      return { details: product };
    });
  };
  showCustomerDetails = id => {
    const product = this.getCustomer(id);
    this.setState(() => {
      return { details: product };
    });
  };
  openModal = () => {
    this.setState(() => {
      return { modalOpen: true };
    });
  };
  Modal_for_detailsOpen = () => {
    this.setState(() => {
      return { Modal_for_detais: true };
    });
  };
  openOrder = () => {
    this.setState(() => {
      return { orderOpen: true };
    });
  };
  closeOrder = () => {
    this.setState(() => {
      return { orderOpen: false };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = id => {
    let TempCart = [...this.state.cart];
    const SelectProduct = TempCart.find(item => item.id === id);
    const index = TempCart.indexOf(SelectProduct);
    const product = TempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...TempCart] };
      },
      () => {
        this.addTotal();
      }
    );
  };
  decrement = id => {
    let TempCart = [...this.state.cart];
    const SelectProduct = TempCart.find(item => item.id === id);
    const index = TempCart.indexOf(SelectProduct);
    const product = TempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...TempCart]
          };
        },
        () => {
          this.addTotal();
        }
      );
    }
  };
  log_out = () => {
    this.setState({
      islogined: "false"
    });
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.addTotal();
      }
    );
  };

  change_cart_size = (id, price, size, original_price) => {
    const new_price = price + original_price;
    this.setState(
      prevState => ({
        cartSubTotal: original_price,
        cart: prevState.cart.map(obj =>
          obj.id === id
            ? Object.assign(obj, {
                dropdown: !obj.dropdown,
                price: new_price,
                total: new_price,
                count: 1,
                size: size
              })
            : obj
        )
      }),
      () => {
        this.addTotal();
      }
    );
  };

  addTotal = () => {
    let SubTotal = 0;
    this.state.cart.map(item => (SubTotal += item.total));
    const total = SubTotal;
    this.setState(() => {
      return {
        cartSubTotal: total
      };
    });
  };
  dropdown_buttun = id => {
    this.setState(prevState => ({
      cart: prevState.cart.map(obj =>
        obj.id === id ? Object.assign(obj, { dropdown: !obj.dropdown }) : obj
      )
    }));
  };
  nextItem_first_question = answerFirst => {
    users
      .child(this.state.user[0].id)
      .child("name")
      .set(answerFirst);
    this.setState({
      number: this.state.number + 1
    });
  };
  nextItem_second_question = answerSecond => {
    users
      .child(this.state.user[0].id)
      .child("kilkist")
      .set(answerSecond);
    this.setState({
      number: this.state.number + 1
    });
  };
  nextItem_for_first_question = answer_first => {
    users
      .child(this.state.user[0].id)
      .child("cwed")
      .set(answer_first);
    this.setState({
      number: this.state.number + 1
    });
  };
  nextItem_for_second_question = answer_second => {
    users
      .child(this.state.user[0].id)
      .child("org_form")
      .set(answer_second);
    this.setState({
      number: this.state.number + 1
    });
  };
  nextItem = (id, name, answer, indecator, weight, weight_option_state) => {
    let length = this.state.products.length + 4;
    if (indecator == "Цифрова інфраструктура") {
      let i = Number(weight_option_state);
      let w = Number(weight);
      let summ = i * w;
      this.setState({
        summ_hw: this.state.summ_hw + summ
      });
    } else if (indecator == "Цифрові інструменти") {
      let i = Number(weight_option_state);
      let w = Number(weight);
      let summ = i * w;
      this.setState({
        summ_di: this.state.summ_di + summ
      });
    } else if (indecator == "Цифрова грамотність") {
      let i = Number(weight_option_state);
      let w = Number(weight);
      let summ = i * w;
      this.setState({
        summ_hr: this.state.summ_hr + summ
      });
    }
    if (this.state.number === length - 1) {
      let i = Number(weight_option_state);
      let w = Number(weight);
      let summ_hr = i * w;
      let summ_all =
        this.state.summ_di * 0.5 + this.state.summ_hw * 0.2 + summ_hr * 0.3;
      let fixed_index = summ_all.toFixed(3);
      this.setState({
        index_user: fixed_index
      });
      var user_answers = [...this.state.answers];
      user_answers.push({
        answer
      });
      this.setState({
        answers: user_answers,
        left_days: 30,
        time_poll_good: false
      });
      var followers = {};
      gallery
        .child(id)
        .child("data")
        .child(name)
        .on("value", snap => (followers = snap.val()));
      gallery
        .child(id)
        .child("data")
        .child(name)
        .set(followers + 1);
      var in_oblast = {};
      gallery
        .child(id)
        .child(this.state.user[0].oblast)
        .child(name)
        .on("value", snap => (in_oblast = snap.val()));
      gallery
        .child(id)
        .child(this.state.user[0].oblast)
        .child(name)
        .set(in_oblast + 1);

      var currentdate = new Date();
      var datetime =
        currentdate.getMonth() +
        1 +
        "/" +
        currentdate.getDate() +
        "/" +
        currentdate.getFullYear();

      answers.push().set({
        data: datetime,
        user: this.state.user[0].login,
        answers: user_answers,
        index: fixed_index
      });
      users
        .child(this.state.user[0].id)
        .child("last_index")
        .set(fixed_index);
      users
        .child(this.state.user[0].id)
        .child("last_poll")
        .set(datetime);
      users
        .child(this.state.user[0].id)
        .child("all_index")
        .push()
        .set(fixed_index);
      users
        .child(this.state.user[0].id)
        .child("all_times")
        .push()
        .set(datetime);
    } else {
      var user_answers = [...this.state.answers];
      user_answers.push({
        answer
      });
      this.setState({
        answers: user_answers
      });
      var followers = {};
      gallery
        .child(id)
        .child("data")
        .child(name)
        .on("value", snap => (followers = snap.val()));
      gallery
        .child(id)
        .child("data")
        .child(name)
        .set(followers + 1);
      var in_oblast = {};
      gallery
        .child(id)
        .child(this.state.user[0].oblast)
        .child(name)
        .on("value", snap => (in_oblast = snap.val()));
      gallery
        .child(id)
        .child(this.state.user[0].oblast)
        .child(name)
        .set(in_oblast + 1);
      const getIndex = this.state.products.findIndex(item => item.id === id);
      const nextIndex = getIndex + 1;
      const item = 0;
      const next = this.state.products[item + nextIndex].id;
      const photo = this.getItem(next);
      this.setState(() => {
        return { single: photo, number: this.state.number + 1 };
      });
    }
  };
  change_Chart = id => {
    const photo = this.getItem(id);
    console.log(photo);
    this.setState(() => {
      return { chart: photo };
    });
  };
  change_Oblast = name => {
    this.setState({
      oblast: name
    });
  };
  change_typeChart = name => {
    this.setState({
      type: name
    });
  };
  do_login = (login, password) => {
    const user = [];
    users
      .orderByChild("login")
      .equalTo(login)
      .once("value", snapshot => {
        if (snapshot.exists()) {
          users
            .orderByChild("login")
            .equalTo(login)
            .once("child_added")
            .then(snap => {
              var currentdate = new Date();
              var datetime =
                currentdate.getMonth() +
                1 +
                "/" +
                currentdate.getDate() +
                "/" +
                currentdate.getFullYear();
              var last_poll = snap.val().last_poll;
              var date1 = new Date(last_poll);
              var date2 = new Date(datetime);
              var Difference_In_Time = date2.getTime() - date1.getTime();
              var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
              var total_data = Difference_In_Days;
              var left_days = 30 - total_data;
              if (last_poll !== "ok") {
                this.setState({
                  left_days: left_days
                });
              }

              if (snap.val().password === password) {
                if (last_poll === "ok" || total_data > 30) {
                  user.push({
                    id: snap.key,
                    login: snap.val().login,
                    password: snap.val().password,
                    number: snap.val().number,
                    oblast: snap.val().oblast,
                    last_poll: snap.val().last_poll,
                    last_index: snap.val().last_index,
                    all_index: snap.val().all_index,
                    all_times: snap.val().all_times
                  });

                  this.setState({
                    modalOpen: false,
                    time_poll_good: true,
                    islogined: true,
                    user: user
                  });
                } else {
                  user.push({
                    id: snap.key,
                    login: snap.val().login,
                    password: snap.val().password,
                    number: snap.val().number,
                    oblast: snap.val().oblast,
                    last_poll: snap.val().last_poll,
                    last_index: snap.val().last_index,
                    all_index: snap.val().all_index,
                    all_times: snap.val().all_times
                  });

                  this.setState({
                    modalOpen: false,
                    islogined: true,
                    user: user
                  });
                }
              } else {
                this.setState({
                  error_text: "неправильний пароль",
                  error: true,
                  error_password: true
                });
                setTimeout(
                  function() {
                    this.setState({ error_password: false });
                  }.bind(this),
                  500
                );
              }
            });
        } else {
          this.setState({
            error_text: "логін не існує",
            error: true,
            error_login: true
          });
          setTimeout(
            function() {
              this.setState({ error_login: false });
            }.bind(this),
            500
          );
        }
      });
  };

  change_Option = indecator => {
    const option = [];
    console.log(indecator);
    gallery
      .orderByChild("indecator")
      .equalTo(indecator)
      .on("child_added", snap => {
        option.push({
          id: snap.key,
          select: snap.val().select,
          options: snap.val().option,
          dataa: snap.val().data,
          labels: snap.val().labels,
          indecator: snap.val().indecator,
          Cherkasy: snap.val().Cherkasy,
          Chernihiv: snap.val().Chernihiv,
          Chernivtsi: snap.val().Chernivtsi,
          Dnipropetrovsk: snap.val().Dnipropetrovsk,
          Donetsk: snap.val().Donetsk,
          IvanoFrankivsk: snap.val().Ivano_Frankivsk,
          Kharkiv: snap.val().Kharkiv,
          Kherson: snap.val().Kherson,
          Khmelnytskyi: snap.val().Khmelnytskyi,
          Kiev: snap.val().Kiev,
          Kirovohrad: snap.val().Kirovohrad,
          Luhansk: snap.val().Luhansk,
          Lviv: snap.val().Lviv,
          Mykolaiv: snap.val().Mykolaiv,
          Odessa: snap.val().Odessa,
          Poltava: snap.val().Poltava,
          Rivne: snap.val().Rivne,
          Sumy: snap.val().Sumy,
          Ternopil: snap.val().Ternopil,
          Vinnytsia: snap.val().Vinnytsia,
          Volyn: snap.val().Volyn,
          Zakarpattia: snap.val().Zakarpattia,
          Zaporizhia: snap.val().Zaporizhia,
          Zhytomyr: snap.val().Zhytomyr,
          Crimea: snap.val().Crimea,
          Kiev_City: snap.val().Kiev_City
        });

        this.setState({
          options: option
        });
      });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          get_start: this.get_start,
          nextItem_first_question: this.nextItem_first_question,
          nextItem_second_question: this.nextItem_second_question,
          nextItem_for_first_question: this.nextItem_for_first_question,
          nextItem_for_second_question: this.nextItem_for_second_question,
          log_out: this.log_out,
          do_login: this.do_login,
          change_typeChart: this.change_typeChart,
          change_Oblast: this.change_Oblast,
          change_Option: this.change_Option,
          change_Chart: this.change_Chart,
          addToCart: this.addToCart,
          nextItem: this.nextItem,
          dropdown_buttun: this.dropdown_buttun,
          delete_customer: this.delete_customer,
          update_customer: this.update_customer,
          update_gallery: this.update_gallery,
          showCustomerDetails: this.showCustomerDetails,
          delete_gallery: this.delete_gallery,
          update_order: this.update_order,
          delete_order: this.delete_order,
          showOrderDetails: this.showOrderDetails,
          showDetails: this.showDetails,
          Modal_for_detailsOpen: this.Modal_for_detailsOpen,
          addToCart_from_details: this.addToCart_from_details,
          change_cart_size: this.change_cart_size,
          openModal: this.openModal,
          closeModal: this.closeModal,
          openOrder: this.openOrder,
          closeOrder: this.closeOrder,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
