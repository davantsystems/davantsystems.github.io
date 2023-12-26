import React, { useState } from "react";

const MailchimpForm = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("EMAIL", email);
        formData.append("FNAME", firstName);
        formData.append("LNAME", lastName);

        try {
            const response = await fetch("https://gmail.us21.list-manage.com/subscribe/post?u=2edf9866c6815edca67996426&id=f80cae6640", {
                method: "POST",
                body: formData,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                mode: "no-cors"
            });

            if (response.ok) {
                setMessage("Thank you for subscribing!");
                setEmail("");
                setFirstName("");
                setLastName("");
            } else {
                setMessage("An error occurred. Please try again.");
            }
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
                        htmlFor="mce-EMAIL" className="form-control text-secondary text-xs mb-2">
                        <span className="pl-1 relative>">Email Address</span>
                        <div className="label">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="EMAIL" className="required w-full email input input-secondary rounded-none border-opacity-20" id="mce-EMAIL" required />
                        </div>
                    </label>


                    <label htmlFor="mce-FNAME" className="form-control text-secondary text-xs mb-2">
                        <span className="pl-1 relative>">First Name</span>
                        <div className="label">
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="FNAME" className="input w-full input-secondary rounded-none border-opacity-20" id="mce-FNAME" />
                        </div>
                    </label>

                    <label htmlFor="mce-LNAME" className="form-control text-secondary text-xs mb-2">
                        <span className="pl-1 relative>">Last Name</span>
                        <div className="label">
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="LNAME" className="input w-full input-secondary rounded-none border-opacity-20" id="mce-LNAME" />
                        </div>
                    </label>

                    <div className="label">
                        <input
                            className="
                                btn
                                btn-secondary                                
                                bg-gradient-to-br
                                from-secondary
                                via-cyan-300
                                to-blue-400
                                hover:via-cyan-300
                                hover:to-cya-600"
                            type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"/>
                    </div>

                    {message && <div>{message}</div>}
                </div>
            </form>
        </div>
    );
};

export default MailchimpForm;
