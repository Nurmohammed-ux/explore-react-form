import React from 'react';

const FormAction = () => {
    const handleFormData = (formData) => {
        console.log(formData.get("name"));
        console.log(formData.get("email"));
        // const data = Object.fromEntries(formData.Entries());
        // console.log("From data", data.name);
        // console.log("From data", data.email);
    }

    return (
        <div>
            <form action={handleFormData}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;