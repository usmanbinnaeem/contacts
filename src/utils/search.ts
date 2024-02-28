import { Request } from "express";
import { QueryObject } from "../types/contact";

export const constructSearchQuery = (req: Request) => {
  const query: QueryObject = {};
  const { name, company, mobileNumber, designation, source, tag } = req.query;

  if (name) query.name = { $regex: new RegExp(name as string, "i") };
  if (company) query.company = { $regex: new RegExp(company as string, "i") };
  if (designation)
    query.designation = { $regex: new RegExp(designation as string, "i") };
  if (source) query.source = { $regex: new RegExp(source as string, "i") };
  if (mobileNumber)
    query.mobileNumber = { $regex: new RegExp(mobileNumber as string, "i") };

  if (tag) {
    if (Array.isArray(tag)) {
      query.tags = { $in: tag.map((t) => new RegExp(t as string, "i")) };
    } else {
      query.tags = { $regex: new RegExp(tag as string, "i") };
    }
  }

  return query;
};

export const constructFilterQuery = (req: Request) => {
  const query: QueryObject = {};
  
  Object.keys(req.query).forEach((key) => {
    const value = req.query[key];
    if (Array.isArray(value)) {
      query[key] = {
        $in: value.map((item) => new RegExp(item as string, "i")),
      };
    } else {
      query[key] = { $regex: new RegExp(value as string, "i") };
    }
  });
  return query;
};
