import AccountLayoutInner from '@/components/layout/Account/AccountLayoutInner'
import React from 'react'

function layout({children,params}) {
  console.log(params);
  
  return (
    <div id='account-layout'>
      <AccountLayoutInner children={children} />

    </div>
  )
}

export default layout