import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import LinkButton from '../../molecules/LinkButton/linkButton';
import AppClient from '../../../clients/appClient';
import { StateDispatch } from '../../app';

const Home = () => {

  const [states, dispatch] = useContext(StateDispatch);

  const { code } = useParams();

  const [asError, setAsError] = useState(false);

  useEffect(() => {
    code &&
      AppClient.getCodeTicket(code)
        .then(res => {
          dispatch({
            type: 'DATA_TICKET',
            code: res.data.id,
            value: res.data.value,
            unit: res.data.unit,
            date: res.data.date
          });
        })
        .catch(err => {
          console.log(err.message);
          setAsError(true);
        });
  }, []);

  return (
    <>
      <h1>Home</h1>
      {
        asError
          ?
          <p>O código informado não existe ou não foi encontrado</p>
          :
          <>
            <p>
              O ticket com código <b>{states.code}</b> foi encontrado. 
              Clique em <b>Avançar</b> para continuar
            </p>
            <LinkButton href='/phonenumber' textFace='Avançar' />
          </>
      }
    </>
  )
}

export default Home;