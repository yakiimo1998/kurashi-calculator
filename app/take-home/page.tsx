"use client";

import { useState } from "react";

export default function TakeHomePage() {
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const annualSalary = Number(salary);

    if (!annualSalary || annualSalary <= 0) {
      setResult(null);
      return;
    }

    // 現在はMVP用の簡易計算です。
    // 実際の税金・社会保険料を正確に計算するロジックは後で作ります。
    const estimatedTakeHome = Math.round(annualSalary * 0.78);

    setResult(estimatedTakeHome);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <a
          href="/"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          ← トップページに戻る
        </a>

        <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <div className="text-4xl">💰</div>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            手取り計算機
          </h1>

          <p className="mt-3 text-gray-600">
            年収を入力すると、手取り額の目安を計算します。
          </p>

          <div className="mt-8">
            <label
              htmlFor="salary"
              className="block text-sm font-semibold text-gray-900"
            >
              年収
            </label>

            <div className="mt-2 flex items-center gap-3">
              <input
                id="salary"
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="500"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
              />

              <span className="whitespace-nowrap text-gray-700">万円</span>
            </div>
          </div>

          <button
            onClick={calculate}
            className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-4 font-bold text-white hover:bg-blue-700"
          >
            手取りを計算する
          </button>

          {result !== null && (
            <div className="mt-8 rounded-2xl bg-blue-50 p-6 text-center">
              <p className="text-sm font-semibold text-gray-600">
                推定手取り年収
              </p>

              <p className="mt-2 text-4xl font-bold text-gray-900">
                {result.toLocaleString()}万円
              </p>

              <p className="mt-3 text-sm text-gray-600">
                月あたり約 {(result / 12).toFixed(1)}万円
              </p>

              <p className="mt-4 text-xs text-gray-500">
                ※現在はMVP用の簡易計算です。実際の手取り額は税金・社会保険料・年齢・扶養状況などによって異なります。
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}