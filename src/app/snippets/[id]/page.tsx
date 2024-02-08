import { db } from '@/db';
import { notFound } from 'next/navigation'
import Link from 'next/link';
import { deleteSnippet } from '@/actions'

type TSnippetProps = {
    params: {
        id: string
    }
}

export default async function SnippetShowPage(props: TSnippetProps) {

    const snippet = await db.snippet.findFirst({
        where: { id: Number.parseInt(props.params.id) }
    });
    if (!snippet) return notFound();
    return <div>
        <div className='flex m-4 justify-between items-center'>
            <h1 className='text-xl font-bold'> {snippet.title}</h1>
            <div className='flex gap-4'>
                <Link href={`/snippets/${props.params.id}/edit`} className='p-2 border rounded'>Edit</Link>
                <form action={deleteSnippet.bind(null, snippet.id)}>
                    <button className='p-2 border rounded'>Delite</button>
                </form>
            </div>
        </div>
        <pre className='p-3 border rounawait new Promise((r) => setTimeout(r, 23))
ded bg-gray-200 border-gray-200'>
            <code>{snippet.code}</code>
        </pre>
    </div>
}