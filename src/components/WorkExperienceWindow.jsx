import React, {useState} from "react";
import WorkExperience from "./WorkExperience";

function WorkExperienceWindow() {
    const [show, setShow] = useState(false);
    return (
        <div align="center">
            <button class="subWindow" type="button" onClick={() => setShow(!show)}>Work Experience</button>
            {show && <WorkExperience />}
        </div>
        
    );
}

export default WorkExperienceWindow;