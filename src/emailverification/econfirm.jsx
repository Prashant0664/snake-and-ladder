import React from 'react';
import axios from "axios";
const Econfirm = () => {
    const notify = async () => {
        await axios.post("https://mail-senderv1api.onrender.com/api/v1/signup", {
            name: "Prashant",
            gmail: "Prashantthakran@gmail.com",
            content: "jhvhujv",
            subject: "jbbihb",
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            <div onClick={() => { notify(); }}>
                Your Email has been verified
            </div>
        </>
    )
}

export default Econfirm