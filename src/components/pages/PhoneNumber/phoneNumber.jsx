import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkButton from '../../molecules/LinkButton/linkButton';
import { StateDispatch } from '../../app';
import styles from './styles';

const useStyles = makeStyles(styles);

const PhoneNumber = () => {
  
  const [ states, dispatch ] = useContext(StateDispatch);

  const [ valueText, setValueText ] = useState('');

  const onTextFieldChange = event => setValueText(event.target.value);

  useEffect(() => {
    dispatch({
      type: 'PHONE_NUMBER',
      phoneNumber: valueText
    });
  }, [valueText]);

  const classes = useStyles();

  return (
    <>
      <h1>Informe número de telefone</h1>
      <p>Informe um número de telefone para receber o crédito</p>
      <p>
        <input
          className={classes.inputStyle}
          type="text"
          id="number"
          onChange={onTextFieldChange}
          value={valueText}
        />
      </p>
      <span className={classes.spaceInnerButtons}>
        <LinkButton href={`/home/${states.code}`} textFace='Voltar' /> 
      </span>
      <LinkButton href='/confirm' textFace='Avançar' />
    </>
  )
}

export default PhoneNumber;
