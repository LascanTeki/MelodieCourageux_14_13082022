import { createTheme } from '@mui/material/styles';

//Creates css for the table element

const getMuiTheme = () => createTheme({
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    backgroundColor: '#9BAA50',
                    borderTop: '2px solid #727F28',
                    borderLeft: '3px solid #727F28',
                    borderBottom: 'none',
                    textAlign: "center"
                }, footer: {
                    backgroundColor: '#727F28',
                    borderTop: '2px solid #5F6821',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '0px',
                    backgroundColor: '#727F28',
                    border: "3px solid #5F6821"
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    textAlign: "left"
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                regular: {
                    minHeight: '8px',
                    borderBottom: '3px solid #5F6821',
                }
            }
        }
    }
});

//defines the colums and which varialbles should be used in the table

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

export {getMuiTheme, columns}