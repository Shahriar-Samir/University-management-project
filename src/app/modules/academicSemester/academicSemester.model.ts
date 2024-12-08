import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    enum: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  endMonth: {
    type: String,
    enum: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
});

const AcademicSemesterModel = model<TAcademicSemester>(
  'Academic-Semester',
  academicSemesterSchema,
);

export default AcademicSemesterModel;
