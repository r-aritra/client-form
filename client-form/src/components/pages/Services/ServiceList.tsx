import React, { useEffect, useState } from 'react';
import { Table as ServiceTable } from '../../organisms/Table';
import { Service } from '../../../services/Service';

export const Component: React.VFC = () => {
  const tableHeader = 'Service Table';
  const columns = ['Services', 'Price', 'Quantity', 'Subtotal', 'BillingType'];

  const [serviceData, setServiceData] = useState([])

  useEffect(() => {
    ;(async () => {
      const aa = await Service.fetchServiceList()
      console.log('---a', aa);
      setServiceData(aa?.data?.data?.data || [])
    })()
  }, [])

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
