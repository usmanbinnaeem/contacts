export interface IContact {
  name: string;
  mobileNumber: string;
  tags?: string[];
  source?: string;
  company?: string;
  designation?: string;
  website?: string;
}

export type QueryObject = {
  [key: string]: { $regex: RegExp } | { $in: RegExp[] };
};