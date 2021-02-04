import React from 'react'
import { CompanyKeys, showCompanyColumns, showCompanyProperties } from './Table'
import TableColumn from './TableColumn'


interface IProps {
  onColumnClick: (prop: CompanyKeys) => void,
  chosenCompanyProperty?: CompanyKeys,
}

interface IState {
  sortingByDesc: boolean,
}

class TableHead extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      sortingByDesc: true,
    }

    this.onColumnClick = this.onColumnClick.bind(this)
  }

  onColumnClick(companyProperty: CompanyKeys) {
    this.props.onColumnClick(companyProperty)
  }

  render() {
    let props = this.props
    let properties: { company: CompanyKeys, columnName: string }[] = [
      {
        company: 'name',
        columnName: 'Name',
      },
      {
        company: 'employeeCount',
        columnName: 'Employee count',
      },
      {
        company: 'foundationDate',
        columnName: 'Foundation date',
      },
    ]

    return (
      <thead>
        <tr>
          {
            showCompanyProperties.map((p, i) => (
              <TableColumn 
                companyProperty={p}
                chosenCompanyProperty={props.chosenCompanyProperty}
                onColumnClick={(e) => this.onColumnClick(p)}>
                {p}
              </TableColumn>
            ))
          }
        </tr>
      </thead>
    )
  }
}

export default TableHead