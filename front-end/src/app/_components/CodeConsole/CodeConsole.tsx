import { useState, useEffect } from 'react';

import { XTerm } from 'react-xtermjs';
import { FitAddon } from '@xterm/addon-fit';
import { ITerminalAddon } from '@xterm/xterm';

import './CodeConsole.css';

interface CodeConsoleProps {
    height: number;
}

export default function CodeConsole({ height, ...props }: CodeConsoleProps) {
    const [addons] = useState<ITerminalAddon[]>([new FitAddon()]);
    
    const fitAddon = addons[0] as FitAddon || undefined;

    const onData = (data: string) => {
        console.log(`Received data: ${data}`)
    }

    const onResize = ({ cols, rows }: { cols: number, rows: number}) => {
        console.log(`Terminal resized to ${cols} columns and ${rows} rows`)
    }

    useEffect(() => {
        fitAddon.fit();
    }, [height, fitAddon]);

    return (
        <XTerm
            listeners={{
                onData: onData,
                onResize: onResize
            }}
            addons={addons}
            options={{ cursorBlink: true }}
            style={{flex: 1, height: height}}
            {...props}
        />
    );
}