import React from 'react';
import { PopupButton } from '@typeform/embed-react';

const TypeformPhotoboothBooking = ({ buttonText }: {buttonText: string}) => {
    if (!buttonText) {
        buttonText = "Tell us about your event";
    }
   
    return (
        <PopupButton
            className="mx-auto shadow-lg sm:text-lg text-md md:text-xl text-base-300 shadow-base-300 btn btn-md btn-primary"
            id="gFz9Fc6q"
            enableSandbox
            transitiveSearchParams>
            {buttonText}
        </PopupButton>
    )
};

export default TypeformPhotoboothBooking;