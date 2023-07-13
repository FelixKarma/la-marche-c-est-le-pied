import '../assets/css/Evenements.css';

import React, { useState } from 'react';

import Card from '../components/utils-components/Card';
import datas from './../data/events.json';

const Evenements = () => {
    // const [next, isNext] = useState(false);

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section className="p-3">
            {/* <figure className="d-flex">
                <button
                    className={`w-100 border border-0 rounded-start text-white ${
                        !next ? 'bg-green' : 'bg-secondary'
                    }`}
                    onClick={() => isNext(false)}
                >
                    Précedemment
                </button>
                <button
                    className={`w-100 border border-0 rounded-end text-white ${
                        next ? 'bg-green' : 'bg-secondary'
                    }`}
                    onClick={() => isNext(true)}
                >
                    Prochainement
                </button>
            </figure> */}
            <article className="tab-slider-container">
                <figure className="tabs">
                    <div
                        className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
                        onClick={() => handleTabChange('tab1')}
                    >
                        Tab 1
                    </div>
                    <div
                        className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
                        onClick={() => handleTabChange('tab2')}
                    >
                        Tab 2
                    </div>
                </figure>
                <div className="tab-content">
                    {activeTab === 'tab1' &&
                        datas
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
                    {activeTab === 'tab2' && (
                        <div>
                            <h2>Contenu du Tab 2</h2>
                            <p>Ceci est le contenu du Tab 2.</p>
                        </div>
                    )}
                </div>
            </article>
        </section>
    );
};

export default Evenements;
