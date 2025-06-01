import React from 'react';

const Tooltip = ({ children, content }) => {
    return (
        <div className="group/tooltip relative inline-block">
            {children}
            <div className="invisible opacity-0 group-hover/tooltip:visible group-hover/tooltip:opacity-100
                absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                bg-gradient-to-r from-gray-900/90 to-gray-800/90
                text-white text-xs sm:text-sm
                px-3 py-2 rounded-lg
                backdrop-blur-md
                border border-gray-700/30
                shadow-lg shadow-[#8245ec]/10
                transition-all duration-300
                max-w-[200px] z-50
                whitespace-pre-wrap text-center
                transform -translate-y-2 group-hover/tooltip:translate-y-0">
                {content}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                    border-4 border-transparent border-t-gray-900/90"></div>
            </div>
        </div>
    );
};

export default Tooltip;
