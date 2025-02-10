import {
    useState,
    useCallback
} from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';


export interface CodeEditorProps {
    
}

export default function CodeEditor({...props}: CodeEditorProps) {
    const [value, setValue] = useState("console.log('hello world!');");

    const onChange = useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);

    return <CodeMirror 
        value={value} 
        height="200px" 
        extensions={[java()]} 
        onChange={onChange} 
    />;   
}