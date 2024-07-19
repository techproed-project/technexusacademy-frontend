import { auth } from '@/auth'
import React from 'react'

const UserMenu = async () => {
    const session = await auth();
    console.log(session)
  return (
    <div>
        
    </div>
  )
}

export default UserMenu