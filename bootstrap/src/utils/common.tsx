export const debounce = (func: (...args: unknown[]) => void, delay: number) => {
  let timeoutId: number;
  return (...args: unknown[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func(...args), delay);
  };
};
