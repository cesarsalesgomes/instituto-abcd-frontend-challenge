/* eslint-disable import/no-duplicates */
import firebase from 'firebase/app';
import FirebaseConstants from '../constants/firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { Student } from '../store/students/list/types';

export default class FirebaseService {
  private static instance: FirebaseService;

  private firebase: firebase.app.App;

  private firestore: firebase.firestore.Firestore;

  constructor() {
    this.firebase = firebase.initializeApp({
      apiKey: FirebaseConstants.API_KEY,
      authDomain: FirebaseConstants.AUTH_DOMAIN,
      projectId: FirebaseConstants.PROJECT_ID,
      storageBucket: FirebaseConstants.STORAGE_BUCKET,
      messagingSenderId: FirebaseConstants.MESSAGING_SENDER_ID,
      appId: FirebaseConstants.APP_ID,
    });

    this.firestore = firebase.firestore();
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

  public async getStudents() {
    const students: Student[] = [];

    const documents = await this.firestore.collection(FirebaseConstants.STUDENTS_COLLECTION).get();

    documents.forEach((doc) => students.push(doc.data() as Student));

    return students;
  }

  public async createStudent(student: Student) {
    return this.firestore.collection(FirebaseConstants.STUDENTS_COLLECTION).add(student);
  }
}
