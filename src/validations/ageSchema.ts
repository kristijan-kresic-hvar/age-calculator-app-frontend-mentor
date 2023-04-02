import {z} from 'zod';

const currentYear = new Date().getFullYear();

const ageSchema = z.object({
    day: z.preprocess(
        Number,
        z.number({
            invalid_type_error: 'Must be a number',
        }).min(1, {message: 'Must be a valid day'}).max(31, {message: 'Must be a valid day'}).optional()
            .refine((val) => Boolean(val), {
                message: 'Day is required',
            }),
    ),
    month: z.preprocess(
        Number,
        z.number({
            invalid_type_error: 'Must be a number',
        }).min(1, {message: 'Must be a valid month'}).max(12, {message: 'Must be a valid month'}).optional()
            .refine((val) => Boolean(val), {
                message: 'Month is required',
            }),
    ),
    year: z.preprocess(
        Number,
        z.number({
            invalid_type_error: 'Must be a number',
        }).min(1900, {message: 'Must be a valid year'}).optional()
            .refine((val) => Boolean(val), {
                message: 'Year is required',
            })
            .refine((val) => val && val < currentYear, {
                message: 'Must be in the past',
            })
    ),
});// extracting the type
type Age = z.infer<typeof ageSchema>;

export type {Age};
export default ageSchema;