import { model, Schema } from 'mongoose';
import { TGurdian, TlocalGurdian, TStudentName } from './students.interface';
import { TStudent } from './students.interface';

const requiredMessage = (field: string) => `${field} is required`;

const studentNameSchema = new Schema<TStudentName>({
  firstName: {
    type: String,
    required: [true, requiredMessage('First Name')],
    maxLength: 20,
    trim: true,
    validate: {
      validator: function (value: string) {
        const firstNameStr = value
          .split('')
          .map((item: string, index: number) =>
            index === 0 ? item.toUpperCase() : item.toLowerCase(),
          )
          .join('');
        return firstNameStr === value;
      },
      message: '{VALUE} is not in capitalize format',
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, requiredMessage('Last Name')],
  },
});

const gurdianSchema = new Schema<TGurdian>({
  fatherName: {
    type: String,
    required: [true, requiredMessage('Father Name')],
  },
  motherName: {
    type: String,
    required: [true, requiredMessage('Mother Name')],
  },
  fatherContactNo: {
    type: String,
    required: [true, requiredMessage('Father Contact Number')],
  },
  fatherOccupation: {
    type: String,
    required: [true, requiredMessage('Father Occupation')],
  },
  motherContactNo: {
    type: String,
    required: [true, requiredMessage('Mother Contact Number')],
  },
  motherOccupation: {
    type: String,
    required: [true, requiredMessage('Mother Occupation')],
  },
});

const localGurdianSchema = new Schema<TlocalGurdian>({
  name: {
    type: String,
    required: [true, requiredMessage('Local Guardian Name')],
  },
  occupation: {
    type: String,
    required: [true, requiredMessage('Local Guardian Occupation')],
  },
  address: {
    type: String,
    required: [true, requiredMessage('Local Guardian Address')],
  },
  contactNo: {
    type: String,
    required: [true, requiredMessage('Local Guardian Contact Number')],
  },
});

const studentSchema = new Schema<TStudent>({
  id: {
    type: String,
    required: [true, requiredMessage('Student ID')],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User',
  },
  name: {
    type: studentNameSchema,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },

  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: "The gender field can only be 'male' or 'female', not {VALUE}",
    },
    required: [true, requiredMessage('Gender')],
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, requiredMessage('Email')],
    unique: true,
  },
  contactNo: {
    type: String,
    required: [true, requiredMessage('Contact Number')],
  },
  emergencyContactNo: {
    type: String,
    required: [true, requiredMessage('Emergency Contact Number')],
  },

  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester',
  },

  gurdian: {
    type: gurdianSchema,
    required: [true, requiredMessage('Guardian Information')],
  },

  localGurdian: {
    type: localGurdianSchema,
    required: [true, requiredMessage('Local Guardian Information')],
  },
});

export const StudentModel = model<TStudent>('student', studentSchema);
