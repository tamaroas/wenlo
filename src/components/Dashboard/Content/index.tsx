import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Content1-Main';
import Balance from './Content2-Balance';
import AdAccounts from './Content3-AdAccounts';
import Billings from './Content4-Billings';
import Transfert from './Content5-Transfert';
import AccountAccess from './Content6-AccountAccess';
import BusinessRecords from './Content7-BusinessRecords';
import Profile from './Content8-Profile';
import Header from './Header';
import Breadcrumbs from './Breadcrumbs';
import styles from './Index.module.scss'
import SubscriptionPlan from './SubscriptionPlan';

const DashboardContent = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main-balance" element={<Balance />} />
        <Route path="/ad-accounts" element={<AdAccounts />} />
        <Route path="/top-up-billings" element={<Billings />} />
        <Route path="/balance-transfer" element={<Transfert />} />
        <Route path="/manage-ad-account-access" element={<AccountAccess />} />
        <Route path="/people-business-records" element={<BusinessRecords />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/subscription-plan" element={<SubscriptionPlan />} />
      </Routes>
    </div>
  );
};

export default DashboardContent;
