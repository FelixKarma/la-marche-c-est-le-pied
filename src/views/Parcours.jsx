import React from 'react'
import Card from './../components/utils-components/Card';
import datas from './../data/parcours.json';

const Parcours = () => {
  return (
    <section className='p-3'>
      {datas.map((data, index) => (
        <>
          {index === 0 && <h3>Dernier parcours effectué</h3>}
          {index === 1 && <h3>Les différents parcours</h3>}
          <article key={data.date} className='border m-2 p-2'>
            <Card data={data} limit="5" />
          </article>
        </>
      ))}
    </section>
  )
}

export default Parcours