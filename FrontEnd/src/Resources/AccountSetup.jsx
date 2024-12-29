import React, { useState } from 'react';
import './Menubar';
import InputGroup from '../Resources/InputGroup'; // Adjust the path as necessary

const AccountSetup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        displayName: '',
        currency: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="account-setup">
            <h1>Setup Your Seller Account</h1>
            <form onSubmit={handleSubmit}>
                <InputGroup
                    label="First Name"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <InputGroup
                    label="Last Name"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <InputGroup
                    label="Display Name"
                    id="displayName"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                />
                <InputGroup
                    label="Currency"
                    id="currency"
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AccountSetup;
