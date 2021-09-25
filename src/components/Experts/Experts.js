import React, { useEffect, useState } from 'react';

const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('./expertsData.json')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, []);
    return (
        <div>

        </div>
    );
};

export default Experts;