'use client';

import type { Snippet } from "@prisma/client";
import Editor from '@monaco-editor/react';
import { useState } from "react";
import { editSnippet } from '@/actions'

type SnippedEditFormProps = {
    snippet: Snippet
}

export default function SnipedEditForm({ snippet }: SnippedEditFormProps) {
    const [code, setCode] = useState(snippet.code);
    const handleChange = (value: string = "") => {
        setCode(value);
    }

    const saveEditAction = editSnippet.bind(null, snippet.id, code);
    return <div>
        <Editor
            height="40vh"
            theme="vs-dark"
            language="javascript"
            defaultValue={snippet.code}
            options={{ minimap: { enabled: false } }}
            onChange={handleChange}
        />
        <form action={saveEditAction} className="mt-4">
            <button type="submit" className="p-2 border rounded">Save change</button>
        </form>
    </div>
}