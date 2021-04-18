import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
import Sidebar from '../../shareComponents/Sidebar/Sidebar';



const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const onSubmit = (data) => {
        console.log(data);
        const eventDta = {
            name: data.username,
            email:data.email,
            comments:data.comments,
            imageURL:imageURL,
        };

          // console.log(eventDta)
          const url = `http://localhost:9000/addReview`;
          fetch(url, {
              method: "POST",
              headers: {
                  "content-type": "application/json",
              },
              body: JSON.stringify(eventDta),
          }).then((res) => console.log("ser sid res", res));
      };

      const handleImageUpload = (event) => {
          console.log(event.target.files[0]);
           const imageData = new FormData();
           imageData.set("key", "d371491237d968517d992b8f6982be6a");
           imageData.append("image", event.target.files[0]);

          axios.post("https://api.imgbb.com/1/upload", imageData)
              .then(function (response) {
                  console.log(response)
                  setImageURL(response.data.data.display_url);
              })
              .catch(function (error) {
                  console.log(error);
              });
      };
    return (
        <div >
            <Sidebar></Sidebar>
       <div  className="col-md-9 p-4 pr-5 me-5 mt-5 container">
       <form onSubmit={handleSubmit(onSubmit)} class="row g-2">
                       <div class="col-md-6 ">

                           <input
                               name="username"
                               defaultValue={loggedInUser.name}
                              {...register('username')}
                               type="text"
                               class="form-control"

                           />
                       </div>

                       <div class="col-md-6">

                           <input
                               name="email"
                               {...register('email')}
                            type="email"
                            defaultValue= {loggedInUser.email}
                               class="form-control"

                           />
                       </div>


<div class="form-floating col-md-6">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"  name="comments" {...register('comments')} ></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
                       <div class="col-md-6">
                           <label for="inputPhoto" class="form-label">
                               Add Photo
                           </label>
                           <input
                               type="file"
                               class="form-control"
                               onChange={handleImageUpload}
                               id="Photo"
                           />
                       </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">

                       <input  type="submit" class="col-md-1 " />
                        </div>
                   </form>
       </div>
   </div>

    );
};

export default AddReview;