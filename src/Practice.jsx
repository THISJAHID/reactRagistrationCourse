import { useEffect, useState } from "react";
import Cart from "./Cart";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";
import { FaDollarSign } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';

const Practice = () => {
    const [practice, setPractice] = useState([]);
    const [selectTitle, setTitle] = useState([]);
    const [creditHrs, setCreditHrs] = useState([])
    const [remainingHrs, setRmainingHrs] = useState([])
    const [totalprice, setTotalPrice] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPractice(data))
    }, [])

    const handleSelect = (practices) => {


        const isExist = selectTitle.find(item => item.id == practices.id);
        let count = practices.credit;
        let price = practices.price;

        if (isExist) {

            toast.warn("You are already Selected!", {
                position: "bottom-right",
                autoClose: 3000
            })
        } else {
            selectTitle.forEach((items) => {
                count = count + items.credit;
                price = price+items.price;
                


            });
            const totalRemaining = 20 - count;
           
            if (count > 20 ) {
               return toast.warn(" Cross Your Credit Finished!", {
                    position: "top-right",
                    autoClose: 3000
                })
            }else{
                setTotalPrice(price)
                setRmainingHrs(totalRemaining)
                setCreditHrs(count)
                setTitle([...selectTitle, practices]);

            }
            console.log(totalprice)
           
        }

    }
    // console.log(selectTitle)

    return (<>
       <Header></Header>
        <div className="main  container mx-auto grid-cols-1 md:flex lg:grid-cols-3  gap-5">
            <div className="grid md:grid-cols-2 w-auto lg:grid-cols-3 gap-4 mt-4 ">
                {/* <Practices key={practices.id} practice={practices} ></Practices> */}
                {
                    practice.map(practices =>


                        <div key={practices.id} className=' border  p-5 drop-shadow-sm backdrop rounded-sm bg-white'>
                            <img className='w-full rounded-md mb-4' src={practices.img} alt="" />
                            <h2 className='font-bold'><a href="#">{practices.title.slice(0, 22) + "..."}</a></h2>
                            <p className='mt-4 mb-4 text-justify text-[14px]'>{practices.description.slice()}</p>
                            <div className='flex justify-between mb-4 w-full'>
                                <span> <span className="inline-flex"><FaDollarSign></FaDollarSign> </span> Price: {practices.price}</span>
                                {/* <span>Views: {views}</span> */}
                                
                                <span className="text-15"> <span className="inline-flex text-[15px]"><BsBook></BsBook> </span> Credit hrs: {practices.credit}</span>
                            </div>
                            <button onClick={() => handleSelect(practices)} className='btn-primary w-full p-2 rounded text-white font-bold '>Select</button>

                        </div>
                    )
                }
            </div>
            <div className=" w-full  lg:w-8/12  mt-5">
                <Cart selectTitle={selectTitle} 
                creditHrs={creditHrs} 
                remainingHrs={remainingHrs}
                totalprice={totalprice}
                ></Cart>
            </div>
            <ToastContainer></ToastContainer>
        </div> 
        </>);
};

export default Practice;