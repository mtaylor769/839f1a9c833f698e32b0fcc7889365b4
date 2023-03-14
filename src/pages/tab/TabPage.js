import CustomerSearchPage from '../search/customer/CustomerPage';
import DTTabComponent from '../../components/tabComponent';
import React from 'react';
import VehicleSearchScreen from '../search/vehicle/VehicleSearchPage';
import VtvAirCheckPage from '../search/./vtvAir/VTVAirCheckPage';

const TabPage = () => {
  const TabNames = [
    {key: 'first', title: 'VTV/AIR'},
    {key: 'second', title: 'Customer'},
    {key: 'third', title: 'Vehicle'},
  ];
  const Component = {
    first: VtvAirCheckPage,
    second: CustomerSearchPage,
    third: VehicleSearchScreen,
  };
  return <DTTabComponent TabNames={TabNames} Component={Component} />;
};

export default TabPage;
