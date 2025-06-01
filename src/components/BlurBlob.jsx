import React from 'react'
import PropTypes from 'prop-types'

const BlurBlob = ({ position, size, variant = 'default' }) => {
    const { top, left } = position || {};
    const { width, height } = size || {};

    const getAnimationClass = () => {
        switch (variant) {
            case 'slow':
                return 'animate-blob-slow';
            case 'fast':
                return 'animate-blob-fast';
            default:
                return 'animate-blob';
        }
    };

    return (
        <div
            className="absolute"
            style={{
                top: top,
                left: left,
                width: width,
                height: height,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div
                className={`w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl ${getAnimationClass()} hover:opacity-30 transition-opacity duration-300`}
            ></div>
        </div>
    )
}

BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }),
    variant: PropTypes.oneOf(['default', 'slow', 'fast'])
}

export default BlurBlob
