import { db } from '@/db';
import { notFound } from 'next/navigation';
import SnipedEditForm from '@/components/SnippedEditForm';
type SnipedEdit = {
    params: {
        id: string
    }
}

export default async function SnippetEditPage(props: SnipedEdit) {
    const id = Number.parseInt(props.params.id);

    const snippet = await db.snippet.findFirst({ where: { id } });
    if (!snippet) return notFound();


    return <div><SnipedEditForm snippet={snippet} /></div>
}