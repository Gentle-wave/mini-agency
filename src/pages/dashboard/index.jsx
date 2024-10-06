import React from 'react'
import AdminDashboard from './admin'
import AgencyDashboard from './agency'
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
  const { dashboardData } = useLoaderData();

  return dashboardData.role === 'admin' ? <AdminDashboard userInfo={dashboardData}/> : <AgencyDashboard userInfo={dashboardData}/>
}

export default Dashboard