import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    lable,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {lable && <label className='inline-block pl-1 mb-1' htmlFor={id}>{lable}</label>}
            <input type={type}
                className={`px-3 py-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id} />
                
        </div>
    )
})
export default Input