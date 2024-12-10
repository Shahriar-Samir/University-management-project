import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .max(20, 'Password cannot be more than 20 characters')
      .optional(),
  }),
});

export default {
  createUserValidationSchema,
};
