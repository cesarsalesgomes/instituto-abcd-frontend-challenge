/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
import SchoolYear from '../../../enums/school-grade.enum';
import { Student } from '../../../store/students/types';
import { StudentsListBySchoolYear } from './students-list.interfaces';

export default class StudentsListFactory {
  private static instance: StudentsListFactory;

  public static get Instance() {
    const instance = this.instance || (this.instance = new this());

    return instance;
  }

  createStudentsListBySchoolYearFromStudents(students: Student[]): StudentsListBySchoolYear[] {
    const studentsListBySchoolYear: StudentsListBySchoolYear[] = [];

    for (const student of students) {
      if (this.checkSchoolYearAlreadyCreatedOnList(student.schoolYear, studentsListBySchoolYear)) {
        this.addStudentOnSchoolYearList(student, studentsListBySchoolYear);
      } else {
        this.createFirstSchoolYearOnListWithStudent(student, studentsListBySchoolYear);
      }
    }

    return this.orderBySchoolYear(studentsListBySchoolYear);
  }

  checkSchoolYearAlreadyCreatedOnList(schoolYear: SchoolYear, studentsListBySchoolYear: StudentsListBySchoolYear[]): boolean {
    for (const { schoolYear: schoolYearCreated } of studentsListBySchoolYear) {
      if (schoolYear === schoolYearCreated) return true;
    }

    return false;
  }

  createFirstSchoolYearOnListWithStudent(
    student: Student, studentsListBySchoolYear: StudentsListBySchoolYear[],
  ): StudentsListBySchoolYear[] {
    studentsListBySchoolYear.push({
      schoolYear: student.schoolYear,
      students: [student],
    });

    return studentsListBySchoolYear;
  }

  addStudentOnSchoolYearList(
    student: Student, studentsListBySchoolYear: StudentsListBySchoolYear[],
  ): StudentsListBySchoolYear[] {
    for (const studentListBySchoolYear of studentsListBySchoolYear) {
      if (student.schoolYear === studentListBySchoolYear.schoolYear) {
        studentListBySchoolYear.students.push(student);
      }
    }

    return studentsListBySchoolYear;
  }

  orderBySchoolYear(studentsListBySchoolYear: StudentsListBySchoolYear[]): StudentsListBySchoolYear[] {
    return studentsListBySchoolYear.sort((a, b) => (a.schoolYear - b.schoolYear));
  }
}
