import React from 'react'
import s from './style.module.sass';

export default function ListItem({title, price, discount}) {
  
  return (
    <div className={s.item}>
        <p>{title}</p>
        <div className={s.price}>
          {
            discount === ''
            ?<p>{price}</p>
            :<>
              <p style={{color: 'gray',textDecoration: 'line-through'}}>{price}</p>
              <p style={{color: '#FFA3A3'}}>{price - price * discount/100}</p>
            </>
          }
        </div>
    </div>
  )
}
