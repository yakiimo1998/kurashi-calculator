"use client";

import { useState } from "react";

export default function LivingCostPage() {
  const [rent, setRent] = useState("7");
  const [food, setFood] = useState("3");
  const [utilities, setUtilities] = useState("1.5");
  const [communication, setCommunication] = useState("1");
  const [daily, setDaily] = useState("1");
  const [transport, setTransport] = useState("1");
  const [other, setOther] = useState("2");

  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const total =
      Number(rent) +
      Number(food) +
      Number(utilities) +
      Number(communication) +
      Number(daily) +
      Number(transport) +
      Number(other);

    setResult(total);
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
          <div className="text-4xl">🛋️</div>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            一人暮らし費用計算機
          </h1>

          <p className="mt-3 text-gray-600">
            一人暮らしに毎月いくら必要なのかを計算します。
          </p>

          <div className="mt-8 space-y-5">
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
          </div>

          <button
            onClick={calculate}
            className="mt-8 w-full rounded-xl bg-blue-600 px-4 py-4 font-bold text-white hover:bg-blue-700"
          >
            毎月の費用を計算する
          </button>

          {result !== null && (
            <div className="mt-8 rounded-2xl bg-blue-50 p-6 text-center">
              <p className="text-sm font-semibold text-gray-600">
                一人暮らしの月額費用
              </p>

              <p className="mt-2 text-4xl font-bold text-gray-900">
                約 {result.toFixed(1)}万円
              </p>

              <p className="mt-3 text-sm text-gray-600">
                入力した7項目の合計金額です。
              </p>

              <p className="mt-4 text-xs text-gray-500">
                ※実際の生活費は、住む地域や生活スタイルによって大きく変わります。
              </p>
            </div>
          )}
        </div>
                <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            生活費をもっと詳しくチェック
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            毎月の生活費がわかったら、電気代や貯金できる金額も確認してみましょう。
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="/electricity"
              className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              電気代を計算する
            </a>

            <a
              href="/simulation"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
            >
              一人暮らしをシミュレーションする
            </a>

            <a
              href="/saving-guide"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
            >
              一人暮らしの貯金額を読む
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function InputRow({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900">
        {label}
      </label>

      <div className="mt-2 flex items-center gap-3">
        <input
          type="number"
          step="0.1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
        />

        <span className="whitespace-nowrap text-gray-700">万円</span>
      </div>
    </div>
  );
}