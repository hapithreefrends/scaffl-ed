"use client";

/*
 * This page contains the home page for the course activity
 * It contains problem title, problem description, and the prewritten buggy code in the code editor
 * Prewritten code are segmented in AOI (Area of Interest) and the buggy code is in the AOI
 * The user can edit the code in the AOI on a window below and run the code to see the output
 */

import classes from "./_styles/activity.module.css";
import ProblemInfo from "./_components/problem-info";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const MonacoEditor = dynamic(() => import('./_components/code-editor'), {
  ssr: false, // Ensure it's only loaded on the client
});

export default function Activity() {
  const { activitySlug } = useParams();
  const hardCodedTitle = "Primitive Data Types";
  const hardCodedDescriptionHTML = `
  <p>Welcome to your first task on scaffl.ed! Imagine you’re building a friendly
  virtual assistant that will greet users with a personalized message. However,
  the code your friend gave you is full of tiny bugs! Your goal is to fix this
  code so it correctly asks for the user's name and greets them properly. By the
  end, your virtual assistant will be able to say hello to anyone who uses it,
  just as it was meant to! Help your virtual assistant come to life by fixing
  the errors in the code. After debugging, it should ask for the user's name and
  print a warm greeting like:</p>
  <code>Hello, [name]! Welcome to scaffl.ed.</code>
  `;

  return (
    <div className={classes.activityContainer}>
      <div className={`${classes.sideWindow} ${classes.window}`}>
        <ProblemInfo
          title={hardCodedTitle}
          description={hardCodedDescriptionHTML}
          xp={100}
        />
      </div>
      <MonacoEditor />
      <div className={`${classes.sideWindow} ${classes.window}`}>
        SIDE SCREEEN
      </div>
    </div>
  );
}
