import JobDisplay from './JobDisplay';

const JobBoard = () => {
    const companyName = "Tech Org"
    const maxJobs = 10;
    const jobCount = Math.floor(Math.random() * (maxJobs));

    const getDate = () => {
        let date = new Date().toLocaleDateString();
        return date;
    }

    const getJobMessage = () => {
        if (jobCount === 0){
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
            <div>{JobDisplay(jobCount)}</div>
        </div>
    )
}

export default JobBoard
