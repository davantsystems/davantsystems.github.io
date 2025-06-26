import React, { useState } from "react";


const MailchimpForm = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new URLSearchParams();
        formData.append("EMAIL", email);
        formData.append("FNAME", firstName);
        formData.append("LNAME", lastName);
    
        // Custom endpoint for Galaxy Godspeed 5, replace with your actual endpoint
        const endpoint = "https://gmail.us21.list-manage.com/subscribe/post?u=2edf9866c6815edca67996426&amp;id=f80cae6640&amp;f_id=003a55e1f0";
    
        const requestOptions = {
            method: 'POST',
            body: formData.toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode: 'no-cors'
        };
    
        try {
            await fetch(endpoint, requestOptions);
    
            // Assuming the request is successful since no-cors mode limits response validation
            setMessage("Subscription request sent. Check your email for confirmation.");
            setEmail("");
            setFirstName("");
            setLastName("");
        } catch (error) {
            console.error("Error submitting form:", error);
            setMessage("An error occurred. Please try again.");
        }
    };
    


    return (
        <div id="mc_embed_signup" className="relative z-10 bg border-secondary">
            <form
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate form-control"
                target="_blank"
                noValidate onSubmit={handleSubmit}
            >
                <div id="mc_embed_signup_scroll">
                    <label
                        htmlFor="mce-EMAIL" className="mb-2 text-xs form-control text-secondary">
                        <span className="pl-1 relative>">Email Address</span>
                        <div className="label">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="EMAIL" className="w-full rounded-none required email input input-secondary border-opacity-20" id="mce-EMAIL" required />
                        </div>
                    </label>


                    <label htmlFor="mce-FNAME" className="mb-2 text-xs form-control text-secondary">
                        <span className="pl-1 relative>">First Name</span>
                        <div className="label">
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="FNAME" className="w-full rounded-none input input-secondary border-opacity-20" id="mce-FNAME" />
                        </div>
                    </label>

                    <label htmlFor="mce-LNAME" className="mb-2 text-xs form-control text-secondary">
                        <span className="pl-1 relative>">Last Name</span>
                        <div className="label">
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="LNAME" className="w-full rounded-none input input-secondary border-opacity-20" id="mce-LNAME" />
                        </div>
                    </label>

                    <div className="label">
                        <input
                            className="transition-all btn btn-secondary bg-gradient-to-br from-secondary via-cyan-300 to-blue-400 hover:via-cyan-300 hover:to-cyan-600"
                            type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
                    </div>

                    {message && <div>{message}</div>}
                </div>
            </form>
        </div>
    );
};

export default MailchimpForm;
