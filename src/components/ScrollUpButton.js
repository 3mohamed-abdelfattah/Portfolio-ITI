import { BiChevronsUp } from "react-icons/bi";

import React from 'react';

const ScrollUpButton = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    return (
        <div className="scroll-up-btn" onClick={handleClick}>
            <BiChevronsUp />
        </div>
    );
};

export default ScrollUpButton;
