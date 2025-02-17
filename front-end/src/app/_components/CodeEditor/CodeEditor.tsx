import {
    useState,
    useCallback
} from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';

export interface CodeEditorProps {
    initialContent: string
}

export default function CodeEditor({ initialContent, ...props }: CodeEditorProps) {
    const [value, setValue] = useState(initialContent);

    const onChange = useCallback((value: string) => {
        setValue(value);
    }, []);

    return <CodeMirror
        value={value}
        extensions={[java()]}
        onChange={onChange}
        {...props}
    />;
}