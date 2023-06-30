import '../assets/css/Accueil.css';

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Bouton from '../components/utils-components/Bouton';
import datas from '../data/parcours.json';

const Acceuil = () => {
    const [distanceTotal, setDistanceTotal] = useState(0);
    useEffect(() => {
        document.body.setAttribute('class', 'overflow-hidden');
        return () => {
            document.body.removeAttribute('class');
        };
    }, []);

    useEffect(() => {
        const calculatedDistance = datas.reduce(
            (total, data) => total + data.distance,
            0,
        );
        setDistanceTotal(calculatedDistance);
    }, []);

    return (
        <div id="accueil">
            <h3 className="bg-white text-center">
                {distanceTotal}km ont déjà été parcourus !
            </h3>

            <figure className="position-absolute top-50 start-50 translate-middle d-flex">
                <NavLink to="/modalites_inscription">
                    <Bouton text="S'inscrire" className="bg-green text-white fs-4 me-5" />
                </NavLink>
                <NavLink to="/parcours" className="nav-link">
                    <Bouton
                        text="Voir les parcours"
                        className="btn-primary text-white fs-4 ms-5"
                    />
                </NavLink>
            </figure>
        </div>
    );
};

export default Acceuil;
