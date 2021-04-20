import React, { useState } from 'react';
import SideBar from '../Sidebar/SideBar';
import logo from '../../../logo.png';
import axios from 'axios';
import { useHistory } from 'react-router';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [imageURL,setImageURL] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const history = useHistory();

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
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
        const formData = new FormData()
        formData.append('image', imageURL);
        formData.append('title', info.serviceTitle);
        formData.append('price', info.servicePrice);
        formData.append('description', info.serviceDescription);

        fetch('https://nameless-caverns-23094.herokuapp.com/addService', {
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
                <img src={logo} className="w-25 mb-2" alt=""/>
            </div>
            <div className="row">
                
                <div className="col-md-3">
                    <SideBar />
                </div>
                
                <div className="col-md-9 mt-4">
                   <h2>Add Service</h2>
                   <hr/>
                   <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="serviceTitle">Service Title</label>
                            <input type="text" onBlur={handleBlur} name="serviceTitle" class="form-control"  placeholder="Enter title" />
                        </div>
                        <div class="form-group">
                            <label for="servicePrice">Service Price</label>
                            <input type="number" onBlur={handleBlur} class="form-control" name="servicePrice" placeholder="Enter price" />
                        </div>
                        <div class="form-group">
                            <label for="serviceDescription">Service Description</label>
                            <textarea class="form-control" onBlur={handleBlur} name="serviceDescription" rows="3" placeholder="Enter description"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="serviceImage">Upload an image</label>
                            <input type="file" onChange={handleImageUpload} class="form-control-file" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                    
            </div>
        </div>
    );
};

export default AddService;