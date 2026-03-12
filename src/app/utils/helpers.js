/**
 * Convert a string to a URL-friendly slug
 * @param {string} text 
 * @returns {string}
 */
export const slugify = (text) => {
  return text.toLowerCase().trim().replace(/\s+/g, "-");
};

/**
 * Common theme management functions
 */
export const themeUtils = {
  setTheme: (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  },
  
  getTheme: () => {
    return localStorage.getItem("theme") || "dark";
  }
};
