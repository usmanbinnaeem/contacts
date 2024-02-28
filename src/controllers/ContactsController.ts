import { Request, Response } from "express";
import Contact from "../models/Contact";
import { IContact } from "../types/contact";
import { constructFilterQuery, constructSearchQuery } from "../utils/search";

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, mobileNumber, tags, source, company, designation, website } =
      req.body;

    const newContact = new Contact({
      name,
      mobileNumber,
      tags,
      source,
      company,
      designation,
      website,
    });

    const result: IContact = await newContact.save();
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedContact: IContact | null = await Contact.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(updatedContact);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getContactById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contact: IContact | null = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getAllContacts = async (_req: Request, res: Response) => {
  try {
    const contacts: IContact[] = await Contact.find({});
    res.json(contacts);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const searchContacts = async (req: Request, res: Response) => {
  try {
    const query = constructSearchQuery(req);
    const contacts: IContact[] = await Contact.find(query);
    res.json(contacts);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const filterContacts = async (req: Request, res: Response) => {
  try {
    const query = constructFilterQuery(req);
    const contacts: IContact[] = await Contact.find(query);
    res.json(contacts);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedContact: IContact | null = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res
      .status(200)
      .json({ message: "Contact successfully deleted", deletedContact });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
