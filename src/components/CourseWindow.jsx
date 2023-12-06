import React, { useState } from "react";
import CourseList from "./CourseList";

function CourseWindow() {
    const [show, setShow] = useState(false);
    return (
        <div align="center">
            <button class="subWindow" type="button" onClick={() => setShow(!show)}>Courses</button>
            {show && <CourseList />}
        </div>
    );
}

export default CourseWindow;