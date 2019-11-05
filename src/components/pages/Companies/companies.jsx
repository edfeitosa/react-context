import React, { Fragment, useState, useEffect } from 'react';

import appClient from '../../../clients/appClient';
import ListItem from '../../molecules/ListItem/listItem'

const Companies = () => {

  const [companies, setCompanies] = useState([]);

  async function loadData() {
    const response = await appClient.getCompanies();
    setCompanies(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  if (companies.length) {
    return (
      <Fragment>
        <h1>Companies</h1>
        {
          companies.map((item, key) => (
            <ListItem
              key={key}
              description='Empresa'
              title={item.name} />
          ))
        }
      </Fragment>
    )
  }
  return (
    <Fragment>
      <h1>Companies</h1>
      Não foi possível carregar o componente
    </Fragment>
  );
}

export default Companies;