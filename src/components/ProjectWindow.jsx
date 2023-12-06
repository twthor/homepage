import React, {useState} from "react";
import ProjectItem from "./ProjectItem";

function ProjectWindow() {
    const [show, setShow] = useState(false);
    return (
        <div align="center">
            <button class="subWindow" type="button" onClick={() => setShow(!show)}>Projects</button>
            {show && <ProjectItem />}
        </div>
    );
}

export default ProjectWindow;