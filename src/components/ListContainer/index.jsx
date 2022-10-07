import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import ListItem from '../ListItem';
import s from './style.module.sass'

export default function ListContainer() {
  const { showProducts } = useContext(Context);

  return (
    <div className={s.container}>
        {
            showProducts.map(product => <ListItem key={product.id} {...product}/>)
        }
    </div>
  )
}
