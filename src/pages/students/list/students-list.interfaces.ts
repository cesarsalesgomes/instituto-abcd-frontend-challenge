import SchoolYear from '../../../enums/school-grade.enum';
import { Student } from '../../../store/students/types';

export interface StudentsListBySchoolYear {
  schoolYear: SchoolYear,
  students: Student[]
}
