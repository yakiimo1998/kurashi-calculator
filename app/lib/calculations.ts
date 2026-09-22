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

// Amounts use 万円. Retain fractional monthly reserves so twelve months match the annual budget.
export function budgetPlan(income: number, expenses: number[], annualExpenses: number, savings: number) {
  const base = budget(income, expenses);
  const reserve = Math.round(annualExpenses * 10000) / 120000;
  const target = Math.round(savings * 10000) / 10000;
  return { ...base, reserve, monthlyCost: base.total + reserve,
    available: base.remaining - reserve, flexible: base.remaining - reserve - target,
    annualAvailable: base.annual - reserve * 12, savings: target };
}

export function savingsPlan(goal: number, current: number, monthly: number, months: number) {
  const remaining = Math.max(0, Math.round(goal * 10000) - Math.round(current * 10000));
  const contribution = Math.round(monthly * 10000);
  return { remaining: remaining / 10000, requiredMonthly: Math.ceil(remaining / months) / 10000,
    monthsNeeded: remaining === 0 ? 0 : contribution > 0 ? Math.ceil(remaining / contribution) : null,
    projected: (Math.round(current * 10000) + contribution * months) / 10000 };
}
