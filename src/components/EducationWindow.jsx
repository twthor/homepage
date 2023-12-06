import React, {useState} from "react";
import EducationItem from "./EducationItem";

function EducationWindow() {
    const [show, setShow] = useState(false);
    return (
        <div align="center">
            <button class="subWindow" type="button" onClick={() => setShow(!show)}>Education</button>
            {show && <EducationItem />}
        </div>
    );
}

export default EducationWindow;