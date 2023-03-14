import React from 'react';
import CustomerSearchPage from './customer/CustomerPage';
import DTTabComponent from '../../components/tabComponent';
import VehicleSearchScreen from './vehicle/VehicleSearchPage';
import VtvAirCheckPage from './vtvAir/VTVAirCheckPage';

const SearchPage = () => {
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

export default SearchPage;
