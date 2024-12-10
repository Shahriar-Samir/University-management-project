import { z } from 'zod';

// Helper function for required message
const requiredMessage = (field: string) => `${field} is required`;

// Zod schema for Student Name
const studentNameSchema = z.object({
  firstName: z
    .string()
    .max(20, 'First Name must be at most 20 characters long')
    .nonempty(requiredMessage('First Name'))
    .refine(
      (value) =>
        value ===
        value
          .split('')
          .map((char, index) =>
            index === 0 ? char.toUpperCase() : char.toLowerCase(),
          )
          .join(''),
      { message: 'First Name must be in capitalize format' },
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .nonempty(requiredMessage('Last Name'))
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'Last Name must contain only letters',
    }),
});

// Zod schema for Guardian
const gurdianSchema = z.object({
  fatherName: z.string().nonempty(requiredMessage('Father Name')),
  motherName: z.string().nonempty(requiredMessage('Mother Name')),
  fatherContactNo: z
    .string()
    .nonempty(requiredMessage('Father Contact Number')),
  fatherOccupation: z.string().nonempty(requiredMessage('Father Occupation')),
  motherContactNo: z
    .string()
    .nonempty(requiredMessage('Mother Contact Number')),
  motherOccupation: z.string().nonempty(requiredMessage('Mother Occupation')),
});

// Zod schema for Local Guardian
const localGurdianSchema = z.object({
  name: z.string().nonempty(requiredMessage('Local Guardian Name')),
  occupation: z.string().nonempty(requiredMessage('Local Guardian Occupation')),
  address: z.string().nonempty(requiredMessage('Local Guardian Address')),
  contactNo: z
    .string()
    .nonempty(requiredMessage('Local Guardian Contact Number')),
});

// Zod schema for Student
const studentValidationSchema = z.object({
  id: z.string().nonempty(requiredMessage('Student ID')),
  password: z.string().max(20),
  name: studentNameSchema,
  permanentAddress: z.string().nonempty(requiredMessage('Permanent Address')),
  presentAddress: z.string().nonempty(requiredMessage('Present Address')),
  profileImg: z.string().optional(),
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({
      message: "The gender field can only be 'male' or 'female'",
    }),
  }),
  dataOfBirth: z.string().optional(),
  email: z
    .string()
    .nonempty(requiredMessage('Email'))
    .email('Email is not valid'),
  contactNo: z.string().nonempty(requiredMessage('Contact Number')),
  emergencyContactNo: z
    .string()
    .nonempty(requiredMessage('Emergency Contact Number')),
  bloodGroup: z
    .enum(['A', 'A+', 'B', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'])
    .optional(),
  avatar: z.string().nonempty(requiredMessage('Avatar')),
  gurdian: gurdianSchema,
  isActive: z.enum(['active', 'blocked']).default('active'),
  localGurdian: localGurdianSchema,
  admissionSemester: z.string(),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
