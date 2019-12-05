import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './context';
import s from './modal.module.css';
import  { useState } from 'react';
export default function Modal(){
const [login, set_log] = useState('');
    const [password, set_pass] = useState('');
    function change_log(value){
        set_log(login=>value)
    }
    function change_pass(value){
        set_pass(password=>value)
    }
        return(
            
                <ProductConsumer>
                    {(value)=>{
                        
                        const {modalOpen,closeModal,do_login,error_login,error_password,error_text,error}=value;
                        
                    
                    if(!modalOpen){
                        return null;
                    }
                    else {
                        return(
                            <div className={s.global}>
                             <div  className={s.form}>
                                 <h2 onClick={()=>closeModal()} className={s.close}>X</h2>
                            <h1>Вхід</h1>
                       {error == true ? <div style={{marginBottom: '5%'}}>{error_text}</div>:null}
                                  <input  className={error_login?s.error:null} value={login} onChange={e => change_log(e.target.value)} type="text" name="login" spellcheck="false" placeholder='login'  required autocomplete="off" />
                                  <input  className={error_password?s.error:null} value={password} onChange={e => change_pass(e.target.value)} type="password" name="password" spellcheck="false" placeholder='password'  required autocomplete="off" />
                                 <button onClick={()=>{do_login(login,password)}} >Sign in</button>
                                 <Link onClick={()=>closeModal()} to="/Register">
                           <div style={{marginTop:'20px'}}>
                              Зареєструватися
                           </div>
                           </Link>
                               </div>  
                            </div>  
                        )
                    }    
                    }}
                </ProductConsumer>
            
        );
    }
