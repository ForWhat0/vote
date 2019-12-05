import React from 'react';
import {Link} from 'react-router-dom'; 
import s from './product.module.css';
import {votes} from '../shop/context';
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
  const [answer, set_answer] = useState('');
  const [value, set_value] = useState([]);
  const [answer_first, set_answer_first] = useState([]);
  const [answer_second, set_answer_second] = useState('');
  const [search, set_serch] = useState('');
  const [find, set_find] = useState('');
  const [dropdown, set_dropdown] = useState(false);
  
  const handleOptionChange=function (e,index,item){
    set_name(name=>index)
    set_answer(answer=>item)
    let value_ = value.slice();
    value_[index] = e.target.checked;
    set_value(value=>value_)
    
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
console.log(answer_second)
const handleSecondChange=function (event){
  let value = event.target.getAttribute('value');
  set_answer_second(answer_second=>value)
  set_serch(search=>value)
  set_dropdown(dropdown=>!dropdown)
}

  const checked_false=function(name){
    let value_ = value.slice();
    value_[name] = !value_[name];
    set_value(value=>value_)
  }
  const searching=function(event){
    let value = event.target.value
    set_serch(search=>value)
    set_find(find=>value)
    set_answer_second(answer_second=>value)
        
}
const drop=function(event){
 set_dropdown(dropdown=>true)
      
}
  
        const search_low=find.toLowerCase();
        const filter_data=org_form.filter(element=>
            element.name.toLowerCase().indexOf(search_low) !==-1 )
  if(props.item.option){
    const {id,option,select}=props.item;
    return(
      <div style={{width:'100%',textAlign:'center'}} >
        <div >{`${props.number + 1}/${props.length + 2 }`}</div>
        {
          props.number == 0 ? 
          <div>
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
            <button onClick={()=>{ props.nextItem_for_first(answer_first)}} >NEXT</button>
          </div>
          :
          props.number == 1 ? 
          <div>
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
            
          
            <button onClick={()=>{ props.nextItem_for_second(answer_second)}} >NEXT</button>
          </div>
          :
          <div>
            <h1>{select}</h1>
            {option.map((item,index)=>
          <ul>
					<li>
 <input type="radio" checked={value[index]}  onChange={(e)=>handleOptionChange(e,index,item)} id={item} name={id}/>
 <label  onChange={(e)=>handleOptionChange(e,index,item)}  value={item} for={item}>{item}</label>
					</li>
          </ul>
          )}
           <button onClick={()=>{ props.index(id,name,answer);checked_false(name)}} >NEXT</button>
          </div>
        }
    
         
         
          
         
        </div>
    )
  }
  else{return(<div>WAIT</div>)}
}