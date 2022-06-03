import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import "./IssuePages.css";


const useStyles = makeStyles((theme) => ({
    root: {
          marginTop: theme.spacing(2),
          justifyContent:"center",
          display:'flex'
        
      }
  }));

export default function IssuePages({issueData}){

    // const classes = useStyles();
    const [page, setPage] =useState(1);
    const [currIssues,setCurrIssues] = useState(issueData.data.slice(0,5));
    const handleChange = (event, value) => {
        setPage(value);
        setCurrIssues(issueData.data.slice((value-1)*5,value*5));
      };

      const handleIssue = (url)=>{
          window.open(url)
      }

    return(
        <>
        
        
        <div className="issues-list">
        <h1 className="issue-heading">Issues List</h1>
        <h4 className="issue-heading">You can open any issue from the list</h4>
        {
            
            currIssues.map((list)=><li className="issue-item" key={list.id} onClick={()=>handleIssue(issueData.repoUrl +"/issues/" + list.number)}>{list.url}</li>)
        }
        <div className="pagination-section">
                <Pagination  count={issueData.data.length/5} variant="outlined" color="primary" page={page} onChange={handleChange} />
                </div>
        </div>
        </>
    )
}