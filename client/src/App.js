import React from 'react';
import Land from './artifacts/Land.json';
import Login from "./login.component";
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { DrizzleProvider } from 'drizzle-react';

import {
    LoadingContainer,
    AccountData,
    ContractData,
    ContractForm
} from 'drizzle-react-components'

const drizzleOptions = {
    contracts: [Land]
}

var rows = [];
for (var i = 1; i < 5; i++) {
    rows.push(<ContractData contract="Land" method="getArea" methodArgs={[i, { from: "0x5b236aB63956fEF4208c6129E9F60109CE4F60c6"}]} />);
    // 0xe0786c396EEf88a42782cfd63D2329cA14b62C4C
    // 0x7556F88D25f10420b2E01559e95d4a9520B0925e
    // copied from code 0x4B31a19A6c1C89aeFB9C7989C3C1393C51acA93c
}

function App() {
    return (
    <></>
    );
}
export default App;
