import { z } from "zod";

export const JobSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères").max(100, "Le titre est trop long"),

  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),

  type: z.enum(["CDD", "CDI", "Freelance", "Interim"], {
    errorMap: () => ({ message: "Veuillez choisir un type de mission valide" }),
  }),

  salary: z
    .number({
      invalid_type_error: "Le salaire doit être un nombre",
    })
    .positive("Le salaire doit être supérieur à 0"),

  start_date: z
    .string()

    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Veuillez entrer une date valide",
    }),

  skills: z
    .array(z.string().min(1, "Chaque compétence doit contenir au moins 1 caractère"))
    .min(1, "Veuillez ajouter au moins une compétence"),


  password: z
  .string()
  .min(4, "Le mot de passe doit contenir au moins 4 caractères")
  .max(50, "Le mot de passe est limité à 50 caractères"),
  
});


export const DeleteJobSchema = z.object({
  password: z
    .string()
    .min(1, "Le mot de passe est obligatoire")
    .max(50, "Le mot de passe est limité à 50 caractères"),
});