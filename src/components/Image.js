import React from 'react';

const Image = ({ alt, src, className }) => {
    return <img alt={alt} src={src} className={className} />;
};

export default Image;
