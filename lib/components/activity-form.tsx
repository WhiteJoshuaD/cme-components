import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import { useForm, useFieldArray, useFormContext } from "react-hook-form";
import useSWR from "swr";
import { z, type ZodTypeAny } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form as FormProvider,
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/helpers/utils";

const zodInputStringPipe = (zodPipe: ZodTypeAny) =>
  z
    .string()
    .transform((value) => (value === "" ? null : value))
    .nullable()
    .refine((value) => value === null || !isNaN(Number(value)), {
      message: "Invalid number",
    })
    .transform((value) => (value === null ? 0 : Number(value)))
    .pipe(zodPipe);

const formSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string().min(1, "Required"),
  location: z.string().optional(),
  credits: z
    .array(
      z.object({
        creditTypeId: zodInputStringPipe(z.number().positive("Required")),
        creditAmount: zodInputStringPipe(z.number().positive("Required")),
      })
    )
    .nonempty(),
});

export type ActivityFormValues = z.infer<typeof formSchema>;

type ActivityFormProps = {
  publishableKey: string;
  onSubmit: (values: ActivityFormValues) => void;
};

export function ActivityForm({ publishableKey, onSubmit }: ActivityFormProps) {
  const form = useForm<ActivityFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      credits: [
        {
          creditTypeId: "",
          creditAmount: "",
        },
      ],
    },
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <hr />

          <Credits publishableKey={publishableKey} />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}

function Credits({ publishableKey }: { publishableKey: string }) {
  const { creditTypes } = useCreditTypes({ publishableKey });
  const form = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: "credits",
  });

  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-end gap-4">
          <FormField
            control={form.control}
            name={`credits.${index}.creditTypeId`}
            render={({ field }) => (
              <FormItem className="relative flex-grow">
                <FormLabel className={cn(index !== 0 && "sr-only")}>
                  Credit Type
                </FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a credit type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {creditTypes?.map((creditType) => (
                      <SelectItem
                        key={creditType.id}
                        value={String(creditType.id)}
                      >
                        {creditType.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="absolute -translate-y-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`credits.${index}.creditAmount`}
            render={({ field }) => (
              <FormItem className="relative w-[150px]">
                <FormLabel className={cn(index !== 0 && "sr-only")}>
                  Amount
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="absolute -translate-y-1" />
              </FormItem>
            )}
          />
          <Button
            type="button"
            variant="outline"
            disabled={fields.length === 1}
            onClick={() => remove(index)}
          >
            <XIcon className="size-4" />
          </Button>
        </div>
      ))}
      <div className="flex justify-end mt-4">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ creditTypeId: "", creditAmount: "" })}
        >
          Add Credit Type
        </Button>
      </div>
    </div>
  );
}

//---

type CreditType = {
  id: number;
  name: string;
  description?: string;
};

async function fetchCreditTypes({
  publishableKey,
}: {
  publishableKey: string;
}): Promise<CreditType[]> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/credit-types`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${publishableKey}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();

  return data.data;
}

function useCreditTypes({ publishableKey }: { publishableKey: string }) {
  const { data, error, isLoading } = useSWR(["creditTypes"], () =>
    fetchCreditTypes({ publishableKey })
  );

  return {
    creditTypes: data,
    isLoading,
    isError: error,
  };
}
