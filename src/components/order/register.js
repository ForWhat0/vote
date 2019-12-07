import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import _ from "lodash";
import { users } from "../shop/context";
import { Redirect } from "react-router";
import s from "./admin.module.css";

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .trim()
    .min(6, "Логін повинен містити не менше 6 знаків")
    .matches(
      /[a-zA-Z0-9]/,
      "Логін повинен містити тільки латинські букви і цифри"
    )
    .required(),
  number: Yup.string()
    .trim()
    .min(
      6,
      "Логін повинен містити не менше 6 знаків, тільки латинські букви і цифри"
    )
    .matches(
      /[a-zA-Z0-9@]/,
      "Логін повинен містити тільки латинські букви і цифри"
    )
    .required(),
  password: Yup.string()
    .trim()
    .min(
      6,
      "Пароль повинен містити не менше 6 знаків, тільки латинські букви і цифри"
    )
    .matches(
      /[a-zA-Z0-9]/,
      "Пароль повинен містити тільки латинські букви і цифри"
    )
    .required(),
  password_2: Yup.string()
    .trim()
    .oneOf([Yup.ref("password"), null], "Паролі не співпадають")
    .required()
});

const obl_arr = [
  {
    name: "Київ",
    value: "Kiev_City"
  },
  {
    name: "Вінницька",
    value: "Vinnytsia"
  },
  {
    name: "Волинська",
    value: "Volyn"
  },
  {
    name: "Дніпропетровська",
    value: "Dnipropetrovsk"
  },
  {
    name: "Донецька",
    value: "Donetsk"
  },
  {
    name: "Житомирська",
    value: "Zhytomyr"
  },
  {
    name: "Закарпатська",
    value: "Zakarpattia"
  },
  {
    name: "Запорізька",
    value: "Zaporizhia"
  },
  {
    name: "Івано-Франківська	",
    value: "Ivano_Frankivsk"
  },
  {
    name: "Київська",
    value: "Kiev"
  },
  {
    name: "Кіровоградська",
    value: "Kirovohrad"
  },
  {
    name: "Луганська",
    value: "Luhansk"
  },
  {
    name: "Львівська",
    value: "Lviv"
  },
  {
    name: "Миколаївська",
    value: "Mykolaiv"
  },
  {
    name: "Одеська",
    value: "Odessa"
  },
  {
    name: "Полтавська",
    value: "Poltava"
  },
  {
    name: "Рівненська",
    value: "Rivne"
  },
  {
    name: "Сумська",
    value: "Sumy"
  },
  {
    name: "Тернопільська",
    value: "Ternopil"
  },
  {
    name: "Харківська",
    value: "Kharkiv"
  },
  {
    name: "Херсонська",
    value: "Kherson"
  },
  {
    name: "Хмельницька",
    value: "Khmelnytskyi"
  },
  {
    name: "Черкаська",
    value: "Cherkasy"
  },
  {
    name: "Чернівецька",
    value: "Chernivtsi"
  },
  {
    name: "Чернігівська",
    value: "Chernihiv"
  }
];

class Register extends React.Component {
  state = {
    error_text: "",
    redirect: false
  };

  handleSubmit = values => {
    users
      .orderByChild("login")
      .equalTo(values.login)
      .once("value", snapshot => {
        if (snapshot.exists()) {
          this.setState({
            error_text: "такий логін уже існує"
          });
        } else {
          users
            .orderByChild("number")
            .equalTo(values.number)
            .once("value", snapshot => {
              if (snapshot.exists()) {
                this.setState({
                  error_text: "номер чи емайл уже використовується"
                });
              } else {
                users.push().set({
                  ...values,
                  last_poll: "ok"
                });
                this.setState({
                  redirect: true
                });
              }
            });
        }
      });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/Order" />;
    }

    return (
      <div className={s.form}>
        <h1>Реєстрація</h1>
        {this.state.error && (
          <div style={{ marginBottom: "5%" }}>{this.state.error_text}</div>
        )}
        <Formik
          initialValues={{
            login: "",
            number: "",
            oblast: "Kiev",
            password: "",
            password_2: ""
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            this.handleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form
              onChange={() =>
                this.setState({
                  error_text: ""
                })
              }
            >
              <Field
                className={errors.login && s.error}
                required
                autocomplete="off"
                spellcheck="false"
                name="login"
                placeholder="Логін для входу"
              />
              {errors.login && touched.login && <div>{errors.login}</div>}
              <Field
                className={errors.number && s.error}
                required
                autocomplete="off"
                spellcheck="false"
                name="number"
                placeholder="Номер або e-mail"
              />
              {errors.number && touched.number && <div>{errors.number}</div>}
              <Field as="select" required name="oblast">
                {obl_arr.map(item => (
                  <option value={item.value}>{item.name}</option>
                ))}
              </Field>
              <Field
                className={errors.password && s.error}
                required
                autocomplete="off"
                spellcheck="false"
                name="password"
                placeholder="Пароль"
                type="password"
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
              <Field
                className={errors.password_2 && s.error}
                required
                type="password"
                autocomplete="off"
                spellcheck="false"
                name="password_2"
                placeholder="Повторіть пароль"
              />
              {errors.password_2 && touched.password_2 && (
                <div>{errors.password_2}</div>
              )}
              {this.state.error_text && <div>{this.state.error_text}</div>}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default Register;
