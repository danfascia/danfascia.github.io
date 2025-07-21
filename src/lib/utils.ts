/**
 * Utility functions for the Astro site
 */

/**
 * Generate an excerpt from text with character limit and ellipsis truncation
 * @param text - The text to create an excerpt from
 * @param maxLength - Maximum character length (default: 150)
 * @returns Truncated text with ellipsis if needed
 */
export function generateExcerpt(text: string, maxLength: number = 150): string {
  if (!text) return '';
  
  // Remove any HTML tags if present
  const cleanText = text.replace(/<[^>]*>/g, '');
  
  if (cleanText.length <= maxLength) {
    return cleanText;
  }
  
  // Find the last space before the character limit to avoid cutting words
  const truncated = cleanText.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  // If we found a space, cut at that point, otherwise use the full truncated text
  const finalText = lastSpaceIndex > 0 ? truncated.substring(0, lastSpaceIndex) : truncated;
  
  return finalText + '…';
}

/**
 * Format a date string for display
 * @param dateString - ISO date string
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export function formatDate(
  dateString: string, 
  options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
): string {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  } catch (error) {
    console.error('Invalid date string:', dateString);
    return dateString;
  }
}

/**
 * Generate a URL slug from a title
 * @param title - The title to convert to a slug
 * @returns URL-safe slug
 */
export function generateSlug(title: string): string {
  if (!title) return '';
  
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}
