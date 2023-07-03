import React, { useState, useEffect } from 'react';
import "./sneakers.css";
import {MutatingDots} from 'react-loader-spinner'
// templete sneakers
// loading state

const Sneakers = () => {
    const url = "https://example-data.draftbit.com/sneakers?_limit=10"
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLording] = useState(true);

    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setIsLording(false)
        setProducts(data);
    };
     useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <h1>Loading..</h1>;
    }

    return (
        <div>
            {products.map((product) => {
                const {
                    id,
                    title,
                    brand,
                    retailPrice,
                    media: {smallImageUrl },
                } = product

                return (
                    <div key={id}>
                        <img src={smallImageUrl} alt={title} />
                        <h3> {brand} </h3>
                        <h4> {retailPrice} </h4>
                        <h3> {title} </h3>
                    </div>
                );
             })}
        </div>
    );
            
//     return (
//     <div>
//         <div className="delivery">
//                 <p>
//                     Free Delivery on orders above <span>$400</span>
//                 </p> 
//      </div>
// </div>
//     )
};

export default Sneakers;