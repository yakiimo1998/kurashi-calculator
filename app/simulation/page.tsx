"use client";

import { useState } from "react";

export default function SimulationPage() {
  const [income, setIncome] = useState("25");

  const [rent, setRent] = useState("7");
  const [food, setFood] = useState("3");
  const [utilities, setUtilities] = useState("1.5");
  const [communication, setCommunication] = useState("1");
  const [daily, setDaily] = useState("1");
  const [transport, setTransport] = useState("1");
  const [other, setOther] = useState("2");

  const [result, setResult] = useState<{
    total: number;
    remaining: number;
    annualSavings: number;
    savingsRate: number;
  } | null>(null);

  const calculate = () => {
    const monthlyIncome = Number(income);

    const total =
      Number(rent) +
      Number(food) +
      Number(utilities) +
      Number(communication) +
      Number(daily) +
      Number(transport) +
      Number(other);

    if (!monthlyIncome || monthlyIncome <= 0) {
      setResult(null);
      return;
    }

    const remaining = monthlyIncome - total;
    const annualSavings = remaining * 12;
    const savingsRate = (remaining / monthlyIncome) * 100;

    setResult({
      total,
      remaining,
      annualSavings,
      savingsRate,
    });
  };

  const InputRow = ({
    label,
    value,
    setValue,
  }: {
    label: string;
    value: string;
    setValue: (value: string) => void;
  }) => (
    <div className="mb-4">
      <label className="mb-2 block font-medium">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          step="0.1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3"
        />
        <span>万円</span>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <a
          href="/"
          className="mb-6 inline-block text-sm text-blue-600 hover:underline"
        >
          ← トップに戻る
        </a>

        <h1 className="mb-3 text-3xl font-bold">
          🏠 一人暮らしシミュレーター
        </h1>

        <p className="mb-8 text-gray-600">
          毎月の手取りと生活費から、毎月いくら残るか・年間でいくら貯められるかを計算します。
        </p>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold">収入</h2>

          <InputRow
            label="毎月の手取り"
            value={income}
            setValue={setIncome}
          />

          <h2 className="mb-5 mt-8 text-xl font-bold">毎月の生活費</h2>

          <InputRow label="家賃" value={rent} setValue={setRent} />

          <InputRow label="食費" value={food} setValue={setFood} />

          <InputRow
            label="水道光熱費"
            value={utilities}
            setValue={setUtilities}
          />

          <InputRow
            label="通信費"
            value={communication}
            setValue={setCommunication}
          />

          <InputRow label="日用品" value={daily} setValue={setDaily} />

          <InputRow
            label="交通費"
            value={transport}
            setValue={setTransport}
          />

          <InputRow label="その他" value={other} setValue={setOther} />

          <button
            onClick={calculate}
            className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
          >
            シミュレーションする
          </button>
        </section>

        {result && (
  <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
    <h2 className="mb-6 text-center text-2xl font-bold">
      📊 シミュレーション結果
    </h2>

    <div className="rounded-2xl bg-blue-50 p-6 text-center">
      <p className="text-sm font-medium text-gray-600">
        毎月残るお金
      </p>

      <p className="mt-2 text-4xl font-bold text-blue-600">
        {result.remaining.toFixed(1)}万円
      </p>

      <p className="mt-2 text-sm text-gray-600">
        手取り {income}万円 − 生活費 {result.total.toFixed(1)}万円
      </p>
    </div>

    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      <div className="rounded-xl bg-gray-100 p-4 text-center">
        <p className="text-sm text-gray-600">
          毎月の生活費
        </p>
        <p className="mt-1 text-xl font-bold">
          {result.total.toFixed(1)}万円
        </p>
      </div>

      <div className="rounded-xl bg-gray-100 p-4 text-center">
        <p className="text-sm text-gray-600">
          年間で貯められる金額
        </p>
        <p className="mt-1 text-xl font-bold">
          {result.annualSavings.toFixed(1)}万円
        </p>
      </div>

      <div className="rounded-xl bg-gray-100 p-4 text-center">
        <p className="text-sm text-gray-600">
          貯蓄率
        </p>
        <p className="mt-1 text-xl font-bold">
          {result.savingsRate.toFixed(1)}%
        </p>
      </div>
    </div>

    {result.remaining < 0 && (
      <div className="mt-6 rounded-xl bg-red-50 p-4 text-red-700">
        ⚠️ 生活費が手取りを上回っています。支出を見直してみましょう。
      </div>
    )}

    {result.remaining >= 0 && (
      <div className="mt-6 rounded-xl bg-green-50 p-4 text-green-700">
        👍 この条件なら、毎月およそ{" "}
        {result.remaining.toFixed(1)}万円を残せます。
      </div>
    )}
  </section>
)}

        <p className="mt-6 text-xs leading-6 text-gray-500">
          ※このシミュレーションは目安です。実際の生活費や貯蓄額は、地域・住居・ライフスタイルなどによって異なります。
        </p>
      </div>
    </main>
  );
}