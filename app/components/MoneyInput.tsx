"use client";
import { useId } from "react";
export default function MoneyInput({ label, value, onChange, unit = "万円", min = 0, max = 10000, step = "any", hint }: {
  label: string; value: string; onChange: (value: string) => void; unit?: string;
  min?: number; max?: number; step?: string; hint?: string;
}) {
  const id = useId();
  const invalid = !value.trim() || !Number.isFinite(Number(value)) || Number(value) < min || Number(value) > max;
  return <div className="money-field">
    <label htmlFor={id}>{label}</label><div className="money-control">
      <input id={id} type="number" inputMode="decimal" min={min} max={max} step={step} value={value}
        onChange={event => onChange(event.target.value)} aria-invalid={invalid} aria-describedby={invalid || hint ? `${id}-hint` : undefined} />
      <span>{unit}</span></div>
    {(invalid || hint) && <p id={`${id}-hint`} className={invalid ? "field-error" : "field-hint"}>{invalid ? `${min.toLocaleString()}〜${max.toLocaleString()}の数値を入力してください。` : hint}</p>}
  </div>;
}
