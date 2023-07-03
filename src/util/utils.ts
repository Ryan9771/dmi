/* Formats a given number to be 5 characters, accounting for decimal places */
export function formatNumber(input: string): string {
    let num = parseFloat(input);
    if (isNaN(num)) {
      return "0.000";
    }
    let result = (num.toFixed(3)).slice(0, 5);

    if (result.length === 5 && result.charAt(4) === '.') {
        return result.slice(0, 4);
    }

    return result
  }

/* Returns true if the given string is all digits or decimal */
export function allDigits(input: string): boolean {
    const pattern = /^[0-9.]+$/;
    return pattern.test(input);
}