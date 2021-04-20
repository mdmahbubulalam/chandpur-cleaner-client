import React, { useState } from 'react';
import UsersSideBar from '../UsersSideBar/UsersSideBar';
import logo from '../../../logo.png';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import axios from 'axios';

const UsersReview = () => {
    const [review, setReview] = useState({});
    const [imageURL,setImageURL] = useState(null);
    const handleBlur = e => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const history = useHistory();

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key','5ec90382132c3cc1482448c4c48cc5dd');
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
        });
    }

    const handleSubmit = () => {
        console.log(review);
        const formData = new FormData()
        formData.append('image', imageURL);
        formData.append('name', review.name);
        formData.append('address', review.address);
        formData.append('description', review.description);
        

        fetch('https://nameless-caverns-23094.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(res => {
                history.push(`/`);
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="container">
            <div className="text-center">
                <a href="/">
                    <img src={logo} className="w-25 mb-2" alt=""/>
                </a>
            </div>
            <div className="row">
                
                <div className="col-md-3">
                    <UsersSideBar />
                </div>
                
                <div className="col-md-9 mt-4">
                   <h2>Add review</h2>
                   <hr/>
                   <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input type="text" onBlur={handleBlur} name="name" class="form-control"  placeholder="Your Name" />
                        </div>
                        <div class="form-group">
                            <input type="text" onBlur={handleBlur} class="form-control" name="address" placeholder="Enter Address" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" onBlur={handleBlur} name="description" rows="3" placeholder="Enter description"></textarea>
                        </div>
                        <div class="form-group">
                            <input type="file" onChange={handleImageUpload} class="form-control-file" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div> 
                        
            </div>
        </div>
    );
};

export default UsersReview;