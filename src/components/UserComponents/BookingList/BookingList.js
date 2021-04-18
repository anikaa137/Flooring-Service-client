import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import BookingDetailes from './BookingDetailes';


const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('http://localhost:9000/orders?email='+loggedInUser.email)
            .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    return (
        <div class="row">
                <h2 className="text-center">Your Service Details</h2>

            {
                bookings.map(booking=> <BookingDetailes booking={booking}></BookingDetailes>)
            }

        </div>
    );
};

export default BookingList;