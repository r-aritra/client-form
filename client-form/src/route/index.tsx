import { mount, route, compose } from 'navi';
import React from 'react';
// Components
import { ServiceList } from '../components/pages/Services/ServiceList';
import { AddService } from '../components/pages/Services/AddService';

const routes = compose(
  mount({
    '/': route({
      getView: () => <ServiceList />,
    }),
    '/add': route({
      getView: () => <AddService />,
    }),
  })
);
export { routes };
