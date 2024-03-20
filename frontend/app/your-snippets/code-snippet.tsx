'use client';
import { useState } from 'react';

export default function CodeSnippet({ code }: { code: string }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {isOpened && code}
      {!isOpened && code.substring(0, 30)}
      {code.length > 30 && (
        <button onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? 'Show less' : 'Show More'}
        </button>
      )}
    </>
  );
}
