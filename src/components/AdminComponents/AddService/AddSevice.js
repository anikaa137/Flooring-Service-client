import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../shareComponents/Sidebar/Sidebar";

const AddSevice = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data) => {
        console.log(data);
        const eventDta = {
            name: data.name,
            smallArea: data.smallArea,
            entireRoom: data.entireRoom,
            imageURL: imageURL,
        };

        // console.log(eventDta)
        const url = `http://localhost:9000/addService`;
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

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                console.log(response);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <form onSubmit={handleSubmit(onSubmit)} class="row g-2">
                    <div class="col-md-6">
                        <label for="inputname" class="form-label">
                            Product Name
                        </label>
                        <input
                            name="name"
                            defaultValue="Typology"
                            {...register("name")}
                            type="text"
                            class="form-control"
                            id="name"
                        />
                    </div>

                    <div class="col-md-6">
                        <label for="inputWight" class="form-label">
                            Small Area
                        </label>
                        <input
                            name="smallArea"
                            {...register("smallArea")}
                            type="text"
                            class="form-control"
                            id="smallArea"
                        />
                    </div>

                    <div class="col-md-6">
                        <label for="inputWight" class="form-label">
                            Entire Room
                        </label>
                        <input
                            name="entireRoom"
                            {...register("entireRoom")}
                            type="text"
                            class="form-control"
                            id="entireRoom"
                        />
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

                    <input type="submit" class="col-md-1" />
                </form>
            </div>
        </div>
    );
};

export default AddSevice;
