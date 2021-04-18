import React, { useEffect, useState } from "react";
import OrdersDetails from "./OrdersDetails";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9000/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    return (
        <div class="row">
            <h2 class="text-center">Total Order {orders.length}</h2>
            {orders.map((booking) => (
                <OrdersDetails booking={booking}></OrdersDetails>
            ))}
        </div>
    );
};

export default OrderList;
