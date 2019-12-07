import React from "react";
import {gallery} from '../shop/context';
import s from './admin.module.css';


class  Upload extends React.Component{
    state = {
        name:'',
        indecator:'Інформативні індикатори',
        options:[],
        new:[],
        data:[],
        weight:'',
        weight_of_option:[]
    }
    text=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    change_weight=(e)=>{
        this.setState({
            weight: e.target.value
        })
    }
    change_indecator=(e)=>{
        this.setState({
            indecator: e.target.value
        })
        
    } 
    addOption(){
        this.setState({new:[...this.state.new,""]})
        this.setState({data:[...this.state.data,0]})
    }
    handleChange(e,index){
        this.state.options[index] = e.target.value
        this.setState({options:this.state.options})
    }
    handleChange_weight(e,index){
        this.state.weight_of_option[index] = e.target.value
        this.setState({weight_of_option:this.state.weight_of_option})
    }
    handleRemove(index){
        this.state.new.splice(index,1)
        this.setState({new:this.state.new})
        this.state.data.splice(index,1)
        this.setState({data:this.state.data})
        this.state.options.splice(index,1)
        this.setState({options:this.state.options})
    }

    handleSumbit(e){
        console.log(this.state)
        gallery.push().set({
            'weight_option':this.state.weight_of_option,
            'weight_of_question':this.state.weight,
            'select':this.state.name,
            'data':this.state.data,
            'option':this.state.options,
            'indecator':this.state.indecator,
            'Cherkasy':this.state.data,
            'Chernihiv':this.state.data,
            'Chernivtsi':this.state.data,
            'Dnipropetrovsk':this.state.data,
            'Donetsk':this.state.data,
            'Ivano_Frankivsk':this.state.data,
            'Kharkiv':this.state.data,
            'Kherson':this.state.data,
            'Khmelnytskyi':this.state.data,
            'Kiev':this.state.data,
            'Kirovohrad':this.state.data,
            'Luhansk':this.state.data,
            'Lviv':this.state.data,
            'Mykolaiv':this.state.data,
            'Odessa':this.state.data,
            'Poltava':this.state.data,
            'Rivne':this.state.data,
            'Sumy':this.state.data,
            'Ternopil':this.state.data,
            'Vinnytsia':this.state.data,
            'Volyn':this.state.data,
            'Zakarpattia':this.state.data,
            'Zaporizhia':this.state.data,
            'Zhytomyr':this.state.data,
            'Crimea':this.state.data,
            'Kiev_City':this.state.data,

            
        })
        
    }
    render(){
    return(
        <div className={s.form}>
        <h1>Form</h1>
        <label>QUESTION</label>
        <input  name='name' placeholder="питання" value={this.state.name} onChange={e => this.text(e)}/>
        <select  indecator='indecator' value={this.state.indecator} onChange={e => this.change_indecator(e)}>
            <option>Інформативні індикатори</option>
            <option>Цифрова інфраструктура</option>
            <option>Цифрові інструменти</option>
            <option>Цифрова грамотність</option>
            </select> 
            <input   name='weight' placeholder="вага питання" value={this.state.weight} onChange={e => this.change_weight(e)}/>
        {this.state.new.map((item,index)=>{
            
                return(
                    <div key={index}>
                        <label>варіант</label>
                       <input onChange={(e)=>this.handleChange(e,index)}
                       value={this.state.options[index]} />
                        <label>вага варіанту</label>
                       <input onChange={(e)=>this.handleChange_weight(e,index)}
                       value={this.state.weight_of_option[index]} />
                       <button onClick={()=>this.handleRemove(index)}>REMOVE</button>
                    </div>
                )
        })}
        <button onClick={(e)=>this.addOption(e)}>Add Option</button>
        <button onClick={(e)=>this.handleSumbit(e)}>Sumbit</button>
        </div>
    );
}}
export default Upload;