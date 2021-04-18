import React, { useEffect, useState } from "react";
import Sidebar from "../../shareComponents/Sidebar/Sidebar";

const Manage = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9000/allOrders")
            .then((res) => res.json())

            .then((data) => setOrders(data));
    }, []);
    console.log(orders);

    function deleteItem(id) {
        console.log(id);
        fetch(`http://localhost:9000/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("deleted success");
            });
    }

    return (
        <div class="row">
            <div>
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div class="position-relative">
                    <div class="position-absolute top-0 start-50 translate-middle-x">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th
                                        className="text-secondary text-left"
                                        scope="col"
                                    >
                                        Sr No
                                    </th>
                                    <th className="text-secondary" scope="col">
                                        Name
                                    </th>
                                    <th className="text-secondary" scope="col">
                                        Email
                                    </th>
                                    <th className="text-secondary" scope="col">
                                        Time
                                    </th>
                                    <th className="text-secondary" scope="col">
                                        Item
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.orderTime}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    deleteItem(order._id)
                                                }
                                            >
                                                DELETE
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manage;
