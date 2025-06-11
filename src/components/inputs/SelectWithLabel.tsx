"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { statesArray } from "@/constants/statesArray";

type Props<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  className?: string;
};

export function SelectWithLabel<S>({
  fieldTitle,
  nameInSchema,
  className,
  ...props
}: Props<S>) {
  const form = useFormContext();

  const stateOptions = statesArray.map((state) => {
    return (
      <SelectItem key={state.id} value={state.id}>
        {state.description}
      </SelectItem>
    );
  });

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={nameInSchema}>{fieldTitle}</FormLabel>
          <FormControl>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="State" />
              </SelectTrigger>

              <SelectContent>{stateOptions}</SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
