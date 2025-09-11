// lib/utils.ts

export const stripHtml = (htmlString: string) => {
  if (!htmlString) return '';
  // This regex finds and removes all HTML tags
  const strippedString = htmlString.replace(/<[^>]*>?/gm, '');
  return strippedString;
};