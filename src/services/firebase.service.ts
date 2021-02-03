import firebase from 'firebase/app';
import 'firebase/auth';
import FirebaseConstants from '../constants/firebase';
import SchoolYear from '../enums/school-grade.enum';
import { Student } from '../store/students/types';

export default class FirebaseService {
  private static instance: FirebaseService;

  private firebase: firebase.app.App;

  constructor() {
    this.firebase = firebase.initializeApp({
      apiKey: FirebaseConstants.API_KEY,
      authDomain: FirebaseConstants.AUTH_DOMAIN,
      projectId: FirebaseConstants.PROJECT_ID,
      storageBucket: FirebaseConstants.STORAGE_BUCKET,
      messagingSenderId: FirebaseConstants.MESSAGING_SENDER_ID,
      appId: FirebaseConstants.APP_ID,
    });
  }

  public static get Instance(): FirebaseService {
    const instance = this.instance || (this.instance = new this());

    return instance;
  }

  public async signInWithEmailAndPassword(email: string, password: string) {
    return this.firebase.auth().signInWithEmailAndPassword(email, password);
  }

  public async getAuthenticatedUserToken() {
    return this.firebase.auth().currentUser?.getIdToken();
  }

  public getStudents(): Student[] {
    return [{
      name: 'Leila',
      imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
      schoolYear: SchoolYear.SECOND,
    }, {
      name: 'Lourders',
      imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
      schoolYear: SchoolYear.FIRST,
    }, {
      name: 'Zé',
      imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
      schoolYear: SchoolYear.FIRST,
    }, {
      name: 'Francisco',
      imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
      schoolYear: SchoolYear.SECOND,
    }, {
      name: 'Maria',
      imageUrl: 'https://i.ibb.co/xHv9JY9/zig.png',
      schoolYear: SchoolYear.PRE,
    }];
  }
}
