import { number, z } from "zod";

const ALLOW_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png"];

export const schemaSignIn = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(5, { message: "Pass such have min 5 char" }),
});

export const schemaSignUp = schemaSignIn.extend({
  name: z
  .string({ required_error: "Name is required" })
  .min(4, { message: "Name should have min 4 char" }), 
})

export const schemaCategory = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(4, { message: "Name should have min 4 char" }),
});

export const schemaBrand = schemaCategory.extend({
  image: z
    .any()
    .refine((file: File) => ALLOW_MIME_TYPES.includes(file.type), {
      message: "File is not valid",
    })
    .refine((file: File) => file?.name, { message: "Image is required" }),
});

export const schemaProduct = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(4, { message: "Name should have min 4 char" }),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, { message: "Description should have min 4 char" }),
  price: z.string({ required_error: "Price is required" }),
  stock: z.string({ required_error: "Stock is required" }),
  brand_id: z.string({ required_error: "Brand is required" }),
  category_id: z.string({ required_error: "Category is required" }),
  location_id: z.string({ required_error: "Location is required" }),
  images: z
    .any()
    .refine((files: File[]) => files.length === 3, {
      message: "Please upload 3 image product",
    })
    .refine(
      (files: File[]) => {
        let validate = false;

        Array.from(files).find((file) => {
          validate = ALLOW_MIME_TYPES.includes(file.type);
        });

        return validate;
      },
      {
        message: "Uploaded file should images",
      }
    ),
});

export const schemaProductEdit = schemaProduct.extend({
  id: z.number({ required_error: "Product id is required" }),
}).omit({images: true});

export const schemaShippingAddress = z.object({
  name: z.string({required_error: 'Name is required'}).min(5, {message: 'Name have should minimal 5 characters'}),
  address: z.string({required_error: 'Address is required'}).min(5, {message: 'Address have should minimal 5 characters'}),
  city: z.string({required_error: 'City is required'}).min(5, {message: 'City have should minimal 5 characters'}),
  postal_code: z.string({required_error: 'Postal Code is required'}).min(5, {message: 'Postal Code have should minimal 5 characters'}),
  notes: z.string().nullable(),
  phones: z.string({required_error: 'Phones is required'}).min(5, {message: 'Phones have should minimal 5 characters'}),
})