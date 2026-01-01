"use client";
import { forwardRef, useEffect, useImperativeHandle } from "react";
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
import { isNil } from "@/lib/utils";
import { Details } from "../collapsible/Detial";
import { Textarea } from "@/components/ui/textarea";

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
  useEffect(() => {
    if (props.type === "create" && !isNil(props.setPedding))
      props.setPedding?.(form.formState.isSubmitting);
  }, [form.formState.isSubmitting]);
  useImperativeHandle(
    ref,
    () => ({
      create: form.handleSubmit(handleSubmit),
    }),
    [props.type]
  );
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          rules={{ required: "标题不能为空" }} // 👈 关键在这里！
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
        <Details summary="可选字段" defaultOpen>
          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>文章</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="请输入文章"
                    {...field}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </Details>
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>文章内容</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="请输入内容"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
            </FormItem>
          )}
        />
        {props.type === "update" && (
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "正在更新..." : "更新"}
          </Button>
        )}
      </form>
    </Form>
  );
});
PostActionForm.displayName = "PostActionForm";
