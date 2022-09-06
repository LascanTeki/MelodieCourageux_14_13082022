import React from 'react';
import '../Style/Table.css'
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Signin({data}) {

  console.log(data);

  const getMuiTheme = () =>
  createTheme({
    components: {
      MuiTableCell: {
        styleOverrides:{ root: {
          backgroundColor: '#9BAA50',
          borderTop: '2px solid #727F28',
          borderLeft : '3px solid #727F28',
          borderBottom : 'none',
          textAlign : "center"
        },footer: {
          backgroundColor: '#727F28',
          borderTop: '2px solid #5F6821',
        }}
      },
      MuiPaper: {
        styleOverrides:{ root: {
          padding: '0px',
          backgroundColor: '#727F28',
          border : "3px solid #5F6821"
        }}
      },
      MuiTypography: {
        styleOverrides:{ root: {
          textAlign : "left"
        }}
      },
      MuiToolbar: {
        styleOverrides:{regular: {
          minHeight: '8px',
          borderBottom : '3px solid #5F6821',
        }}
      }
    }
    });

  const columns = [
    {
      name: 'firstName',
      label: 'firstName',

    },
    {
      name: 'lastName',
      label: 'lastName',

    },
    {
      name: 'dateOfBirth',
      label: 'dateOfBirth',

    },
    {
      name: 'startDate',
      label: 'startDate',

    },
    {
      name: 'city',
      label: 'city',

    },
    {
      name: 'state',
      label: 'state',

    },
    {
      name: 'zipCode',
      label: 'zipCode',

    },
    {
      name: 'street',
      label: 'street',

    },
    {
      name: 'department',
      label: 'department',

    }
  ]

  const options = {
    selectableRows: false,
    filter: false,
    download: false,
    print: false
  };

  return (
    <main className='background'>
      <div className='Table'>
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options} />
        </ThemeProvider>
      </div>
    </main>
  )
}

export default Signin