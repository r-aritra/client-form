import React from 'react';
import { Table as ServiceTable } from '../../organisms/Table';

export const Component: React.VFC = () => {
  const tableHeader = 'Service Table';
  const serviceData = [
    {
      id: 1,
      Services: 'PC本体',
      Price: 3820,
      Quantity: 0,
      Subtotal: 20,
      BillingType: 'Monthly',
    },
    {
      id: 2,
      Services: 'PC運用（国内）',
      Price: 950,
      Quantity: 0,
      Subtotal: 32,
      BillingType: 'Monthly',
    },
    {
      id: 3,
      Services: 'PC運用（海外）',
      Price: 1000,
      Quantity: 0,
      Subtotal: 12,
      BillingType: 'Monthly',
    },
    {
      id: 4,
      Services: 'PCキッティング',
      Price: 9000,
      Quantity: 0,
      Subtotal: 9,
      BillingType: 'Monthly',
    },
    {
      id: 5,
      Services: 'スマートデバイス運用',
      Price: 290,
      Quantity: 0,
      Subtotal: 99,
      BillingType: 'Monthly',
    },
    {
      id: 6,
      Services: 'スマートデバイスキッティング',
      Price: 1000,
      Quantity: 0,
      Subtotal: 86,
      BillingType: 'Monthly',
    },
  ];
  const columns = ['Services', 'Price', 'Quantity', 'Subtotal', 'BillingType'];
  return (
    <div>
      <ServiceTable
        data={serviceData}
        tableHeader={tableHeader}
        columns={columns}
      />
    </div>
  );
};

export const ServiceList = Component;
