"use client";

/* 
* This page contains the home page for the course activity
* It contains problem title, problem description, and the prewritten buggy code in the code editor
* Prewritten code are segmented in AOI (Area of Interest) and the buggy code is in the AOI
* The user can edit the code in the AOI on a window below and run the code to see the output
*/

import classes from "./_styles/activity.module.css";
import CodeEditor from "./_components/code-editor";
import { useParams } from "next/navigation";

export default function Activity() {
  const { activitySlug } = useParams();

  return (    
    <div className={classes.activityContainer}>
      <div className={classes.sideWindow}>SIDE SCREEEN</div>
      <CodeEditor/>
      <div className={classes.sideWindow}>SIDE SCREEEN</div>
    </div>
  );
}
