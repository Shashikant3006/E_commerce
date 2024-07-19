import React from 'react'
import Layout from '../../components/Layout/layout'
import UserMenu from '../../components/Layout/UserMenu'

const Profile = () => {
  return (
    <Layout title={"Dashboard-Create-Product"}>
        <div className='Container-fluid p-3 m-3'>
        <div className='row'>
            <div className='col-md-3'>
                <UserMenu/>
            </div>
            <div className='col-md-9'>
                <h1>My Profile</h1>
            </div>
            </div>
        </div>
    </Layout>
  )
}

export default Profile
