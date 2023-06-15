import React, { useEffect, useState } from 'react';

const Card = ({ data }) => {
    const [limit, setLimit] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        let sumImageWidth = 0;
        let newLimit = 0;

        const loadImage = (photo) => {
            const image = new Image();
            image.src = `/public/img/imgRando/${photo}`;
            image.onload = () => {
                const width = (image.naturalWidth * 250) / image.naturalHeight;
                sumImageWidth += width;

                if (sumImageWidth < screenWidth) {
                    newLimit++;
                } else {
                    setLimit(newLimit);
                }
            };
        };

        data.photos.slice(0, limit).forEach(loadImage);
    }, [data.photos, screenWidth, limit]);

    function changeFormatDate(oldDate) {
        return oldDate.split('-').reverse().join('/');
    }

    return (
        <>
            <div className='d-flex justify-content-between mx-5'>
                <h5>Lieu : {data.lieu}</h5>
                <h5>Le {changeFormatDate(data.date)}</h5>
            </div>
            <p className='mx-5'>{data.description}</p>
            <figure className='d-flex justify-content-evenly'>
                {data.photos.slice(0, limit).map((photo) => (
                    <img
                        className='me-3'
                        key={photo}
                        src={`/public/img/imgRando/${photo}`}
                        alt={photo}
                        height={250}
                    />
                ))}
            </figure>
        </>
    );
};

export default Card;