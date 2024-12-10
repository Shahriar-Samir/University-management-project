import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterName,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: academicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      enum: academicSemesterMonth,
    },
  },
  {
    timestamps: true,
  },
);

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemesterModel.findOne({
    name: this.name,
    year: this.year,
  });
  if (isSemesterExists) throw new Error('Semester is already exist !');
  next();
});

const AcademicSemesterModel = model<TAcademicSemester>(
  'Academic-Semester',
  academicSemesterSchema,
);

export default AcademicSemesterModel;
