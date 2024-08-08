import React from "react";
import ExperienceItem from "./ExperienceItem";

function WorkExperience() {
    return (
        <div class="textbox">
            <ExperienceItem companyName={"Norwegian National Security Authority (NSM)"} dateRange={"April 2023 - present"} jobDescription={"I work in the SOC of NSM with incident response, network analysis and detection strategies."}/>
            <ExperienceItem companyName={"TV 2"} dateRange={"February 2021 - December 2023"} jobDescription={"I worked in Content Services (CS) which have responsibility to quality control and prepare television programs for linear TV and the streaming platform TV 2 Play. To ensure this, you need to have good control on logistics of text and content orders from many distributors, nationally and internationally. The job is both of editorial and technologial nature, where you work in complex digital tools. As a central function in TV 2's reception apparatus, it serves various 'customers' both with long and very short horizons in terms of delivery deadlines and tight deadlines."}/>
            <ExperienceItem companyName={"University of Bergen"} dateRange={"August 2022 - June 2023"} jobDescription={"I was a teaching assistant in the courses INF142 Computer networks and INF140 Introduction to Cyber Security. I held group sessions guiding and aiding students through the assignments and contents of the course. "} />
            <ExperienceItem companyName={"Norwegian Armed Forces"} dateRange={"January 2020 - January 2021"} jobDescription={"I served a year in the army as Military Police Soldier. I was responsible for the emergency vehicle."}/>
            <p class="jobDescription">And other less relevant work experiences which you can look at in my CV</p>
        </div>
    );
}

export default WorkExperience;