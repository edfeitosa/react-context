import React, { Fragment, useState, useEffect } from 'react';

import appClient from '../../../clients/appClient';
import ListItem from '../../molecules/ListItem/listItem'

const Users = () => {

  const [users, setUsers] = useState([]);

  async function loadData() {
    const response = await appClient.getUsers();
    setUsers(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  if (users.length) {
    return (
      <Fragment>
        <h1>Users</h1>
        {
          users.map((item, key) => (
            <ListItem
              key={key}
              description='Nome'
              title={`${item.firstName} ${item.lastName}`}
              subTitle={item.email} />
          ))
        }
      </Fragment>
    )
  }
  return (
    <Fragment>
      <h1>Users</h1>
      Não foi possível carregar o componente
    </Fragment>
  );
}

export default Users;