import React, { useContext } from 'react'
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import s from './style.module.sass';
import { Context } from '../../context';

export default function AddForm() {

  const { addProduct } = useContext(Context);

  const submit = event => {
    event.preventDefault();
    const { title, price, discount } = event.target;
    addProduct(title.value, price.value, discount.value);
    title.value = '';
    price.value = '';
    discount.value  = '';
  }

  return (
    <form className={s.container} onSubmit={submit}>
        <Input placeholder='Название' name='title'/>
        <Input placeholder='Цена'name='price'/>
        <Input placeholder='Процент скидки'name='discount'/>
        <Button>Добавить</Button>
    </form>
  )
}

