import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import { AppError } from '../../errors/appError';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Academic-Faculty', // model name
    },
  },
  {
    timestamps: true,
  },
);

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await AcademicDepartmentModel.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new AppError(400, 'This department already exist!');
  }
  next();
});

academicDepartmentSchema.pre('updateOne', async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartmentModel.findOne(query);
  if (!isDepartmentExist) {
    throw new AppError(404, "This department doesn't exist!");
  }
  next();
});

const AcademicDepartmentModel = model(
  'Academic-Department',
  academicDepartmentSchema,
);

export default AcademicDepartmentModel;
