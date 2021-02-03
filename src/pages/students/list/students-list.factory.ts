import SchoolYear from '../../../enums/school-grade.enum';
import { StudentsListBySchoolYear } from './students-list.interfaces';

export default class StudentsListFactory {
  private static instance: StudentsListFactory;

  public static get Instance() {
    const instance = this.instance || (this.instance = new this());

    return instance;
  }

  createStudentsListBySchoolYearFromStudents(): StudentsListBySchoolYear[] {
    return [
      {
        schoolYear: SchoolYear.FIRST,
        students: [{
          name: 'Lourders',
          imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
          schoolYear: SchoolYear.FIRST,
        }, {
          name: 'Francisco',
          imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
          schoolYear: SchoolYear.SECOND,
        }, {
          name: 'Francisco',
          imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
          schoolYear: SchoolYear.PRE,
        }],
      }, {
        schoolYear: SchoolYear.SECOND,
        students: [{
          name: 'Lourders',
          imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
          schoolYear: SchoolYear.FIRST,
        }, {
          name: 'Francisco',
          imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
          schoolYear: SchoolYear.SECOND,
        }, {
          name: 'Francisco',
          imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
          schoolYear: SchoolYear.PRE,
        }],
      }, {
        schoolYear: SchoolYear.THIRD,
        students: [{
          name: 'Lourders',
          imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
          schoolYear: SchoolYear.FIRST,
        }, {
          name: 'Francisco',
          imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
          schoolYear: SchoolYear.SECOND,
        }, {
          name: 'Francisco',
          imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
          schoolYear: SchoolYear.PRE,
        }],
      },
    ];
  }
}
