import React from 'react';
import  { useState } from 'react';
import {Bar,defaults,HorizontalBar, Pie} from 'react-chartjs-2';
defaults.global.maintainAspectRatio = false
defaults.global.defaultFontSize = 8
defaults.global.legend=false 
defaults.scale.ticks.minRotation=0
defaults.scale.ticks.maxRotation= 100
export default function News(props){
  const [name, set_name] = useState('ucraine'); 
 
  console.log(defaults)
  if(props.votes){
    const oblast=props.oblast;
    const {
      dataa,option,select,Cherkasy,Chernihiv,Chernivtsi,
      Dnipropetrovsk,Donetsk,IvanoFrankivsk,Kharkiv,
      Kherson,Khmelnytskyi,Kiev,Kirovohrad,Luhansk,
      Lviv,Mykolaiv,Odessa,Poltava,Rivne,Sumy,
      Ternopil,Vinnytsia,Volyn,Zakarpattia,Zaporizhia,
      Zhytomyr,Crimea,Kiev_City} = props.votes;
      
    const data = {
      labels: 
      option,
        
      datasets: [
        {
          data: oblast=='all'?dataa: oblast=='Cherkasy'?Cherkasy:
          oblast=='Chernihiv'?Chernihiv:
          oblast=='Chernivtsi'?Chernivtsi:
          oblast=='Dnipropetrovsk'?Dnipropetrovsk:
          oblast=='Donetsk'?Donetsk:
          oblast=='IvanoFrankivsk'?IvanoFrankivsk:
          oblast=='Kharkiv'?Kharkiv:
          oblast=='Kherson'?Kherson:
          oblast=='Khmelnytskyi'?Khmelnytskyi:
          oblast=='Kiev'?Kiev:
          oblast=='Kirovohrad'?Kirovohrad:
          oblast=='Luhansk'?Luhansk:
          oblast=='Lviv'?Lviv:
          oblast=='Mykolaiv'?Mykolaiv:
          oblast=='Odessa'?Odessa:
          oblast=='Poltava'?Poltava:
          oblast=='Rivne'?Rivne:
          oblast=='Sumy'?Sumy:
          oblast=='Ternopil'?Ternopil:
          oblast=='Vinnytsia'?Vinnytsia:
          oblast=='Volyn'?Volyn:
          oblast=='Zakarpattia'?Zakarpattia:
          oblast=='Zaporizhia'?Zaporizhia:
          oblast=='Zhytomyr'?Zhytomyr:
          oblast=='Crimea'?Crimea:
          Kiev_City,
          fill: false,     
          backgroundColor: [
            '#001f3f',
            '#0074D9',
            '#7FDBFF',
            '#39CCCC',
            '#3D9970',
            '#2ECC40',
            '#01FF70',
            '#FFDC00',
            '#FF851B',
            '#FF4136',
            '#85144b',
            '#F012BE',
            '#B10DC9',
            '#111111',
            '#AAAAAA',
            '#001f3f',
            '#0074D9',
            '#7FDBFF',
            '#39CCCC',
            '#3D9970',
            '#2ECC40',
            '#01FF70',
            '#FFDC00',
            '#FF851B',
            '#FF4136',
            '#85144b',
            '#F012BE',
            '#B10DC9',
            '#111111',
            '#AAAAAA'
        ]
        }
      ]
    }
    const options = {
      plugins: {
        datalabels: {
            display: true,
            color: 'red',
            borderRadius:10,
            backgroundColor: function(context) {
            return context.dataset.backgroundColor;
            },
            align	: 'center',
            textAlign:'center',
            font: {
               weight: 'bold'
            },
        }}}
    return(
      <React.Fragment>
        <div style={{width:'100%',textAlign:'center'}}>{select}</div>
      <article style={{height:'50vh',width:'90%',marginLeft:'5%'}}>
          {props.type === 'bar' ?<Bar width={'100%'} options={options} data={data}  />: props.type === 'horizontalBar' ?
          <HorizontalBar width={'100%'} options={options} data={data}/>:<Pie width={'100%'} options={options} data={data}/>}
        </article>
        </React.Fragment>
    )
  }else{return(<div>WAIT</div>)}
}