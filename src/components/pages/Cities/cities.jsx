import React, { Fragment, useState, useEffect } from 'react';

import appClient from '../../../clients/appClient';
import ListItem from '../../molecules/ListItem/listItem'

const Cities = () => {

  const [cities, setCities] = useState([]);

  async function loadData() {
    const response = await appClient.getCities();
    setCities(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  if (cities.length) {
    return (
      <Fragment>
        <h1>Cities</h1>
        {
          cities.map((item, key) => (
            <ListItem
              key={key}
              description='Cidade'
              title={item.name} />
          ))
        }
      </Fragment>
    )
  }
  return (
    <Fragment>
      <h1>Cities</h1>
      Não foi possível carregar o componente
    </Fragment>
  );
}

export default Cities;