import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import CodeSnippet from './code-snippet';

interface Item {
  _id: string;
  username: string;
  language: string;
  code: string;
  input: string;
  output: string;
}

async function getData() {
  try {
    console.log(process.env.SERVER_URL);
    const res = await fetch('https://tuf-0w06.onrender.com', {
      next: {
        revalidate: 0,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

export default async function CodeSnippetsTable() {
  const data = await getData();

  return (
    <Table>
      <TableCaption>A list of your recent code snippets.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Username</TableHead>
          <TableHead>Language</TableHead>
          <TableHead>Code</TableHead>
          <TableHead>Stdin</TableHead>
          <TableHead>Stdout</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: Item) => (
          <TableRow key={item._id}>
            <TableCell>{item.username}</TableCell>
            <TableCell>{item.language}</TableCell>
            <TableCell>
              <CodeSnippet code={item.code} />
            </TableCell>
            <TableCell>{item.input}</TableCell>
            <TableCell>
              <CodeSnippet code={item.output} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
