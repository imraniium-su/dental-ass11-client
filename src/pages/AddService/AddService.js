import React from 'react';

const AddService = () => {
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        console.log(title, img, price, rating, description);

        const service = {
            title,
            price,
            rating,
            description,
            img
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service Added Successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er))
    }
    return (
        <div>
            <form onSubmit={handleAddService}>
                <h2 className='text-2xl text-center font-semibold'>Create Your Service</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                    <input name="title" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered" />
                    <input name="img" type="text" placeholder="Photo Url" className="input input-ghost w-full  input-bordered" />
                    <input name="price" type="number" placeholder="Price" className="input input-ghost w-full  input-bordered" required />
                    <input name="rating" type="text" placeholder="Rating" className="input input-ghost w-full  input-bordered" />
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Your Description" required></textarea>

                <input className='btn mt-2' type="submit" value="Add Service" />
            </form>

        </div>
    );
};

export default AddService;