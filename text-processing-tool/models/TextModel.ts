export class TextModel {
  private rawText: string;

  constructor(text: string) {
    this.rawText = text;
  }

  public processText(): string {
    return this.rawText.replace(/\s+/g, ' ').trim();
  }

  public getRawText(): string {
    return this.rawText;
  }
}
