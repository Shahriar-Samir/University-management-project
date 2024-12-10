import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});

const createAcademicFacultyValidation = z.object({
  body: z.object({
    name: z.string(),
  }),
});

const updateAcademicFacultyValidation = z.object({
  body: z.object({
    name: z.string(),
  }),
});

export default {
  academicFacultyValidationSchema,
  createAcademicFacultyValidation,
  updateAcademicFacultyValidation,
};
