import React from "react";
import Table from "components/Table";
import grades from "grades.json";

function CourseList() {
    const data = grades;
    return ( 
      <div className="container">
        <Table tableData={data} />
      </div>
    );
}

export default CourseList;