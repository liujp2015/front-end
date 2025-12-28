export type IPaginateQueryProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends Record<string, any> = Record<never, never>
> = {
  page?: number;
  limit?: number;
} & T;
