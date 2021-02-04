import ICompany from "../interfaces/ICompany";

function requestCompanies(): ICompany[] {
  return [
    {
      id: 1,
      name: "Apple",
      employeeCount: 123,
      foundationDate: "1234",
    },
    {
      id: 2,
      name: "Google",
      employeeCount: 1235,
      foundationDate: "2345",
    },
    {
      id: 3,
      name: "Twitter",
      employeeCount: 2235,
      foundationDate: "546",
    },
    {
      id: 4,
      name: "Youtube",
      employeeCount: 2235,
      foundationDate: "12",
    },
  ]
}

export default requestCompanies