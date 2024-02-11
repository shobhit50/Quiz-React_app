import React from 'react';
import './Options.css';

const Options = ({ options, onSelect }) => {
    return (
        <div className="options"> {/* Apply class name */}
            {options.map((option, index) => (
                <button key={index} onClick={() => onSelect(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};



export default Options;
