import React from 'react';
import { PopupButton } from '@typeform/embed-react';

const TypeformPhotoboothBooking = ({ buttonText }: {buttonText: string}) => {
    if (!buttonText) {
        buttonText = "Tell us about your event";
    }
   
    return (
        <PopupButton
            className="mx-auto shadow-lg sm:text-lg text-md md:text-base lg:text-xl text-base-300 shadow-base-300 btn btn-md btn-primary bg-gradient-to-b from-fuchsia-600 via-primary to-fuchsia-900"
            id="gFz9Fc6q"
            transitiveSearchParams>
            {buttonText}
        </PopupButton>
    )
};

export default TypeformPhotoboothBooking;