

const Cart = ({ selectTitle ,creditHrs, remainingHrs, totalprice }) => {


   

    return (

        <div className="bg-white p-5">
            <h2 className="mb-4 text-[#2F80ED] font-bold text-[18px]">Credit Hour Remaining {remainingHrs} hr</h2>
            <hr />
            <h2 className="font-bold text-[20px]">Course Name</h2>
         
            <span>
                <ol >
                    {
                        selectTitle.map(cart =>

                            <li type="1"  className="mt-3 ml-3">  {cart.title.slice(0, 25) } </li>

                        )}
                </ol>
            </span>
            <hr />
            <p className="text-[20px] mt-3 mb-3">Total Credit Hour : {creditHrs}</p>
            <hr />

            <p className="text-[20px] mt-3">Total Price : {totalprice} USD</p>
        </div>



    );
};

export default Cart;