import { randomBytes } from "crypto";

const customerprofiles = new Map();

export const save = ({
  firstname,
  lastname,
  username,
  email,
  phonenumber,
  password,
}) => {
  const customerprofile = {
    id: randomBytes(16).toString("hex"),
    firstname,
    lastname,
    username,
    email,
    phonenumber,
    password,
    postedDate: new Date(),
  };
  customerprofiles.set(customerprofile.id, customerprofile);
  return customerprofile;
};

//Get the mentioned customer details
export const get = (id) => {
  const customerprofile = customerprofiles.get(id);
  if (!customerprofile) {
    throw new Error(`Not found for the ID ${id}`);
  }
  return customerprofile;
};

//Get All the Customer Details
export const getAll = () => {
  return [...customerprofiles.values()];
};

//Update the Customer Details
export const update = (
  id,
  { firstname, lastname, username, email, phonenumber, password }
) => {
  if (!customerprofiles.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  const customerprofile = {
    id,
    firstname,
    lastname,
    username,
    email,
    phonenumber,
    password,
    postedDate: new Date(),
  };
  customerprofiles.set(customerprofile.id, customerprofile);
  return customerprofile;
};

//Delete the metioned customer details
export const deletePost = (id) => {
  if (!customerprofiles.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  customerprofiles.delete(id);
};
