import React from "react";
import CourseItem from "./Course";

function CourseList() {
    return ( <table>
        <tr>
          <th>Course code</th>
          <th>Course name</th>
          <th>Grade</th>
        </tr>
        <CourseItem
        courseCode='INF100'
        courseName='Introduction to programming (Python)'
        grade='A'
        />
        <CourseItem
          courseCode='INF140'
          courseName='Introduction to Cyber Security'
          grade='A'
        />
        <CourseItem
          courseCode='MAT101'
          courseName='Elementary calculus I'
          grade='Passed'
        />
        <CourseItem
          courseCode='INF101'
          courseName='Object oriented programming'
          grade='A'
        />
        <CourseItem
          courseCode='INF142'
          courseName='Computer networks'
          grade='A'
        />
        <CourseItem
          courseCode='MNF130'
          courseName='Discrete structures'
          grade='C'
        />
        <CourseItem
          courseCode='INF102'
          courseName='Algorithms, datastructures and programming'
          grade='B'
        />
        <CourseItem
          courseCode='INF113'
          courseName='Introduction to operating systems'
          grade='A'
        />
        <CourseItem
          courseCode='STAT110'
          courseName='Basic course in statistics'
          grade='C'
        />
        <CourseItem
          courseCode='INF115'
          courseName='Databases and modelling'
          grade='A'
        />
        <CourseItem
          courseCode='INF143A'
          courseName='Applied Cryptography'
          grade='A'
        />
        <CourseItem
          courseCode='MAT121'
          courseName='Linear Algebra'
          grade='B'
        />
        <CourseItem
          courseCode='INF214'
          courseName='Concurrent Programming'
          grade='Waiting for results..'
        />
        <CourseItem
          courseCode='INF226'
          courseName='Software Security'
          grade='Waiting for results..'
        />
        <CourseItem
          courseCode='EXPHIL-MN'
          courseName='Examen philosophicum'
          grade='Waiting for results..'
        />
        <CourseItem
          courseCode='INF249'
          courseName='Advance Cyber Security'
          grade='Spring 2024'
        />
        <CourseItem
          courseCode='INF112'
          courseName='Introduction to Systems Development'
          grade='Spring 2024'
        />
        <CourseItem
          courseCode='?'
          courseName='?'
          grade='Spring 2024'
        />
      </table>
    );
}

export default CourseList;