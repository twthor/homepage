import React from "react";
import Table from "components/Table";
import bscCourses from "BscCourses.json";
import mscCourses from "MscCourses.json";

function CourseList() {
    const bsc_data = bscCourses;
    const msc_data = mscCourses;
    return ( 
      <div>
        <div className="container">
          <Table tableData={bsc_data} title={"Bachelor courses"} />
        </div>
        <div className="container">
          <Table tableData={msc_data} title={"Master courses"}/>
        </div>
      </div>
    );
}

export default CourseList;