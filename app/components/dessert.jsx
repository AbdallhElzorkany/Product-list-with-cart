const Dessert = function ({ dessertItem, cart, setCart }) {
  return (
    <div>
      <div className="relative">
        <img
          className="rounded-xl"
          src={`./${dessertItem.image.desktop}`}
          alt=""
        />
        {!dessertItem.quantity ? (
          <div
            className=" bottom-[-18px] max-md:left[10%] left-[20%] w-3/5 justify-center cursor-pointer absolute flex  rounded-full border-Rose500 border-[1px] bg-Rose50 px-3 font py-2 hover:border-Red hover:text-Red"
            onClick={() =>
              setCart(
                cart.map((item) => {
                  if (item.name === dessertItem.name) {
                    return {
                      ...item,
                      quantity: item.quantity + 1,
                    };
                  }
                  return item;
                })
              )
            }
          >
            <img src="./icon-add-to-cart.svg" alt="" className="mr-3" />
            <div className="font-[600]">Add To Cart</div>
          </div>
        ) : (
          <div className=" bottom-[-18px] justify-around items-center left-[20%] w-3/5  absolute flex  rounded-full bg-Red px-3 font py-2 ">
            <svg
              className="border-white border-[0.5px] size-5 p-[3px] rounded-full cursor-pointer hover:bg-white hover:stroke-Red "
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
              onClick={() =>
                setCart(
                  cart.map((item) => {
                    if (item.name === dessertItem.name) {
                      return {
                        ...item,
                        quantity: item.quantity - 1,
                      };
                    }
                    return item;
                  })
                )
              }
            >
              <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
            </svg>
            <span className="text-white">{dessertItem.quantity}</span>
            <svg
              className="border-white border-[0.5px] size-5 p-[3px] rounded-full cursor-pointer hover:bg-white hover:stroke-Red "
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
              onClick={() =>
                setCart(
                  cart.map((item) => {
                    if (item.name === dessertItem.name) {
                      return {
                        ...item,
                        quantity: item.quantity + 1,
                      };
                    }
                    return item;
                  })
                )
              }
            >
              <path
                fill="#fff"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="mt-8">
        <h6 className="text-Rose500">{dessertItem.category}</h6>
        <h1 className="text-FontSizeProductNames font-[700]">
          {dessertItem.name}
        </h1>
        <p className="font-[600] text-[18px] text-Red">{dessertItem.price}$</p>
      </div>
    </div>
  );
};
export default Dessert;
