import { Fragment, useEffect } from "react";
import { CardProduct } from "../components/Fragments/CardProduct";
import Navbar from "./navbar";

import { useState, useRef } from "react";
import { getProducts } from "../service/product.service";
import { useLogin } from "../hooks/useLogin";

export const ProductsPage = () => {
  // Hooks allow function components to have access to state and other React features.
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  // memanggil fungsi jika sudah login maka tidak bisa masuk ke page ini, tapi sebelumnya menggunakan useEffect yang lebih banyak codenya sekarang dibuat reuseable
  const username = useLogin();

  useEffect(() => {
    // setCart di dalam useEffect digunakan agar datanya tersimpan di localStore di browser sehingga ketika refresh datanya tida hilang
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
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
  }, [cart, products]); // artinya jika cartnya berubah, maka saya ingin melakukan sesuatu

  // parameter id didapat dari masing masing card, jadi masing masing card memiliki idnya masing masing dan ketika user klik add to card,
  // maka akan memanggil handle addToCart dimana passing id dari card
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id == id)) {
      setCart(
        cart.map(
          (item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item) // spread (...) digunakan untuk tetap mengikutkan yang lain hanya saja yang diubah qty dari item dengan id tersebut bertambah 1
        )
      );
    } else {
      // jika tidak ada maka tetap sama in aja
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // useRef example
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 2 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current)); // masukan ke local storage cartnya (diakhir) setelah sudah di set
  // };

  // contoh penggunaan useRef untuk DOM

  const totlaPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totlaPriceRef.current.style.display = "table-row";
    } else {
      totlaPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      <Navbar username={username} />
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-4/6">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>
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
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>
                        $
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        $
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}

              <tr ref={totlaPriceRef}>
                <td colSpan={3} className="font-bold">
                  Total Price
                </td>
                <td>
                  <b>
                    $
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};
