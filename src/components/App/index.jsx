import { useState, useEffect } from 'react';
import AddForm from "../../pages/AddForm";
import { Context } from '../../context';
import ListProducts from '../../pages/ListProducts';


function App() {
  const [products, setProduct] = useState([]);
  const [showProducts, setShowProducts] = useState(products);
  const [searchWord, setSearchWord] = useState('');

  const searchProduct = () =>{
    const filteredProducts = products.filter(
      product => product.title.toLowerCase().startsWith(searchWord.toLowerCase())
    );
    setShowProducts(filteredProducts);
  }

  useEffect(searchProduct, [products, searchWord]);
  
  const addProduct = (title, price, discount)=>{
    setProduct([...products, {
      id: Date.now(),
      title, price, discount
    }]);
  };


  return (
    <Context.Provider value={{addProduct, showProducts, searchProduct, setSearchWord}}>
      <AddForm />
      <ListProducts />
    </Context.Provider>
  );
}

export default App;
