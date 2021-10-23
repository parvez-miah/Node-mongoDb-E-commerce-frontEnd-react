import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './users.css'

const Users = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('User is Deleted Succsessfully')

                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);
                }
            })
    }
    return (
        <div className="font">
            <h2 className="font">Number of Products Found : {products.length}</h2>
            {
                products.map(p => <table className="font" id="customers">
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Manage Items</th>

                    </tr>
                    <tr>
                        <td>{p.name}</td>
                        <td>{p.quantity}</td>
                        <td><button onClick={() => handleDelete(p._id)} className="delete">Delete</button><Link to={`/product/update/${p._id}`}> <button className="update">Update cart</button></Link></td>
                    </tr>

                </table>)
            }
        </div>
    );
};

export default Users;