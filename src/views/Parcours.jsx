import React from 'react';

import Card from './../components/utils-components/Card';
import datas from './../data/parcours.json';

const Parcours = () => {
    return (
        <section className="p-3">
            {datas
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((data, index) => (
                    <div key={data.date}>
                        {index === 0 && <h3>Dernier parcours effectué</h3>}
                        {index === 1 && <h3>Les différents parcours</h3>}
                        <article className="border m-2 p-2">
                            <Card data={data} />
                        </article>
                    </div>
                ))}
        </section>
    );
};

export default Parcours;
