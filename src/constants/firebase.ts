export default class FirebaseConstants {
  public static readonly API_KEY: string = process.env.REACT_APP_API_KEY as string;

  public static readonly AUTH_DOMAIN: string = process.env.REACT_APP_AUTH_DOMAIN as string;

  public static readonly PROJECT_ID: string = process.env.REACT_APP_PROJECT_ID as string;

  public static readonly STORAGE_BUCKET: string = process.env.REACT_APP_STORAGE_BUCKET as string;

  // eslint-disable-next-line max-len
  public static readonly MESSAGING_SENDER_ID: string = process.env.REACT_APP_MESSAGING_SENDER_ID as string;

  public static readonly APP_ID: string = process.env.REACT_APP_APP_ID as string;

  public static readonly STUDENTS_COLLECTION: string = 'students';

  public static readonly STORAGE_IMAGES_CHILD: string = 'images';
}
