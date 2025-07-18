import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteNote } from '../../services/noteService.ts';
import type { Note } from '../../types/note.ts';
import css from './NoteList.module.css';

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: (noteId: number) => deleteNote(noteId),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });
  
  return (
    <ul className={css.list}>
      {notes.map(note => (
        <li className={css.listItem} key={note.id}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <button className={css.button} onClick={() => mutation.mutate(note.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
