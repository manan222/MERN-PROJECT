import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function TaskListing() {
  const navigate = useNavigate();
  const columns = [
    { field: '_id', headerName: 'Id', width: 270, sortable: true, },
    { field: 'title', headerName: 'Title', width: 270, sortable: true, },
    { field: 'description', headerName: 'Description', width: 230, sortable: true, },
    { field: 'priority', headerName: 'Priority', width: 130, sortable: true, },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 120,
      sortable: true,
    },
    {
      field: 'deadline',
      headerName: 'Deadline',
      description: 'Task Deadline.',
      sortable: true,
      width: 130,
      valueGetter: (value, row) => new Date(row.deadline).toLocaleDateString(),
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 155,
      sortable: false,
      disableClickEventBubbling: true,

      renderCell: (params) => {
        const handleEdit = (e) => {
          const currentRow = params.row;
          navigate(
            `/task/${params.row.id}`,
            {
              state: {
                currentRow
              }
            }
          )
        };

        const handleDelete = async () => {
          console.log('delete is called')
          const response = axios.delete(`http://localhost:5000/api/v1/tasks/${params.row.id}`);
          console.log('delete response:', response);
          getTasks();
        }

        return (
          <Stack direction="row" spacing={2} style={{ marginTop: "10px" }} >
            <Button variant="contained" color="primary" size="small" onClick={handleEdit}>Edit</Button>
            <Button variant="contained" color="error" size="small" onClick={handleDelete}>Delete</Button>
          </Stack >
        );
      },
    }
  ];

  const [rows, setRows] = useState([]);
  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = async () => {
    const response = await axios.get('http://localhost:5000/api/v1/tasks');
    console.log('tasks response', response.data.data);
    const data = response.data.data;
    const updatedRows = data.map(row => {
      return {
        ...row,
        id: row._id
      }

    })
    setRows(updatedRows);
  }

  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <>
      <div style={{ textAlignLast: "end", marginTop: "30px", marginRight: "50px" }}>
        <Button variant='contained' onClick={() => navigate('/task')}>Add Task</Button>
      </div>

      <Paper sx={{ height: "100%", width: '100%', marginTop: "70px" }}>
        {rows.length > 0 && <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
          sx={{ border: 0 }}
        />}

      </Paper>
    </>
  );
}