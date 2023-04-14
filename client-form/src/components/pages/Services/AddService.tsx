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
import { ButtonComponent } from '../../atoms/Button'
import { Service } from '../../../services/Service'

export const Component: React.VFC = () => {
  const [service, setService] = useState('');
  const [mandatory, setMandatory] = useState<any>(false);
  const [serviceType, setServiceType] = useState<any>('');
  const [category, setCategory] = useState<any>('');
  const [price, setPrice] = useState<any>('');
  const [billingType, setBillingType] = useState<any>('');

  const onSave = async () => {
    const body = {
      category_id: category?.value,
      name: service,
      price: Number(price),
      currently_type_code: 'JPY',
      billing_type: billingType?.value,
      is_mandatory: mandatory ? 1 : 0,
    }

    await Service.createService(body)
      .then((res) => {
        if(res.status === 201) return window.location.href = "/";
      })
      .catch((err) => {

      })
  };

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

      <div className="text-right">
        <ButtonComponent
          label="Save"
          onClick={onSave}
        />
      </div>
    </>
  );
};

export const AddService = Component;
