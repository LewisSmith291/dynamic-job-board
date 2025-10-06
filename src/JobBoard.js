import React from 'react'

const JobBoard = () => {
    const companyName = "Tech Org"
    const jobCount = 12;

    const getDate = () => {
        const date = new Date();
        return date.toString();
    }

    const getJobMessage = () => {
        if (jobCount == 0){
            return "No jobs to schedule today";
        }
        else if (jobCount < 5){
            return `Small number of jobs today: ${jobCount}`;
        }
        else {
            return `Large number of jobs today: ${jobCount}`;
        }
    }

    return (
        <div>
            <h1>{companyName}</h1>
            <p>{getDate()}</p>
            <p>{getJobMessage()}</p>
        </div>
    )
}

export default JobBoard
