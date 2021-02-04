export default class StringUtils {
  static randomString(): string {
    return Math.random().toString(36).substring(7);
  }
}
