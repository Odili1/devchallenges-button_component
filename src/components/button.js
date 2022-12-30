import React from 'react'


export const Buttons = (props) => {
    const {variant, disableShadow, disabled, startIcon, endIcon, color, size, text} = props
    const para = `
        ${variant} ${color} ${size} ${disableShadow && 'disableShadow'} ${disabled && 'disabled'}
        ${color === 'primary' && 'all-blue'}
        ${(size || endIcon || startIcon) && 'all-blue'}
    `;

    function title(){
        let arr = Object.entries(props)
        arr.splice(arr.length - 1, 1)
        return arr.reduce((acc, cur, i) => {
            return acc += `${cur[0]} = '${cur[1]}' `
        }, '')
    }

    const label = `<Button ${title()}>`;

    return (
        <div className='label'>
            {label}
            <button  className={para}>
                <span class="material-symbols-outlined start">{startIcon}</span>

                {text}

                <span class="material-symbols-outlined start">{endIcon}</span>
            </button>
        </div>
    )
};