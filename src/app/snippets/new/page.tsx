'use client'
import { useFormState } from 'react-dom';
import { createSnippet } from '@/actions'

const initSatate = {
    message: ''
}

export default function SnippetCreate() {

    const [formState, action] = useFormState(createSnippet, initSatate);


    return <form action={action}>
        <h3 className="font-bold m-3">Create Snippet</h3>
        <div className="flex flex-col gap-3">
            <div className="flex gap-4">
                <label className="w-12" htmlFor="title">Title</label>
                <input type="text" name="title" className="border rounded p-2 w-full" id='title' />
            </div>
            <div className="flex gap-4">
                <label className="w-12" htmlFor="code">Code</label>
                <textarea name="code" className="border rounded p-2 w-full" id='title' />
            </div>
            {formState.message && <p>{formState.message}</p>}
            <button type="submit" className="rounded p-2
             bg-blue-200">Create</button>
        </div>
    </form>
}