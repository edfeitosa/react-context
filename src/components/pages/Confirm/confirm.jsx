import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import LinkButton from '../../molecules/LinkButton/linkButton';
import { makeStyles } from '@material-ui/core/styles';
import { StateDispatch } from '../../app';
import styles from './styles';

const useStyles = makeStyles(styles);

const Confirm = () => {

  const [states] = useContext(StateDispatch);

  const [confirmed, setConfirmed] = useState(false);

  const classes = useStyles();

  const confirmedData = () => setConfirmed(true);

  return (
    <>
      {!confirmed
        ?
        (<>
          <h1>Confirme os dados</h1>
          <p>
            <b>Valor: </b>{states.unit} {states.value}<br />
            <b>Validade: </b>{states.date}<br />
            <b>Telefone: </b>{states.phoneNumber}
          </p>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonLink}
            onClick={confirmedData}
          >
            Confirmar
          </Button>
        </>)
        :
        (<>
          <h1>Sucesso</h1>
          <div className={classes.success}>
            Em breve estaremos enviando os créditos para o número {states.phoneNumber}
          </div>
          <LinkButton href={`/home/${states.code}`} textFace='Iniciar' />
        </>)
      }
    </>
  )
}

export default Confirm;
