'use client'

import { Flex } from "@mantine/core";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";
import CourseCard from "./course-card";

// Fetches all courses along with related info
const fetchUntakenCourseListData = async () => {
    try {
        const supabase = createClient();

        const { data, error } = await supabase.from("Course").select(`
          *,
          ProgrammingLanguage (
            *
          ),
          Difficulty (
            *   
          )
        `);

        if (error) {
            console.error("Supabase fetch error:", error);
            throw new Error(error.message);
        }

        return data;
    } catch (err) {
        console.error("Fetch error:", err);
        throw err; // rethrow for React Query
    }
};

// Fetches the list of courses the user has already taken
const fetchTakenCourseListData = async () => {
    const supabase = createClient();

    const { data, error } = await supabase.from("UserCourse").select(`
        course_id
    `);  // Assuming this is already filtered by user_id in Supabase

    if (error) {
        console.error("Supabase fetch error:", error);
        throw new Error(error.message);
    }

    return data;
};

// Loader component
export default function UntakenCoursesListLoader() {
    // Fetch all courses and the courses the user has already taken
    const { data: allCourses, error: allCoursesError } = useSuspenseQuery({
        queryKey: ["all-courses"],
        queryFn: fetchUntakenCourseListData
    });

    const { data: takenCourses, error: takenCoursesError } = useSuspenseQuery({
        queryKey: ["taken-courses"],
        queryFn: fetchTakenCourseListData
    });

    // Handle any errors in fetching data
    if (allCoursesError || takenCoursesError) {
        console.error("Error fetching courses", allCoursesError, takenCoursesError);
        return <div>Error loading courses</div>;
    }

    // Ensure both data are available before trying to filter
    if (!allCourses || !takenCourses) {
        return <div>Loading...</div>;
    }

    // Filter out courses that the user has already taken
    const untakenCourses = allCourses.filter(course =>
        !takenCourses.some(takenCourse => takenCourse.course_id === course.id)
    );

    return (
        <Flex wrap="wrap" gap={32}>
            {untakenCourses.map((course) => (
                <CourseCard
                    key={course.id}
                    id={course.id}
                    picture={course.ProgrammingLanguage?.logo ?? "/fallback-logo.png"}
                    title={course.name}
                    description={`untaken: ${course.description}`}
                    level={course.Difficulty?.name ?? "Uncategorized"}
                    href={`courses/${course.id}`}
                />
            ))}
        </Flex>
    );
}
