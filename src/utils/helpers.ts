import { format, parseISO } from "date-fns";

export const formatCurrency = (value:number) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'KES' }).format(
    value
  );

  export const formatDate = (dateStr:string) => format(parseISO(dateStr), 'dd MMM yyyy HH:mm');