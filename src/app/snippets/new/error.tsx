'use client';
import { redirect } from 'next/navigation';
import Link from 'next/link'

type CreateSnippetError = {
    error: Error,
    reset: () => void;
}

export default function CreateError({ error }: CreateSnippetError) {
    return <div>
        <h1>
            {error.message}
        </h1>
        <Link href='/'>To home page</Link>

    </div>
}