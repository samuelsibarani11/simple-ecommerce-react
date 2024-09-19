/* eslint-disable react/prop-types */
import { Button } from "../Elements/Button";
export const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg h-72 w-96" />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 50)}
        </h5>
        <div className="text-m text-white">{children.substring(0, 200)}</div>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, addToCart, id } = props;

  return (
    <div className="flex item-center justify-between p-5">
      <span className="text-2xl font-bold text-white">
        $
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <Button classname="bg-blue-600" onClick={() => addToCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
