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

        for (const photo of data.photos) {
            const image = new Image();
            image.src = `src/assets/img/imgRando/${photo}`;
            image.onload = () => {
                const width = (image.naturalWidth * 250) / image.naturalHeight;
                sumImageWidth += width;

                if (sumImageWidth < screenWidth - 50) {
                    newLimit++;
                } else {
                    setLimit(newLimit);
                    return;
                }
            };
        }

        setLimit(newLimit);
    }, [data.photos, screenWidth]);

    function changeFormateDate(oldDate) {
        return oldDate.toString().split('-').reverse().join('/');
    }

    return (
        <>
            <div className="d-flex justify-content-between mx-5">
                <h5>Lieu : {data.lieu}</h5>
                <h5>Le {changeFormateDate(data.date)}</h5>
            </div>
            <p className="mx-5">{data.description}</p>
            <figure className="d-flex justify-content-evenly">
                {data.photos.slice(0, limit - 1).map((photo) => (
                    <img
                        className="me-3"
                        key={photo}
                        src={`src/assets/img/imgRando/${photo}`}
                        alt={photo}
                        height={250}
                    />
                ))}
            </figure>
        </>
    );
};

export default Card;
