// Date formatter
export function formatDate(date: Date | string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}

// capitalize the first letter of a string and lowercase the rest
export function CapitalizeWords(str: string): string {
  if(typeof str !== 'string' || str.length === 0 ) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
