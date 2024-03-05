import React from 'react';
import DashboardLayout from '../../hoc/dashboardLayout';
import EmailStepper from './stepper'


const UserInfo = ({users}) => {

    return(
        <DashboardLayout title="User information">
            <div>
                <EmailStepper users={users}/>
            </div>
        </DashboardLayout>
    )

}

export default UserInfo;