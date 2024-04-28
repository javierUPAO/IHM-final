import React from 'react';

function Espaciado({ x }) {
    const espacios = [];

    for (let i = 0; i < x; i++) {
        espacios.push(<br key={i} />);
    }

    return <>{espacios}</>;
}

export default Espaciado;