import React from 'react'
import { Button } from 'react-bootstrap'

const AdminToolbar = () => {


    const handleDelete = () => { 
        
     }

  return (
    <Button variant="link" onClick={handleDelete}>
        <i className="pi pi-trash"></i>
    </Button>
  )
}

export default AdminToolbar