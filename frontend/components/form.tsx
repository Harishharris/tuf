'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useToast } from './ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { PlusCircle } from 'lucide-react';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  input: z.string(),
  language: z.string(),
  code: z.string().min(5),
});

export function FormPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      username: '',
      input: '',
      language: 'python',
      code: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { username, input, language, code } = values;
    if (!username || !input || !language || !code) {
      toast({
        title: 'Please fill in all the fields',
        variant: 'destructive',
      });
      return;
    }
    try {
      const response = await fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        toast({
          title: 'Code Created Successfully',
          description: 'You can now see your codes.',
        });
      }
    } catch (err) {
      console.log(err);
      toast({
        variant: 'destructive',
        title: 'Please try again.',
      });
      return;
    }
  }

  return (
    <Form {...form}>
      <form
        id="create"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Language</FormLabel>
              <FormControl>
                <RadioGroup
                  defaultValue="python"
                  onValueChange={field.onChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="python" id="python" />
                    <Label htmlFor="python">Python</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="c++" id="c++" />
                    <Label htmlFor="c++">C++</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="java" id="java" />
                    <Label htmlFor="java">Java</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="javascript" id="javascript" />
                    <Label htmlFor="javascript">JavaScript</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your code here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stdin</FormLabel>
              <FormControl>
                <Input placeholder="Stdin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create</Button>
      </form>
    </Form>
  );
}
