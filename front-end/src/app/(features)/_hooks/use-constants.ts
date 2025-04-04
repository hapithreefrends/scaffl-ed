import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";

import { IDifficulty } from "@/app/_models/_enums/difficulty";
import { IProgrammingLanguage } from "@/app/_models/_enums/programming-language";

const supabase = createClient();

export function useFindAllDifficulties() {
    return useQuery<IDifficulty[]>({
        queryKey: ["enumerations", "difficulties"],
        queryFn: async () => {
            const { data, error } = await supabase.from("Difficulty").select("*");

            if (error) {
                throw error;
            }

            return data;
        },
    });
}

export function useFindAllProgrammingLanguages() {
    return useQuery<IProgrammingLanguage[]>({
        queryKey: ["enumerations", "programming_languages"],
        queryFn: async () => {
            const { data, error } = await supabase.from("ProgrammingLanguage").select("*");

            if (error) {
                throw error;
            }

            return data;
        },
    });
}

export function useFindAllSexes() {
    return useQuery<IProgrammingLanguage[]>({
        queryKey: ["enumerations", "sexes"],
        queryFn: async () => {
            const { data, error } = await supabase.from("Sex").select("*");

            if (error) {
                throw error;
            }

            return data;
        },
    });
}

export function useFindAllDegreePrograms() {
    return useQuery<IProgrammingLanguage[]>({
        queryKey: ["enumerations", "degree_programs"],
        queryFn: async () => {
            const { data, error } = await supabase.from("DegreeProgram").select("*");

            if (error) {
                throw error;
            }

            return data;
        },
    });
}

export function useFindAllSchools() {
    return useQuery<IProgrammingLanguage[]>({
        queryKey: ["enumerations", "schools"],
        queryFn: async () => {
            const { data, error } = await supabase.from("School").select("*");

            if (error) {
                throw error;
            }

            return data;
        },
    });
}