"use client";

import { useState } from "react";
import Link from "next/link";

export default function Electricity() {
  const [power, setPower] = useState(1000);
  const [hours, setHours] = useState(5);
  const [days, setDays] = useState(30);
  const [rate, setRate] = useState(31);

  const monthlyKwh = (power / 1000) * hours * days;
  const monthlyCost = monthlyKwh * rate;
  const yearlyCost = monthlyCost * 12;

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          ← 暮らしの計算機トップへ
        </Link>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 md:p-10">
          <div className="text-4xl">💡</div>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            電気代計算機
          </h1>

          <p className="mt-4 leading-7 text-gray-600">
            家電の消費電力・1日の使用時間・使用日数から、
            1か月の電気代の目安を計算します。
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <label className="block font-semibold text-gray-900">
                消費電力（W）
              </label>
              <input
                type="number"
                min="0"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
              />
              <p className="mt-1 text-sm text-gray-500">
                例：1000Wの家電
              </p>
            </div>

            <div>
              <label className="block font-semibold text-gray-900">
                1日の使用時間（時間）
              </label>
              <input
                type="number"
                min="0"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-900">
                1か月の使用日数（日）
              </label>
              <input
                type="number"
                min="0"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-900">
                電気料金単価（円/kWh）
              </label>
              <input
                type="number"
                min="0"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
              />
              <p className="mt-1 text-sm text-gray-500">
                初期値は31円/kWhです。実際の料金単価は契約内容などによって異なります。
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-blue-600 p-6 text-white">
            <p className="text-sm font-semibold">1か月の電気代の目安</p>

            <p className="mt-2 text-4xl font-bold">
              {Math.round(monthlyCost).toLocaleString()}円
            </p>

            <p className="mt-4 text-sm">
              使用電力量：約{monthlyKwh.toFixed(1)} kWh / 月
            </p>

            <p className="mt-1 text-sm">
              年間：約{Math.round(yearlyCost).toLocaleString()}円
            </p>
          </div>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">
              電気代の計算方法
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              電気代は、おおまかに
              「消費電力（kW）×使用時間×電気料金単価」
              で計算できます。
            </p>

            <p className="mt-3 leading-7 text-gray-600">
              たとえば1,000Wの家電を1日5時間、30日使用し、
              電気料金単価を31円/kWhとすると、
              月額の電気代は約4,650円になります。
            </p>
          </section>

          <section className="mt-10 rounded-2xl bg-gray-50 p-6">
            <h2 className="text-xl font-bold text-gray-900">
              一人暮らしの生活費もチェック
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              電気代だけでなく、家賃・食費・通信費なども含めて
              毎月の生活費を確認すると、より正確な家計管理ができます。
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/living-cost"
                className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
              >
                一人暮らし費用を計算する
              </Link>

              <Link
                href="/simulation"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
              >
                一人暮らしをシミュレーションする
              </Link>
            </div>
          </section>

          <p className="mt-8 text-sm leading-6 text-gray-500">
            ※この計算結果は目安です。実際の電気料金は、契約プラン、
            燃料費調整額、再生可能エネルギー発電促進賦課金などによって異なります。
          </p>
        </div>
      </div>
    </main>
  );
}