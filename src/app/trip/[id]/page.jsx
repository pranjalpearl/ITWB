import Breadcrumb from '@/components/common/Breadcrumb'
import React from 'react'
import CSR from './CSR'

const page = () => {
  return (
    <>
        <Breadcrumb
        items={[
            { name: "Home", link: "/" }, 
            { name: "Trip", link: "/trip" },
            { name: "Trip Details" }
        ]}
        showSearch={false}
      />
      <div className="spacer-bottom"></div>
        <CSR></CSR>
    </>
      
    
  )
}

export default page
