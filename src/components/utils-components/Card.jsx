import React, { useEffect } from 'react'

const Card = ({ data }) => {
    let limit = 7;
    let screenWidth = window.innerWidth;

    if (screenWidth >= 1400) {
        limit = 7 // Afficher 7 images par ligne pour les écrans larges
    } else if (screenWidth >= 1200) {
        limit = 5 // Afficher 5 images par ligne pour les écrans moyens

    } else if (screenWidth >= 992) {
        limit = 4 // Afficher 4 images par ligne pour les écrans moyens

    } else if (screenWidth >= 768) {
        limit = 3 // Afficher 3 images par ligne pour les écrans moyens

    } else if (screenWidth >= 576) {
        limit = 2 // Afficher 2 images par ligne pour les écrans moyens
    } else {
        limit = 1 // Afficher 1 images par ligne pour les petits écrans
    }

    function changeFormateDate(oldDate) {
        return oldDate.toString().split("-").reverse().join("/");
    }

    return (
        <>
            <div className='d-flex justify-content-between mx-5'>
                <h5>Lieu : {data.lieu}</h5>
                <h5>Le {changeFormateDate(data.date)}</h5>
            </div>
            <p className='mx-5'>{data.description}</p>
            <figure className='d-flex justify-content-evenly'>
                {data.photos.slice(0, limit).map(photo => (
                    <img className='me-3' key={photo} src={`src/assets/img/imgRando/${photo}`} alt={photo} height={250} />
                ))}
            </figure>
        </>
    );
}

export default Card