import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoadingStyles from "../Styles/Loading.module.css";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        setDentist(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading ? (
        <div className={LoadingStyles.loaderContainer}>
          <span className={LoadingStyles.loader}></span>
        </div>
      ) : (
        <div className='detailContainer'>
          <img
          src="/images/doctor.jpg"
          alt="dentist img"
          className="cardImg"
          />
          <h1>{dentist.name} {dentist.username}</h1>
          <p><b>Teléfono:</b> {dentist.phone}</p>
          <p><b>Página:</b> {dentist.website}</p>
        </div>
      )}
    </>
  )
}

export default Detail