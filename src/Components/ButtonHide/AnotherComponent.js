import React from 'react';

const AnotherComponent = () => {
    return (
        <div>
            from AnotherComponent
        </div>
    );
};

export default React.memo(AnotherComponent) ;