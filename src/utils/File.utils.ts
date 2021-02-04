export default class FileUtils {
  static createObjectUrl(file: File): string {
    return URL.createObjectURL(file);
  }
}
