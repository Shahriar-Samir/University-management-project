import { model, Schema } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const AcademicFacultyModel = model<TAcademicFaculty>(
  'Academic-Faculty',
  academicFacultySchema,
);

export default AcademicFacultyModel;
