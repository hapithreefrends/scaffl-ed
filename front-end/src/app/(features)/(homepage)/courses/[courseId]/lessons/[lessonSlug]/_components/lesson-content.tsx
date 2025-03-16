import { TypographyStylesProvider } from '@mantine/core';
import LessonHeader from './lesson-header';

interface LessonContentProps {
    name: string;
    description: string;
    htmlContent: string;
}

export default function LessonContent({
    name,
    description,
    htmlContent
}: LessonContentProps) {
    return (
        <>
            <LessonHeader name={name} description={description} />
            <TypographyStylesProvider>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </TypographyStylesProvider>
        </>
    );
}