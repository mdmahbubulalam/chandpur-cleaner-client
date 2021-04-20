import React, { useContext, useEffect, useState } from 'react';
import UsersSideBar from '../UsersSideBar/UsersSideBar';
import logo from '../../../logo.png';
import { UserContext } from '../../../App';
import UsersService from '../UsersService/UsersService';

const User = () => {
  

    
    return (
        <div>
            <UsersService />
        </div>
    );
};

export default User;