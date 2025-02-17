'use client'

import { redirect, useParams } from "next/navigation";

// does not have a standalone UI
// redirects back to courses/[courseid]
export default function LessonsRedirect() {
    const { courseid } = useParams();
    redirect(`/courses/${courseid}`)
}