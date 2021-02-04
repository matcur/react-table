import React, { ReactNode } from 'react'
import { CompanyKeys } from './Table'

interface IProps {
  companyProperty: CompanyKeys,
  chosenCompanyProperty?: CompanyKeys,
  onColumnClick: (companyProperty: CompanyKeys) => void
}

class TableColumn extends React.Component<IProps, {}> {
  render() {
    let props = this.props

    return (
      <th
        onClick={(e) => props.onColumnClick(props.companyProperty)} 
        className={props.chosenCompanyProperty == props.companyProperty? 'chosen-column': ''} >
        {props.children}    
      </th>
    )
  }
}

export default TableColumn