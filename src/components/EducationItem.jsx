import React from "react";

function EducationItem() {
    return (
        <div>
            <div class="experienceItem">
                <h4 class="companyName">Bachelor's degree in Informatics: Computer Security @ University of Bergen</h4>
                <h6 class="underheadline">2021-2024</h6>
                <p class="jobDescription">
                This is an Informatics/Computer Science degree with a specialization in Cybersecurity. 
                With this degree, we are prepared to work in both development and cybersecurity-related matters, making it a versatile qualification.
                </p>
            </div>
            <div class="experienceItem">
                <h4 class="companyName">Master's degree in Informatics: Information Security @ University of Oslo</h4>
                <h6 class="underheadline">2024-2026</h6>
                <p class="jobDescription">
                    I am currently studying for the Master's degree in Information Security to further my knowledge in the cyber security field.
                </p>
            </div>
        </div>
    );
}

export default EducationItem;