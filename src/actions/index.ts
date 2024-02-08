'use server';

import {db} from '@/db';
import { redirect } from 'next/navigation';

export const editSnippet = async (id: number, code: string) => {
    await db.snippet.update({
        where: { id },
        data: { code }
    });

    redirect(`/snippets/${id}`);
}

export const deleteSnippet =  async (id: number) => {
    await db.snippet.delete({
        where: {id}
    });

    redirect('/')
}

export const createSnippet = async (formState: {message: string, codeMessage: string}, formData: FormData) => {
    const title = formData.get('title');
    const code = formData.get('code');

    if(typeof title !== 'string' || title.length < 3) {
        return {
            message: 'Title can not be empty'
        }
    }

    if(typeof code !== 'string' || code.length === 0) {
        return {
            message: 'You must enter snippet'
        }
    }


    throw new Error('custom error'); 


    await db.snippet.create({
        data: {
            title,
            code
        }
    });
    redirect('/')
}