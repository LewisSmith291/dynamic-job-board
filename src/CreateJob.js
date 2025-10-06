import React from 'react'

const CreateJob = () => {
    const jobCount = 5;
    const countJob=() => {
        return jobCount === 0 ? "No jobs to schedule" : `${jobCount} Jobs to schedule`;
    }
  return (
    <div>
        <h1>Jobs: {countJob()}</h1>
        <p>Create a job</p>
    </div>
  )
}

export default CreateJob
