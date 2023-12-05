import React from 'react';

function CourseItem({ courseCode, courseName, grade }) {
    return (
        <tr class="course">
           <th>{courseCode}</th>
           <th>{courseName}</th>
           <th>{grade}</th> 
        </tr>
    );
}

export default CourseItem;