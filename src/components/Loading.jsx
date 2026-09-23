import React from 'react'

const Loading = () => {
    return (
        <div className='flex items-center justify-center '>
            <button class="loading-btn" disabled>
                <span class="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
        </div>
    )
}

export default Loading
