import React from "react";


function ExperienceItem({ companyName, dateRange, jobDescription }) {
    return (
        <div class="experienceItem">
            <p class="companyName">{companyName}</p>
            <p class="dateRange">{dateRange}</p>
            <p class="jobDescription">{jobDescription}</p>
        </div>
    );
}

export default ExperienceItem;