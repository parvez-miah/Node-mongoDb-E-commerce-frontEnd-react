import React, { useRef } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const nameRef = useRef();
    const quantityRef = useRef();

    const handleForm = e => {
        const name = nameRef.current.value;
        const quantity = quantityRef.current.value;
        const newUser = { name, quantity };
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('User is Added Successfully')
                    quantityRef.current.value = false;
                    e.target.reset();
                }
            })
        e.preventDefault()
    }
    return (
        <div className="font">
            <h2>Add a Product or more..</h2>
            <form onSubmit={handleForm}>
                <label> Name</label>
                <input ref={nameRef} type="text" id="fname" name="firstname" placeholder=" Product name.." />
                <label>Quantity</label>
                <input ref={quantityRef} id="number" type="number" placeholder="Quantity in Number.." />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default AddProduct;