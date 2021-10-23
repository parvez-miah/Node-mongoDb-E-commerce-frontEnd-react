import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const url = `http://localhost:5000/products/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, []);

    const handleName = e => {

        const nameValue = e.target.value;
        const updateName = { quantity: product.quantity, name: nameValue }
        setProduct(updateName)

    }

    const handleQuantity = e => {

        const quantityValue = e.target.value;
        const updateQuantity = { name: product.name, quantity: quantityValue };
        setProduct(updateQuantity)

    }

    const handleForm = e => {
        e.preventDefault();
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("this user is updated");
                    e.target.reset();

                }
            })


    };


    return (
        <div className="font">
            <h2>Update Products Here</h2>
            <form onSubmit={handleForm}>
                <label> Name</label>
                <input onChange={handleName} type="text" id="fname" name="firstname" placeholder=" Product name.." value={product.name || ''} />
                <label> Quantity</label>
                <input onChange={handleQuantity} type="number" placeholder="Quantity in Number.." value={product.quantity || false} />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default UpdateUser;