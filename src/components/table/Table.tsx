import React from 'react'
import ICompany from '../../interfaces/ICompany'
import requestCompanies from '../../requests/requestCompanies'
import TableBody from './TableBody'
import TableHead from './TableHead'

interface IState {
  companies: ICompany[],
  chosenCompanyProperty?: CompanyKeys,
  needSortByDesc: boolean,
}

class Table extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)

    this.state = {
      companies: requestCompanies(),
      chosenCompanyProperty: undefined, 
      needSortByDesc: true,
    }

    this.sortCompanies = this.sortCompanies.bind(this)
    this.onColumnClick = this.onColumnClick.bind(this)
  }

  sortCompanies(companies: ICompany[], prop: keyof ICompany, desc: boolean) {
    let sortedCompanies = companies.sort(
      (c, b) => c[prop] > b[prop]? 1: -1
    )

    if (desc)
      sortedCompanies = companies.reverse()

    return sortedCompanies
  }

  changeSortingByDesc(companyProperty: CompanyKeys) {
    let state = this.state

    if (state.chosenCompanyProperty == companyProperty)
      this.setState(state => ({ needSortByDesc: !state.needSortByDesc }))
    else
      this.setState({ needSortByDesc: true, chosenCompanyProperty: companyProperty })

    return state.needSortByDesc
  }

  setChosenCompanyProperty(value: CompanyKeys) {
    this.setState({ chosenCompanyProperty: value })
  }

  onColumnClick(prop: CompanyKeys) {
    let needSortByDesc = this.changeSortingByDesc(prop)
    this.setState((state) => ({
      companies: this.sortCompanies(state.companies, prop, needSortByDesc)
    }))
  }

  render() {
    let state = this.state

    return (
      <table>
        <TableHead 
          onColumnClick={this.onColumnClick}
          chosenCompanyProperty={state.chosenCompanyProperty}/>
        <TableBody 
          companies={state.companies} 
          chosenCompanyProperty={state.chosenCompanyProperty}
          onColumnClick={this.onColumnClick}/>
      </table>
    )
  }
}

export const showCompanyProperties: CompanyKeys[] = ['name', 'foundationDate', 'employeeCount']

export const showCompanyColumns = ['Name', 'Foundation Date', 'Employee Count']

export type CompanyKeys = keyof ICompany

export default Table