import React from 'react';
import Footer from './Footer';
import '../styles/home.css';

function Home() {
  return (
    <>
      <main className=" main-home container container-sm container-md container-lg text-center mt-5 pt-4 pb-3 pl-3 pr-3 shadow p-3 rounded">
        <h2>Whale and Jaguar React Challenge</h2>
        <p>Challenge</p>
        <p>
          DESAFIO II Mostrando datos: Para esta parte muestra los datos que retorna la API
          https://restcountries.eu/. La única restricción para completar este desafío es que debes
          utilizar React.
        </p>
        <p>Instructions:</p>
        <p>
          Go to each section and follow the instructions to fetch the data from each one.
        </p>

      </main>
      <Footer />
    </>
  );
}

export default Home;
