export interface YieldsRecord {
  [key: string]: Array<YieldsComponent>;
}

export interface YieldsComponent {
  componentName?: string;
  data?: {[key: string]: number};
  yields?: YieldsRecord;
}