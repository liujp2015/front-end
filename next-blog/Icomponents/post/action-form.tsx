"use client";
import { forwardRef } from "react";
import { PostActionFormProps, PostCreateFormRef } from "./types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePostActionForm, usePostFormSubmitHandler } from "./hooks";

export const PostActionForm = forwardRef<
  PostCreateFormRef,
  PostActionFormProps
>((props, ref) => {
  const form = usePostActionForm(
    props.type === "create"
      ? { type: props.type }
      : { type: props.type, item: props.item }
  );
  const handleSubmit = usePostFormSubmitHandler(
    props.type === "create"
      ? { type: props.type }
      : { type: props.type, id: props.item.id }
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>文章标题</FormLabel>
              <FormControl>
                <Input placeholder="请输入标题" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
});
PostActionForm.displayName = "PostActionForm";
