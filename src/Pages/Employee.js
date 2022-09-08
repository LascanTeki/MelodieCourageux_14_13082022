import React from 'react';
import '../Style/Table.css'
import MUIDataTable from "mui-datatables";
import {ThemeProvider } from '@mui/material/styles';
import {getMuiTheme, columns} from '../Components/Table'

function Signin({ data }) {


  //options for the table (removing icons)
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