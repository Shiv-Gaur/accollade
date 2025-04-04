
/**
 * Combines class names into a single string
 * 
 * @param  {...string} classes - CSS class names
 * @returns {string} - Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formats a date as a string
 * 
 * @param {Date} date - The date to format
 * @param {string} format - The format to use
 * @returns {string} - The formatted date
 */
export function formatDate(date, format = 'PPP') {
  return new Date(date).toLocaleDateString();
}
