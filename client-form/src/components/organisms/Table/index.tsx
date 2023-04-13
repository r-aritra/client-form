import React from 'react';
import './style.css';
import styled from 'styled-components';

type Props = {
  data: any[];
  columns: string[];
  tableHeader: string;
};

const Component: React.FC<Props> = ({ data, columns, tableHeader }) => {
  return (
    <>
      <HeaderContainer>
        <Title>{tableHeader}</Title>
        <a style={{ textDecoration: 'none' }} href={'/add'} title="">
          <span>Add Service</span>
        </a>
      </HeaderContainer>
      <table id="services">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>
                <div>
                  <label>{column}</label>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td align="justify">
                <input type="checkbox" />
                {item.Services}
              </td>
              <td>${item.Price}</td>
              <td>
                <input type="number" value="{item.Quantity}" />
              </td>
              <td>${item.Subtotal}</td>
              <td>{item.BillingType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export const Table = Component;

const Title = styled.h1`
  font-size: 1.5em;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
