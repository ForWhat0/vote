import React from 'react';
export default function Change_type_chart(props){
    const arr = [
        {name:'bar',url:'https://image.flaticon.com/icons/svg/65/65848.svg'},
        {name:'horizontalBar',url:'https://www.svgrepo.com/show/100516/horizontal-bars-graphic-for-business.svg'},
        {name:'pie',url:'http://simpleicon.com/wp-content/uploads/pie-chart-5.png'}
    ]
    return(
         <div>
          {arr.map(item=>
          <li  onClick={()=>{props.click(item.name)}} >
              <img src={item.url}/>
          </li>
          )}
        </div>
     )
}
 