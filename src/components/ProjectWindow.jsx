import React, {useState} from "react";
import Projects from "./Project";

function ProjectWindow() {
    const [show, setShow] = useState(false);
    return (
        <div align="center">
            <button class="subWindow" type="button" onClick={() => setShow(!show)}>Projects</button>
            {show && <Projects />}
        </div>
    );
}

export default ProjectWindow;