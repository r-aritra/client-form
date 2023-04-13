import React, { useState } from 'react';
import './App.css';
import { ServiceInput } from './molecules/ServiceInput';
import { MandatoryInput } from './molecules/CheckboxInput';
import { ServiceTypeSelect } from './molecules/ServiceTypeSelect';
import { CategorySelect } from './molecules/CategorySelect';
import { PriceInput } from './molecules/PriceInput';
import { BillingTypeSelect } from './molecules/BillingTypeSelect';
import { billingTypeList, CategoryList, serviceTypeList } from './appConstants'

function App() {
  const [service, setService] = useState('')
  const [mandatory, setMandatory] = useState<any>(false)
  const [serviceType, setServiceType] = useState<any>('')
  const [category, setCategory] = useState<any>('')
  const [price, setPrice] = useState<any>('')
  const [billingType, setBillingType] = useState<any>('')

  return (
    <div className="App">
      <ServiceInput
        value={service}
        onChange={setService}
      />

      <MandatoryInput
        value={mandatory}
        onChange={setMandatory}
      />

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

      <PriceInput
        value={price}
        onChange={setPrice}
      />

      <BillingTypeSelect
        optionList={billingTypeList}
        value={billingType}
        onChange={setBillingType}
      />
    </div>
  );
}

export default App;
