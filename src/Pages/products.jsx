import { Fragment, useEffect } from "react";
import { CardProduct } from "../components/Fragments/CardProduct";
import Navbar from "./navbar";

import { useState } from "react";
// mendefinisikan list agar code tidak terlalu panjang
const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi autem
          corrupti facilis perferendis eos voluptate dolore, excepturi non quae.
          Doloremque adipisci natus ea expedita necessitatibus recusandae
          repudiandae tempora deserunt ipsum?`,
  },
  {
    id: 2,
    name: "Sepatu Bekas",
    price: 700000,
    image: "/images/shoes-2.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi autem
          Doloremque adipisci natus ea expedita necessitatibus recusandae
          repudiandae tempora deserunt ipsum?`,
  },
  {
    id: 3,
    name: "Sepatu Branded",
    price: 17000000,
    image: "/images/shoes-3.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi autem
          Doloremque adipisci natus ea expedita necessitatibus recusandae
          repudiandae tempora deserunt ipsum?`,
  },
];

const email = localStorage.getItem("email");

export const ProductsPage = () => {
  // Hooks allow function components to have access to state and other React features.
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // setCart di dalam useEffect digunakan agar datanya tersimpan di localStore di browser sehingga ketika refresh datanya tida hilang
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      // acc = accumulator digunakan sebagai kalkulasi awal dimana pada saat didefinisikan awalnya di angka berapa, agar bisa dijumlahkan dengan proses yang ada
      // item = Jika cart adalah array dari objek produk, maka item dalam iterasi pertama mungkin adalah objek produk pertama di cart.
      // reduce digunakan untuk mengiterasi setiap item di cart dan menghitung total harga.
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0); // 0 adalam accumulator awalnya

      setTotalPrice(sum); // menaruh hasil akhir dari sum yang sudah diproses ke dalam totalPrice melalui setTotalPrice

      localStorage.setItem("cart", JSON.stringify(cart)); // masukan ke local storage cartnya (diakhir) setelah sudah di set
    }
  }, [cart]); // artinya jika cartnya berubah, maka saya ingin melakukan sesuatu

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id == id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <Navbar email={email} />
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-4/6">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                addToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td colSpan={3} className="font-bold">
                  Total Price
                </td>
                <td className="font-bold">
                  Rp.
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};
