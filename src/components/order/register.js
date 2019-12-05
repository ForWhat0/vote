import React from "react";
import {users} from '../shop/context';
import { Redirect } from 'react-router';
import s from './admin.module.css';

const obl_arr= [
       {
           name:'Київ',
           value:'Kiev_City'
        },
        {
            name:'Вінницька',
            value:'Vinnytsia'
         },
         {
            name:'Волинська',
            value:'Volyn'
         },
         {
            name:'Дніпропетровська',
            value:'Dnipropetrovsk'
         },
         {
            name:'Донецька',
            value:'Donetsk'
         },
         {
            name:'Житомирська',
            value:'Zhytomyr'
         },
         {
            name:'Закарпатська',
            value:'Zakarpattia'
         },
         {
            name:'Запорізька',
            value:'Zaporizhia'
         },
         {
            name:'Івано-Франківська	',
            value:'Ivano_Frankivsk'
         },
         {
            name:'Київська',
            value:'Kiev'
         },
         {
            name:'Кіровоградська',
            value:'Kirovohrad'
         },
         {
            name:'Луганська',
            value:'Luhansk'
         },
         {
            name:'Львівська',
            value:'Lviv'
         },
         {
            name:'Миколаївська',
            value:'Mykolaiv'
         },
         {
            name:'Одеська',
            value:'Odessa'
         },
         {
            name:'Полтавська',
            value:'Poltava'
         },
         {
            name:'Рівненська',
            value:'Rivne'
         },
         {
            name:'Сумська',
            value:'Sumy'
         },
         {
            name:'Тернопільська',
            value:'Ternopil'
         },
         {
            name:'Харківська',
            value:'Kharkiv'
         },
         {
            name:'Херсонська',
            value:'Kherson'
         },
         {
            name:'Хмельницька',
            value:'Khmelnytskyi'
         },
         {
            name:'Черкаська',
            value:'Cherkasy'
         },
         {
            name:'Чернівецька',
            value:'Chernivtsi'
         },
         {
            name:'Чернігівська',
            value:'Chernihiv'
         },

]
class  Register extends React.Component{
    state = {
        login:'',
        number:'',
        oblast:'Kiev',
        password:'',
        password_2:'',
        redirect:false,
        error_text:'',
        error_password:false,
        error_login:false,
        error_number:false
    }

    change_login=(e)=>{
        this.setState({
            login: e.target.value
        })
    }
    change_oblast=(e)=>{
        this.setState({
            oblast: e.target.value
        })
    } 
    change_number=(e)=>{
        this.setState({
            number: e.target.value
        })
    }  
    change_password=(e)=>{
        this.setState({
            password: e.target.value
        })
    }  
    change_password_2=(e)=>{
        this.setState({
            password_2: e.target.value
        })
    }  
   

    handleSumbit=()=>{
        if(this.state.password!=this.state.password_2){
            this.setState({
                error_text:'паролі не співадаюь',
                error:true,
                error_password:true,
                password:'',
                password_2:''
            })
            setTimeout(function () {
                this.setState({error_password:false});
              }.bind(this), 500)
        }
        else{users.orderByChild("login").equalTo(this.state.login).once("value",snapshot => {
            if (snapshot.exists()){
                this.setState({
                    error_text:'такий логін уже існує',
                    error:true,
                    error_login:true,
                    login:''
                })
                setTimeout(function () {
                    this.setState({error_login:false});
                  }.bind(this), 500)
            }else{
                users.orderByChild("number").equalTo(this.state.number).once("value",snapshot => {
                    if (snapshot.exists()){
                        this.setState({
                            error_text:'номер чи емайл уже використовується',
                            error:true,
                            error_number:true,
                            number:''
                        })
                        setTimeout(function () {
                            this.setState({error_number:false});
                          }.bind(this), 500)
                    }else{
                        
                        users.push().set({
                            login:this.state.login,
                            number:this.state.number,
                            password:this.state.password,
                            oblast:this.state.oblast,
                            'last_poll':'ok',
                           

                            
                        })
                        this.setState({
                            redirect:true
                        })
                    }
                })
            }
        })}
        
        
    }
    render(){
        if (this.state.redirect) {
            return <Redirect push to="/Order" />;
          }
         
    return(
        <div className={s.form}>
        <h1>Реєстрація</h1>
    {this.state.error == true ? <div style={{marginBottom: '5%'}}>{this.state.error_text}</div>:null}
        <input className={this.state.error_login?s.error:null} required autocomplete="off"  spellcheck="false"  name='login' placeholder="login" value={this.state.login} onChange={e => this.change_login(e)}/>
        <input className={this.state.error_number?s.error:null} required autocomplete="off"  spellcheck="false" name='number' placeholder="email or number" value={this.state.number} onChange={e => this.change_number(e)}/>
        <select  oblast='oblast' value={this.state.oblast} onChange={e => this.change_oblast(e)}>
            {obl_arr.map(item=>
                <option value={item.value}>{item.name}</option>
                )}
            </select> 
        <input className={this.state.error_password?s.error:null} required autocomplete="off"  spellcheck="false" name='password' placeholder="password" value={this.state.password} onChange={e => this.change_password(e)}/>
        <input className={this.state.error_password?s.error:null} required autocomplete="off"  spellcheck="false" name='passwrod_2' placeholder="password" value={this.state.password_2} onChange={e => this.change_password_2(e)}/>
        <button onClick={(e)=>this.handleSumbit(e)}>Sumbit</button>
        </div>
    );
}}
export default Register;