// CopyInput.jsx
// basics 
import React, {useState} from 'react';

const CopyInput = () => {
    const [inputValue, setInputValue] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleCopy}>Copy</button>
        </div>
    );
};

export default CopyInput;





// rest of the part 

import React, {useState} from 'react';
import PopupContent from "./PopupContent.jsx";

const CopyInput = () => {
    const [inputValue, setInputValue] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue);
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleCopy}>Copy</button>
            <PopupContent copied={copied} />
        </div>
    );
};

export default CopyInput;








// PopupContent.jsx
import {createPortal, creatPopup} from 'react-dom';
import React from 'react';

const PopupContent = ({ copied }) => {
    return createPortal(
        <section>
            {copied && (
                <div style={{position: 'absolute', botton: '3rem'}}>Copied to Clipboard</div>
            )}
        </section>,
        document.getElementById('popup-content')
    );
};

export default PopupContent;




