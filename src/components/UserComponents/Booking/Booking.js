

import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../../shareComponents/Sidebar/Sidebar';
import { userContext } from '../../../App';

const  Booking = () => {
    const [loggedInUser, setLoggedInUser] =  useContext(userContext)
    // console.log(loggedInUser);
    const [info, setInfo] = React.useState({});
    const [service, setService] = useState([])
    const { id } = useParams()
    // console.log("id is ", id);
    React.useEffect(() => {
        fetch(`http://localhost:9000/service/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setService(data)
            });
    }, [id]);

    const handleBlur = e => {
        const newInfo = { ...info };
        console.log(e.target.name, e.target.value);
        newInfo[e.target.name] = e.target.value;
        // setInfo(newInfo);
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newInformation = { ...service, ...loggedInUser,}
        // console.log(newInformation)

    };

    const handlePaymentSuccess = paymentId => {
        const newInformation = {
            ...loggedInUser,
            name: service.name,
            image:service.imageURL,
            paymentId,
            orderTime: new Date().toLocaleDateString()
        }
        console.log('newInfo', newInformation);
        fetch('http://localhost:9000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newInformation)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log("database data ", data);
                    alert('your order placed successfully')
                }
                console.log(data)
            })
    }
    return (
        <section className="container-fluid row">
                <Sidebar></Sidebar>
            <div className="col-md-9 p-4 pr-5 me-5 mt-5 container" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" value={loggedInUser.name} name="displayName" />
                    </div>
                    <div className="form-group">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" value={loggedInUser.email} name="email" />
                    </div>
                    <div className="form-group">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" value={service.name} name="name" />
                    </div>
                    <h5>Your Service Charge Will Be:  {service.smallArea}</h5>

                    {/* <input type="submit" /> */}
                </form>

                <div>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </section>
    );
};

export default Booking;
