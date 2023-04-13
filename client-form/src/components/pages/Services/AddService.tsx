import React, { useState } from 'react';
import { ServiceInput } from '../../molecules/ServiceInput';
import { MandatoryInput } from '../../molecules/CheckboxInput';
import { ServiceTypeSelect } from '../../molecules/ServiceTypeSelect';
import {
  CategoryList,
  billingTypeList,
  serviceTypeList,
} from '../../../appConstants';
import { CategorySelect } from '../../molecules/CategorySelect';
import { PriceInput } from '../../molecules/PriceInput';
import { BillingTypeSelect } from '../../molecules/BillingTypeSelect';

export const Component: React.VFC = () => {

  const [service, setService] = useState('');
  const [mandatory, setMandatory] = useState<any>(false);
  const [serviceType, setServiceType] = useState<any>('');
  const [category, setCategory] = useState<any>('');
  const [price, setPrice] = useState<any>('');
  const [billingType, setBillingType] = useState<any>('');

  return (
    <>
      <h2>Add Service</h2>
      <ServiceInput value={service} onChange={setService} />
      <MandatoryInput value={mandatory} onChange={setMandatory} />
      <ServiceTypeSelect
        optionList={serviceTypeList}
        value={serviceType}
        onChange={setServiceType}
      />
      <CategorySelect
        optionList={CategoryList}
        value={category}
        onChange={setCategory}
      />
      <PriceInput value={price} onChange={setPrice} />
      <BillingTypeSelect
        optionList={billingTypeList}
        value={billingType}
        onChange={setBillingType}
      />
    </>
  );
};

export const AddService = Component;
