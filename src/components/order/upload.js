import React from "react";
import {storage,order} from '../shop/context';
import Telegram from 'telegram-send-message';
import s from './admin.module.css';


class  Upload extends React.Component{
    constructor(props){
        super(props);
    
    this.state = {
        image:'',
        url:'',
        name:'',
        email:'',
        tittle:'',
        progress:0
    }
    
    this.text = this.text.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
}
    handleChange=(e)=>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(()=>({image}));
        }
    }
    text=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.tittle]: e.target.value,
        })
    }

    handleUpload = async (event)=>{
        event.preventDefault();
        const {image,name,email,tittle} = this.state;
        const uploadTask = storage.ref(`order/${image.name}`).put(image);
        uploadTask.on('state_changed',(snapshot)=>{

            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
            
        
        },
        ()=>{
            storage.ref('order').child(image.name).getDownloadURL().then(url=>{
                order.push().set({'img':url,'name':name,'email':email,'tittle':tittle,price:0,size:0})
                
            })
          
        },
        ()=>{
            storage.ref('order').child(image.name).getDownloadURL().then(url=>{
                order.push().set({'img':url,'name':name,'email':email,'tittle':tittle,price:0,size:0})
            })
            Telegram.setToken("769058548:AAEfZtSvFVUwaDNAvdHtLS4ygDcpsMfO-fs");
                Telegram.setRecipient("517033430"); 
                Telegram.setMessage( "Order \n Name: \r" + name + "\n number \n" + email +"\n" + tittle +"\n" );    
                                      Telegram.send();
        })
    }

    

    render(){
        const {name,email,tittle}=this.state;
    return(
        <div className={s.form}>
        {this.state.progress == 100 ? <h4>Thanks for your order, we will get back to you</h4> :<h4>Hello,you can order a portrait here</h4>}
       <form onSubmit={this.handleUpload}>
        <input  name='name'placeholder='name'required  value={name} onChange={e => this.text(e)}/>
        <input  name='email' placeholder='email or number'  required value={email} onChange={e => this.text(e)}/>
        <input  name='tittle' placeholder='comment' required value={tittle} onChange={e => this.text(e)}/>
        <input type="file" required onChange={this.handleChange}/>
        <button >Upload</button>
        </form>
        <progress value={this.state.progress}  max='100'/>
        </div>
    );
}}
export default Upload;