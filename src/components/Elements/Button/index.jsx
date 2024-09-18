/* eslint-disable react/prop-types */
export const Button = (props) => {
  // destructuring
  const {
    children = "...",
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={() => {
        onClick();
      }}
    >
      {/* {props.text} */}
      {children}
    </button>
  );
};
