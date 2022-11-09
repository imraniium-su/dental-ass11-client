import React from 'react';

const Meetteam = () => {
    return (
        <div className=' mx-6'>
            <h1 className='text-4xl font-bold text-center mt-6'>Why Choose </h1>
            <p className='text-center mt-2'>Since 2000 we have remained dedicated to providing you and your family with the absolute highest level of professional and affordable dental care. <br /> Since obtaining of dental degree, our panel specialists have attended extensive continuing education training courses.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 my-6 mx-4'>
                <div className=' rounded drop-shadow-xl bg-slate-300 p-3'>
                    <img src="https://cdn-icons-png.flaticon.com/512/7336/7336126.png" alt="" />
                    <h2 className='text-1xl font-bold'>Expert in Dentisty </h2>
                </div>
                <div className=' rounded drop-shadow-xl bg-slate-300 p-3'>
                    <img src="https://cdn.vectorstock.com/i/preview-1x/59/69/dental-time-icon-logo-design-template-vector-44495969.jpg" alt="" />
                    <h2 className='text-1xl font-bold'>Ontime Appointment </h2>
                </div>
                <div className=' rounded drop-shadow-xl bg-slate-300 p-3'>
                    <img src="https://www.workncdental.com/images/icons/hexagon/darkblue/MI_DARK_BLUE_ICON_SUPPORT.png" alt="" />
                    <h2 className='text-1xl font-bold'>12/7 Support </h2>
                </div>
                <div className=' rounded drop-shadow-xl bg-slate-300 p-3'>
                    <img src="https://static.vecteezy.com/system/resources/previews/004/619/043/original/dental-chair-color-icon-isolated-illustration-vector.jpg" alt="" />
                    <h2 className='text-1xl font-bold'>Best Equipment </h2>
                </div>
                <div className=' rounded drop-shadow-xl bg-slate-300 p-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzxySPF-Vys8rMh0_peK5ev3h0j9FGc9jIUg&usqp=CAU" alt="" />
                    <h2 className='text-1xl font-bold'>100% Effort </h2>
                </div>
                <div className=' rounded drop-shadow-xl bg-slate-300 p-3'>
                    <img src="https://static.vecteezy.com/system/resources/previews/004/544/365/non_2x/dental-clinic-icon-illustration-free-vector.jpg" alt="" />
                    <h2 className='text-1xl font-bold'>Emergency Care </h2>
                </div>
            </div>
        </div>
    );
};

export default Meetteam;