import { Context } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { z } from 'zod';

export declare function AccmeAccreditationCriteriaList(): JSX_2.Element;

export declare function ActivitiesList(): JSX_2.Element;

export declare type Activity = {
    id: number;
    name: string;
};

export declare function ActivityForm({ onSubmit }: ActivityFormProps): JSX_2.Element;

declare type ActivityFormProps = {
    onSubmit: (values: ActivityFormValues) => void;
};

export declare type ActivityFormValues = z.infer<typeof formSchema>;

export declare const CmeComponentsContext: Context<CmeComponentsContextType>;

declare type CmeComponentsContextType = {
    apiKey: string;
} | undefined;

export declare function CmeComponentsProvider({ apiKey, children, }: {
    apiKey: string;
    children: React.ReactNode;
}): JSX_2.Element;

declare const formSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    location: z.ZodOptional<z.ZodString>;
    credits: z.ZodArray<z.ZodObject<{
        creditTypeId: z.ZodPipeline<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodEffects<z.ZodString, string | null, string>>, string | null, string | null>, number, string | null>, z.ZodTypeAny>;
        creditAmount: z.ZodPipeline<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodEffects<z.ZodString, string | null, string>>, string | null, string | null>, number, string | null>, z.ZodTypeAny>;
    }, "strip", z.ZodTypeAny, {
        creditTypeId?: any;
        creditAmount?: any;
    }, {
        creditTypeId: string | null;
        creditAmount: string | null;
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    credits: [{
        creditTypeId?: any;
        creditAmount?: any;
    }, ...{
        creditTypeId?: any;
        creditAmount?: any;
    }[]];
    location?: string | undefined;
}, {
    name: string;
    description: string;
    credits: [{
        creditTypeId: string | null;
        creditAmount: string | null;
    }, ...{
        creditTypeId: string | null;
        creditAmount: string | null;
    }[]];
    location?: string | undefined;
}>;

export declare function useActivities(): {
    activities: Activity[] | undefined;
    isLoading: boolean;
    isError: boolean;
};

export { }
