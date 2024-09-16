import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Button, CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function TaskListing() {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const columns = [
    { field: 'title', headerName: 'Title', width: 270, sortable: true, },
    { field: 'description', headerName: 'Description', width: 530, sortable: true, },
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
      valueGetter: (value, row) => {
        const date = row.deadline.split('T')[0];
        return date;
      },
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
          setShowLoading(true);
          const response = await axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/tasks/${params.row.id}`);
          console.log('delete responnse------------>', response);

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
    setShowLoading(true);
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/tasks`);
    const data = response.data.data;
    const updatedRows = data.map(row => {
      return {
        ...row,
        id: row._id
      }

    })
    setRows(updatedRows);
    setTimeout(() => setShowLoading(false), 1000);
    // setShowLoading(false);
  }

  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <>
      <div style={{ textAlignLast: "end", marginTop: "30px", marginRight: "50px" }}>
        <Button variant='contained' onClick={() => navigate('/task')}>Add Task</Button>
      </div>
      {showLoading ? (
        <div style={{ textAlign: "center", top: "50%", left: "50%", position: "absolute" }}>
          <CircularProgress color="primary" />
        </div>

      ) :
        <Paper sx={{ height: "100%", width: '70%', marginTop: "70px", marginLeft: "300px" }}>
          {rows.length > 0 ? <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10, 20, 50]}
            // checkboxSelection
            sx={{ border: 0 }}
          /> :
            <div style={{ textAlign: "center", top: "50%", left: "50%", position: "absolute" }}>No Tasks to show</div>
          }

        </Paper>
      }
    </>
  );
}
