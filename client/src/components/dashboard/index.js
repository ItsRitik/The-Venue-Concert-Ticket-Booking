import React from 'react';
import DashboardLayout from '../hoc/dashboardLayout'
import HistoryBlock from '../utils/historyBlock';


const UserDashboard = ({users}) => {
    return(
        <DashboardLayout title="Overview">
            <div className="user_nfo_panel">
            
              <span className='p-1 text-xl'> {users.data.firstname}</span>
              <span className='p-1 text-xl'>{users.data.lastname}</span>
              <span className='p-1 text-xl'><b>Email:</b>{users.data.email}</span>
            
          
                {
                    users.data.history ?
                    <div className="bg-slate-100 p-3 mt-4">
                        <h1 className='px-3 text-center text-3xl font-bold '>History of purchases</h1>
                        <div className="user_product_block_wrapper">
                        <HistoryBlock
                                userHistory={users.data}
                            />
                        </div>
                    </div>
                    :null
                }
            </div>
        </DashboardLayout>
    )

}


export default UserDashboard;