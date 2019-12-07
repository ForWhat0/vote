import React from 'react';
import {Link} from 'react-router-dom'; 
import s from './product.module.css';
import {votes, indecators} from '../shop/context';
import PropTypes from 'prop-types';
import loader from './loading.gif'
import { ProductConsumer } from './context';
import  { useState } from 'react';
const cwed=[
  {name:'А. сільське, лісове та рибне господарство'},
  {name:'В+С+D+E. Промисловість'},
  {name:'F. Будівництво'},
  {name:'G. Оптова та роздрібна торгівля; ремонт автотранспортних засобів і мотоциклів'},
  {name:'H. Транспорт, складське господарство, поштова та кур’єрська діяльність'},
  {name:'I. Тимчасове розміщування й організація харчування'},
  {name:'J. Інформація та телекомунікації (в т.ч. ІТ)'},
  {name:'K. Фінансова та страхова діяльність'},
  {name:'L. Операції з нерухомим майном'},
  {name:'M. Професійна, наукова та технічна діяльність'},
  {name:'N. Діяльність у сфері адміністративного та допоміжного обслуговування'},
  {name:'P. Освіта'},
  {name:'Q. Охорона здоров’я та надання соціальної допомоги'},
  {name:'R. Мистецтво, спорт, розваги та відпочинок'},
  {name:'S. Надання інших видів послуг'},
  {name:'Т. Діяльність домашніх господарств'},
  {name:'U Діяльність екстериторіальних організацій і органів'},
]
const org_form=[
  {name:'Фермерське господарство'},
  {name:'Приватне підприємство'},
  {name:'Колективне підприємство*'},
  {name:'Державне підприємство'},
  {name:'Казенне підприємство'},
  {name:'Комунальне підприємство'},
  {name:'Дочірнє підприємство'},
  {name:'Іноземне підприємство'},
  {name:'Підприємство об’єднання громадян (релігійної організації, профспілки)'},
  {name:'Підприємство споживчої кооперації'},
  {name:'Орендне підприємство*'},
  {name:'Індивідуальне підприємство*'},
  {name:'Сімейне підприємство*'},
  {name:'Спільне підприємство*'},
  {name:'Господарські товариства'},
  {name:'Акціонерне товариство'},
  {name:'Відкрите акціонерне товариство*)'},
  {name:'Закрите акціонерне товариство*)'},
  {name:'Державна акціонерна компанія (товариство)'},
  {name:'Товариство з обмеженою відповідальністю'},
  {name:'Товариство з додатковою відповідальністю'},
  {name:'Повне товариство'},
  {name:'Командитне товариство'},
  {name:'Адвокатське об’єднання'},
  {name:'Адвокатське бюро'},
  {name:'Кооперативи'},
  {name:'Виробничий кооператив'},
  {name:'Обслуговуючий кооператив'},
  {name:'Житлово-будівельний кооператив**)'},
  {name:'Гаражний кооператив**)'},
  {name:'Споживчий кооператив'},
  {name:'Сільськогосподарський виробничий кооператив'},
  {name:'Сільськогосподарський обслуговуючий кооператив'},
  {name:'Кооперативний банк'},
  {name:'Організації (установи, заклади)'},
  {name:'Орган державної влади'},
  {name:'Судова система'},
  {name:'Орган місцевого самоврядування'},
  {name:'Державна організація (установа, заклад)'},
  {name:'Комунальна організація (установа, заклад)'},
  {name:'Приватна організація (установа, заклад)'},
  {name:'Організація (установа, заклад) об’єднання громадян (релігійної організації,профспілки, споживчої кооперації тощо)'},
  {name:'Організація орендарів*'},
  {name:'Організація покупців*'},
  {name:'Об’єднання підприємств (юридичних осіб)'},
  {name:'Асоціація'},
  {name:'Корпорація'},
  {name:'Консорціум'},
  {name:'Концерн'},
  {name:'Холдингова компанія'},
  {name:'Інші об’єднання юридичних осіб'},
  {name:'Відокремлені підрозділи без статусу юридичної особи'},
  {name:'Філія (інший відокремлений підрозділ)'},
  {name:'Представництво'},
  {name:'Непідприємницькі підприємства'},
  {name:'Органи адвокатського самоврядування'},
  {name:'Органи суддівського самоврядування'},
  {name:'Вища кваліфікаційна комісія суддів України'},
  {name:'Громадські об’єднання, профспілки, благодійні організації та інші подібні організації'},
  {name:'Політична партія'},
  {name:'Громадська організація'},
  {name:'Громадська спілка'},
  {name:'Релігійна організація'},
  {name:'Профспілка'},
  {name:'Об’єднання профспілок'},
  {name:'Творча спілка (інша професійна організація)'},
  {name:'Благодійна організація'},
  {name:'Організація роботодавців'},
  {name:'Об’єднання співвласників багатоквартирного будинку'},
  {name:'Орган самоорганізації населення'},
  {name:'Інші організаційно-правові форми'},
  {name:'Підприємець – фізична особа'},
  {name:'Товарна біржа'},
  {name:'Фондова біржа'},
  {name:'Кредитна спілка'},
  {name:'Споживче товариство'},
  {name:'Спілка споживчих товариств'},
  {name:'Недержавний пенсійний фонд'},
  {name:'Садівниче товариство**)'}
]

export default function Product(props){
  const [name, set_name] = useState('');
  const [answer, set_answer] = useState(null);
  const [value, set_value] = useState([]);
  const [weight, set_weight] = useState();
  const [weight_option_state, set_weight_option_state] = useState();
  const [answer_first, set_answer_first] = useState([]);
  const [answer_second, set_answer_second] = useState(null);
  const [search, set_serch] = useState('');
  const [find, set_find] = useState('');
  const [dropdown, set_dropdown] = useState(false);
  const [one_answer, set_oneanswer] = useState('');
  const [second_answer, set_second_answer] = useState('');
 

  const handleOptionChange=function (e,index,item,weight_of_question,weight_option){
    set_name(name=>index)
    set_answer(answer=>item)
    set_weight(weight=>weight_of_question)
    set_weight_option_state(weight_option_state=>weight_option)
    let value_ = value.slice();
    value_[index] = e.target.checked;
    set_value(value=>value_)
    
  }
  const handleOne=function (value){
    set_oneanswer(one_answer=>value)
  }
  const  handleSecond=function (event){
    let value = event.target.getAttribute('value');
    set_second_answer(second_answer=>value)
    set_dropdown(dropdown=>!dropdown)
  }
 
  const handleFirstChange=function (event){
    let state = answer_first;
    let check = event.target.checked;
    let checked_value = event.target.value;
    if(check){
      set_answer_first(answer_first=>[...answer_first,checked_value])
    }else{ 
        var index = state.indexOf(checked_value);
        if (index > -1) {
          state.splice(index, 1);
            set_answer_first(answer_first=>state)
        } 
    }
}

const handleSecondChange=function (event){
  let value = event.target.getAttribute('value');
  set_answer_second(answer_second=>value)
  set_serch(search=>value)
  set_dropdown(dropdown=>!dropdown)
}

  const checked_false=function(name){
    let value_ = value.slice();
    value_[name] = !value_[name];
    set_value(value=>[])
    set_answer(answer=>null)
  }
  const searching=function(event){
    let value = event.target.value
    set_serch(search=>value)
    set_find(find=>value)
    set_answer_second(answer_second=>value)
        
}
const drop=function(){
 set_dropdown(dropdown=>true) 
}

const down=function(){
  set_dropdown(dropdown=>false) 
 }
  
        const search_low=find.toLowerCase();
        const filter_data=org_form.filter(element=>
            element.name.toLowerCase().indexOf(search_low) !==-1 )
  if(props.item.option){
    const {id,option,select,weight_of_question,indecator,weight_of_option}=props.item;
    if (props.is_start == false){
      return(
        <div className={s.start}>
          <li>Усі ваші  дані - конфіденційні.</li>
         <li> Мета збору даних - глибокий аналіз стану цифрової трансформації та вироблення рекомендацій.</li>  
         <li>Орієнтований час проходження - близько 7 хвилин</li>  
         <button style={{marginTop:'unset'}} className={s.butt} onClick={ ()=>{props.start()}}>Почати опитування</button>
        </div>
      )
    }else{
    return(
      <div style={{width:'100%',textAlign:'center'}} >
        <div style={{marginTop:'10px'}}>
          {`${props.number + 1}/${props.length + 4 }`}
          <progress value={props.number} max={props.length + 3}/>
          </div>
        {
          props.number == 0 ? 
          <div >
            <h1>
           Назва вашого підприємства
            </h1>
            <li>
            <input className={s.inp} type='login'  value={one_answer} onChange={e =>handleOne(e.target.value)} />
            </li>
            <button className={s.butt} onClick={ one_answer == '' ?  ()=>{alert('введіть назву вашого підприємства')} : ()=>{ props.one(one_answer)}} >NEXT</button>
          </div>
          :
          props.number == 1 ? 
          <div >
            <h1>
            Кількість працівників у вашій організації
            </h1>
           <div className={s.dropdown}>
           <div className={s.global}>
             <div className={s.text}>
             <input  placeholder='оберіть кількість' required value={second_answer} id={s.filter} onClick={()=>drop()} />
             <span className={s.arrow}>
                {dropdown == false ?
                <i style={{transform:'rotate(45deg)',WebkitTransform:'rotate(45deg)'}} className={s.dropbtn} >
                </i>
                :
                <i  style={{transform:'rotate(225deg)',WebkitTransform:'rotate(225deg)'}} className={s.dropbtn} >
                </i>
              }
              </span>
             </div>
                
              </div>
              <div className={s.global}>
                <ul  className={s.dropdown_content} style={{height:'auto',display:dropdown ? 'block' : 'none' }}>
            <li value='мікро підприємство' onClick={(event)=>handleSecond(event)}>від 1 до 10</li>
            <li value='мале підприємство' onClick={(event)=>handleSecond(event)}>від 10 до 50</li>
            <li value='середнє підприємство ' onClick={(event)=>handleSecond(event)}>від 50 до 250</li>
            <li value='велике підприємство ' onClick={(event)=>handleSecond(event)}>більше 250</li>
                 </ul>
                 </div>   
                
                 
           </div>
            
          
            <button className={s.butt} onClick={answer_second == '' ?  ()=>{alert('оберіть свій варіант')} : ()=>{down();props.second(second_answer)}} >NEXT</button>
          </div>
          :
          props.number == 2 ? 
          <div className={s.option}>
            <h1>
            Оберіть галузь господарювання за видами економічної діяльності (КВЕД)
            </h1>
            {cwed.map((item)=>
          <ul>
					<li>
 <input type="checkbox" value={item.name}    onChange={(event)=>handleFirstChange(event)}  id={item.name} name={item.name}/>
 <label    value={answer_first} for={item.name}>{item.name}</label>
					</li>
          </ul>
          )}
            <button className={s.butt} onClick={ answer_first.length == 0 ?  ()=>{alert('оберіть свій варіант')} : ()=>{ props.nextItem_for_first(answer_first)}} >NEXT</button>
          </div>
          :
          props.number == 3 ? 
          <div >
            <h1>
            Якою є організаційна форма вашого підприємства?
            </h1>
           <div className={s.dropdown}>
           <div className={s.global}>
             <div className={s.text}>
             <input  placeholder='пошук' value={search} id={s.filter} onClick={()=>drop()} onChange={(event)=>searching(event)}/>
             <span className={s.arrow}>
                {dropdown == false ?
                <i style={{transform:'rotate(45deg)',WebkitTransform:'rotate(45deg)'}} className={s.dropbtn} >
                </i>
                :
                <i  style={{transform:'rotate(225deg)',WebkitTransform:'rotate(225deg)'}} className={s.dropbtn} >
                </i>
              }
              </span>
             </div>
                
              </div>
              <div className={s.global}>
                <ul  className={s.dropdown_content} style={{display:dropdown ? 'block' : 'none' }}>
            {filter_data.map(item=><li value={item.name} onClick={(event)=>handleSecondChange(event)}>{item.name}</li>)}
                 </ul>
                 </div>   
                
                 
           </div>
            
          
            <button className={s.butt} onClick={answer_second == null ?  ()=>{alert('оберіть свій варіант')} : ()=>{ props.nextItem_for_second(answer_second)}} >NEXT</button>
          </div>
          :
          <div className={s.option}>
            <h1>{select}</h1>
            <ul>
            {option.map((item,index)=>{
           const weight_option = weight_of_option[index];
           return(
					<li>
 <input type="radio" checked={value[index]} required onChange={(e)=>handleOptionChange(e,index,item,weight_of_question,weight_option)} id={item} name={id}/>
 <label    value={item} for={item}>{item}</label>
					</li>
          
            )})}
          </ul>                      
           <button className={s.butt} onClick={ answer == null ?  ()=>{alert('оберіть свій варіант')} : ()=>{ props.index(id,name,answer,indecator,weight,weight_option_state);checked_false(name)} } >NEXT</button>
          </div>
        }
    
         
         
          
         
        </div>
    )}
  }
  else{return(<div>WAIT</div>)}
}