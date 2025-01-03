import { z } from 'zod';

export const tableEntrySchema = z.object({
  id: z.number(),
  ref: z.string().min(3, 'A referência deve ter pelo menos 3 caracteres.'),
  description: z
    .string()
    .min(5, 'O nome do produto deve ter pelo menos 5 caracteres.'),
  quantity: z.number().min(1, 'A quantidade deve ser pelo menos 1.'),
  unitPrice: z.number().min(0, 'O preço não pode ser negativo.'),
});

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome deve ter pelo menos 2 caracteres.',
  }),
  storeId: z.string({
    required_error: 'Por favor selecione uma loja.',
  }),
  notes: z.string().optional(),
  orderNumber: z.coerce.number().min(4, {
    message: 'O número da encomenda deve ter pelo menos 4 caracteres.',
  }),
  date: z.date({
    required_error: 'A date of birth is required.',
  }),
  email: z.string().email().min(5, {
    message: 'O nome deve ter pelo menos 5 caracteres.',
  }),
  phoneNumber: z
    .string()
    .length(9, { message: 'O número deve ter 9 caracteres.' })
    .regex(/^\d+$/, { message: 'Apenas números são permitidos.' }),
  nif: z
    .string()
    .length(9, { message: 'O número de contribuinte tem 9 caracteres.' })
    .regex(/^\d+$/, { message: 'Apenas números são permitidos.' }),
  address1: z.string().min(5, {
    message: 'A morada deve ter pelo menos 5 caracteres.',
  }),
  address2: z.string().optional(),
  postalCode: z
    .string()
    .length(7, { message: 'O código postal deve ter 7 caracteres.' })
    .regex(/^\d+$/, { message: 'Apenas números são permitidos.' }),
  city: z.string().min(5, {
    message: 'A cidade deve ter pelo menos 5 caracteres.',
  }),
  elevator: z.boolean().default(false).optional(),
  tableEntries: z.array(tableEntrySchema),
});

export type TableEntry = z.infer<typeof tableEntrySchema>;
export type FormValues = z.infer<typeof formSchema>;
