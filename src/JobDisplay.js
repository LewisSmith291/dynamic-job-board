import './App.css';
import React from 'react'

const JobDisplay = (jobCount) => {
  const PlaceJobs = () => {
    const jobs = Array.from({length:jobCount},(_, index) => {
      return <Job key={index} />;
    })


    return (
      <div>
        {jobs}
      </div>
    );
  }

  return (
    <div id="job-container">
      {PlaceJobs()}
    </div>
  );
}

const RandomTask = () => {
  const tasks = ["Do this thing", "Do that thing", "Do something else", 
    "Do this other thing", "Do that other thing"];
  const index = Math.floor(Math.random() * tasks.length);
  return tasks[index];
}

const RandomDate = () => {
  const newDate = new Date();
  
  let year = newDate.getFullYear();
  let month = newDate.getMonth();
  let day = newDate.getDate();

  const dayAddition = Math.floor(Math.random() * 7);
  day += dayAddition;

  const dateOut = new Date(year, month, day);

  return "" + dateOut.toLocaleDateString();
}

function Job(){
  return (
  <div className="job">
    <div className="job-component task">{RandomTask()}</div>
    <div className="job-component due-date">{RandomDate()}</div>
  </div>
)
}

export default JobDisplay
