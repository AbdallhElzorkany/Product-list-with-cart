const CartProduct = ({ item, cart, setCart }) => {
  return (
    <div className="relative py-5 border-b-2 border-Rose100">
      <h1 className="font-semibold mb-1 text-sm ">{item.name}</h1>
      <p className="text-sm">
        <span className="text-Red font-bold mr-2">{item.quantity}x</span>{" "}
        <span className="text-Rose400 font-medium mx-1">@ ${item.price}</span>{" "}
        <span className="font-bold text-Rose500">
          ${item.price * item.quantity}
        </span>
      </p>
      <svg
        className="absolute top-[50%] cursor-pointer border-Rose300 border-[0.5px] hover:border-Rose900 hover:stroke-Rose900 rounded-full size-4 p-[2px] right-0 cursor-pointer"
        onClick={() => {
          setCart(
            cart.map((cartItem) => {
              if (cartItem.name === item.name) {
                return {
                  ...cartItem,
                  quantity: 0,
                };
              }
              return cartItem;
            })
          );
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="none"
        viewBox="0 0 10 10"
      >
        <path
          fill="#CAAFA7"
          d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
        />
      </svg>
    </div>
  );
};

export default CartProduct;
