import React from 'react';

const customButton = ({ title, handleClick, style }) =>
{
    const buttonStyle = {...style, 
        backgroundColor: '#3b82f6', // bg-blue-500
        color: '#ffffff', // text-white
        fontWeight: 'bold', // font-bold
        paddingTop: '0.5rem', // py-2
        paddingBottom: '0.5rem', // py-2
        paddingLeft: '1rem', // px-4
        paddingRight: '1rem', // px-4
        borderRadius: '20px', // rounded-full
    };

    const hoverStyle = {
        backgroundColor: '#2563eb', // hover:bg-blue-700
    };

    return (
        <>
            <button
                style={buttonStyle}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                onClick={handleClick}
            >
                {title}
            </button>
        </>
    );
};

export default customButton;