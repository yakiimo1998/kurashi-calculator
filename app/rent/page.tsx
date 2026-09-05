"use client";

import { useState } from "react";

export default function RentPage() {
  const [income, setIncome] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const monthlyIncome = Number(income);

    if (!monthlyIncome || monthlyIncome <= 0) {
      setResult(null);
      return;
    }

    // 手取り月収の25〜30%を家賃の目安とします
    const recommendedRent = Math.round(monthlyIncome * 0.28 * 10) / 10;

    setResult(recommendedRent);
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
          <div className="text-4xl">🏠</div>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            適正家賃計算機
          </h1>

          <p className="mt-3 text-gray-600">
            月の手取り額から、無理のない家賃の目安を計算します。
          </p>

          <div className="mt-8">
            <label
              htmlFor="income"
              className="block text-sm font-semibold text-gray-900"
            >
              月の手取り
            </label>

            <div className="mt-2 flex items-center gap-3">
              <input
                id="income"
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="30"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
              />

              <span className="whitespace-nowrap text-gray-700">万円</span>
            </div>
          </div>

          <button
            onClick={calculate}
            className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-4 font-bold text-white hover:bg-blue-700"
          >
            適正家賃を計算する
          </button>

          {result !== null && (
            <div className="mt-8 rounded-2xl bg-blue-50 p-6 text-center">
              <p className="text-sm font-semibold text-gray-600">
                おすすめ家賃の目安
              </p>

              <p className="mt-2 text-4xl font-bold text-gray-900">
                約 {result.toFixed(1)}万円
              </p>

              <p className="mt-3 text-sm text-gray-600">
                月の手取りの約28%を目安にしています。
              </p>

              <p className="mt-4 text-xs text-gray-500">
                ※これは一般的な目安です。地域の家賃相場や生活費、貯金額などによって適正な家賃は変わります。
              </p>
            </div>
          )}
        </div>
                <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            一人暮らしのお金もチェック
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            家賃の目安がわかったら、生活費や貯金額も確認してみましょう。
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="/living-cost"
              className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              一人暮らしの生活費を計算する
            </a>

            <a
              href="/simulation"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
            >
              一人暮らしをシミュレーションする
            </a>

            <a
              href="/take-home"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
            >
              手取り額を計算する
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}