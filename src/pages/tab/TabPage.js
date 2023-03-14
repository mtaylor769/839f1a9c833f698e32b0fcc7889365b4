import React from 'react';
import CustomerSearchScreen from '../search/customer/CustomerPage';
import DTTabComponent from '../../components/tabComponent';
import VehicleSearchPage from '../search/vehicle/VehicleSearchPage';
import VtvAirCheckPage from '../search/vtvAir/VTVAirCheckPage';

const TabPage = () => {
  const TabNames = [
    {key: 'first', title: 'VTV/AIR'},
    {key: 'second', title: 'Customer'},
    {key: 'third', title: 'Vehicle'},
  ];
  const Component = {
    first: VtvAirCheckPage,
    second: CustomerSearchScreen,
    third: VehicleSearchPage,
  };
  return <DTTabComponent TabNames={TabNames} Component={Component} />;
};

export default TabPage;
