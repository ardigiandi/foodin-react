import Cardproduct from "../element/card/cardproduct";
import { useState } from "react";

const products = [
  {
    id: "1",
    image: "/img/Image Card 1.jpg",
    name: "Canitos Snack",
    price: 12000,
  },
  {
    id: "2",
    image: "/img/Image Card 2.jpg",
    name: "Orea Sachet",
    price: 3000,
  },
  {
    id: "3",
    image: "/img/Image Card 3.jpg",
    name: "Coffee Powder",
    price: 14000,
  },
  {
    id: "4",
    image: "/img/Image Card 1.jpg",
    name: "Canitos Snack",
    price: 12000,
  },
  {
    id: "5",
    image: "/img/Image Card 2.jpg",
    name: "Orea Sachet",
    price: 3000,
  },
  {
    id: "6",
    image: "/img/Image Card 3.jpg",
    name: "Coffee Powder",
    price: 14000,
  },
  
];

const Detailproduct = () => {

  const [ order , setorder] = useState([
    {
      id: "1",
      qty: 1,
    }
  ])

  const handleorder = (id) => {
    if (order.find ((item) => item.id === id)) {
      setorder(
        order.map ((item) => 
          item.id === id ? {...item, qty: item.qty  + 1 } : item
        )
      )
    } else {
      setorder([...order, {id, qty: 1}])
    }
  }
  
  return (
    <div className="max-w-6xl mx-auto flex flex-col mt-14 gap-x-5">
      <div className="justify-between items-center flex px-4">
        <h1 className="text-xl font-semibold">Populer Product</h1>
        <a href="">See All Product</a>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-between md:gap-x-4 mt-5 mx-auto lg:px-0 gap-y-5">
        {products.map((product) => (
          <Cardproduct key={product.id}>
            <Cardproduct.header image={product.image} />
            <Cardproduct.body>{product.name}</Cardproduct.body>
            <Cardproduct.footer price={product.price} id={product.id} handleorder={handleorder} />
          </Cardproduct>
        ))}
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold mb-5">Order</h1>
        <table className="w-full text-left table-auto border-black border border-spacing-x-5 mt-7 mb-10">
          <thead >
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => {
              const product = products.find ((product) => product.id === item.id)
              return(
                <tr key={item.id}>
                  <td>{product.name}</td>
                  <td>{product.price.toLocaleString("id-ID", {style: "currency" , currency: "IDR",})}</td>
                  <td>{item.qty}</td>
                  <td>{(item.qty * product.price).toLocaleString("id-ID", {style: "currency" , currency: "IDR",})}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Detailproduct;
