"use client"

import { redirect, useParams } from "next/navigation";

// does not have a standalone UI
// redirects back to courses/[courseId]
export default function ActivitiesRedirect() {
    const { courseId } = useParams();
    redirect(`/courses/${courseId}`)
}