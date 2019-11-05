import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import LinkButton from '../../molecules/LinkButton/linkButton';
import AppClient from '../../../clients/appClient';
import { TicketDispatch } from '../../app';

const Home = () => {

  const [ticket, ticketDispatch] = useContext(TicketDispatch);
  console.log(ticket);

  const { code } = useParams();

  const [asError, setAsError] = useState(false);

  useEffect(() => {
    code &&
      AppClient.getCodeTicket(code)
        .then(res => {
          ticketDispatch(
          ticket,
          {
            type: 'DATA_TICKET',
            value: res.value,
            unit: res.unit,
            date: res.date
          });
          console.log(ticket);
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
            <p>Está é a página inicial do projeto de teste</p>
            <LinkButton href='/' textFace='Avançar' />
          </>
      }
    </>
  )
}

export default Home;