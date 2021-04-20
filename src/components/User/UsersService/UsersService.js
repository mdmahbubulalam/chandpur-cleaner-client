import React, { useContext, useEffect, useState } from 'react';
import UsersSideBar from '../UsersSideBar/UsersSideBar';
import logo from '../../../logo.png';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';

const UsersService = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {id} = useParams();
    const [services,setServices] = useState([]);
    useEffect(()=> {
        fetch('https://nameless-caverns-23094.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const service = services.find(service => service._id === id);
    console.log(services);

    const history = useHistory();


    const onSubmit = data => {
        const orderData = {
            userEmail: loggedInUser.email,
            userName: loggedInUser.name,
            service: service?.title,
            payWith:'Credit Card',
            status:'Pending',
            date: new Date().toDateString('dd/mm/yyyy')
        }

        const url = `https://nameless-caverns-23094.herokuapp.com/addOrder`
        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(res => {
            history.go(`/usersServiceList`);
            
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
                    <h2>Service</h2>
                    <hr/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">
                        <input type="text"  name="userName" class="form-control" value={loggedInUser.name} />
                    </div>
                    <div class="form-group">
                        <input type="text"  class="form-control" name="userEmail" value={loggedInUser.email}/>
                    </div>
                    <div class="form-group">
                        <input type="text"  class="form-control" name="service" value={service?.title}/>
                    </div>
                    
                        <button type="submit" className="btn btn-success" >pay</button>
                    </form>
                </div> 
                        
            </div>
    </div>
    );
};

export default UsersService;