import { z } from 'zod';

export const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    academicFaculty: z.string(),
  }),
});

export const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    academicFaculty: z.string().optional(),
  }),
});
