import React from 'react'
import "./page-header.scss";

const PageHeader = ({title}) => {
  return (
    <h1 className="page-header">{title}</h1>
  )
}

export default PageHeader