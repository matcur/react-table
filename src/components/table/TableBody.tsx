import React from 'react'
import ICompany from '../../interfaces/ICompany'
import { CompanyKeys, showCompanyProperties } from './Table'
import TableColumn from './TableColumn'

interface IProps {
  companies: ICompany[],
  chosenCompanyProperty?: CompanyKeys,
  onColumnClick: (companyProperty: CompanyKeys) => void
}

class TableBody extends React.Component<IProps, {}>{
  render() {
    return (
      <tbody>
      {
        this.props.companies.map(c => (
          <tr key={c.id}>
            {
              showCompanyProperties.map(k => (
                <TableColumn
                  companyProperty={k}
                  chosenCompanyProperty={this.props.chosenCompanyProperty}
                  onColumnClick={() => this.props.onColumnClick(k)}>
                  {c[k]}
                </TableColumn>
              ))
            }
          </tr>
        ))
      }
    </tbody>
    )
  }
}

export default TableBody