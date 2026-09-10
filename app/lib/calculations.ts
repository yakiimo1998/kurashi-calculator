export function amount(value: string, min = 0, max = 100000000): number | null {
  if (!value.trim()) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= min && parsed <= max ? parsed : null;
}
export function budget(income: number, expenses: number[]) {
  const totalYen = expenses.reduce((sum, item) => sum + Math.round(item * 10000), 0);
  const remainingYen = Math.round(income * 10000) - totalYen;
  return { total: totalYen / 10000, remaining: remainingYen / 10000,
    annual: remainingYen * 12 / 10000, rate: income > 0 ? remainingYen / (income * 10000) * 100 : 0 };
}
export function loanPayment(principal: number, annualRate: number, months: number) {
  if (principal === 0) return 0;
  if (months <= 0) return null;
  const rate = annualRate / 1200;
  return rate === 0 ? principal / months : principal * rate / -Math.expm1(-months * Math.log1p(rate));
}
export function electricityCost(power: number, hours: number, days: number, rate: number) {
  const kwh = power / 1000 * hours * days;
  return { kwh, monthly: kwh * rate, annual: kwh * rate * 12 };
}
