import React from 'react';

const Container = ({ className, children }) => {
    return (
        <section className={className}>
            <div className="px-3">{children}</div>
        </section>
    );
};

export default Container;
