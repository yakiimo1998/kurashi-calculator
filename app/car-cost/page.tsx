"use client";

import { useState } from "react";

export default function CarCostPage() {
  const [takeHome, setTakeHome] = useState(250000);
  const [mileage, setMileage] = useState(500);
  const [fuelEfficiency, setFuelEfficiency] = useState(15);
  const [gasPrice, setGasPrice] = useState(170);
  const [parking, setParking] = useState(10000);
  const [insurance, setInsurance] = useState(5000);
  const [tax, setTax] = useState(4000);
  const [maintenance, setMaintenance] = useState(5000);
  const [carPrice, setCarPrice] = useState(3000000);
  const [downPayment, setDownPayment] = useState(0);
  const [loanYears, setLoanYears] = useState(5);
  const [loanRate, setLoanRate] = useState(2.5);
    const fuelCost = fuelEfficiency > 0
    ? (mileage / fuelEfficiency) * gasPrice
    : 0;
  const loanAmount = Math.max(carPrice - downPayment, 0);
  const monthlyRate = loanRate / 100 / 12;
  const loanMonths = loanYears * 12;

  const calculatedCarLoan =
    loanMonths > 0
      ? monthlyRate > 0
        ? (loanAmount * monthlyRate) /
          (1 - Math.pow(1 + monthlyRate, -loanMonths))
        : loanAmount / loanMonths
      : 0;

  const monthlyCost =
  fuelCost +
  parking +
  calculatedCarLoan +
  insurance +
  tax +
  maintenance;

  const yearlyCost = monthlyCost * 12;

    const costPercentage =
    takeHome > 0 ? (monthlyCost / takeHome) * 100 : 0;

  const remainingMoney = takeHome - monthlyCost;
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
  <a
    href="/"
    className="text-sm text-blue-600 hover:underline"
  >
    ← TOPページに戻る
  </a>
</div>


        <h1 className="text-3xl font-bold text-gray-900">
        車の費用計算機
        </h1>

        <p className="mt-4 leading-7 text-gray-700">
          車を持つと、ガソリン代や駐車場代だけでなく、
          自動車保険、税金、車検・整備費などの費用がかかります。
          毎月・年間でどのくらいのお金が必要になるのかを計算してみましょう。
        </p>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            車の費用を計算する
          </h2>

          <div className="mt-6 space-y-5">
            <div>
  <label className="block text-sm font-medium text-gray-700">
    手取り月収
  </label>
  <div className="mt-2 flex items-center gap-2">
    <input
      type="number"
      value={takeHome}
      onChange={(e) => setTakeHome(Number(e.target.value))}
      className="w-full rounded-lg border border-gray-300 px-4 py-3"
    />
    <span className="whitespace-nowrap text-gray-600">円/月</span>
  </div>
</div>
  <div>
    <label className="block text-sm font-medium text-gray-700">
      月間走行距離
    </label>
    <div className="mt-2 flex items-center gap-2">
      <input
  type="number"
  value={mileage}
  onChange={(e) => setMileage(Number(e.target.value))}
  className="w-full rounded-lg border border-gray-300 px-4 py-3"
/>
      <span className="whitespace-nowrap text-gray-600">km</span>
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700">
      燃費
    </label>
    <div className="mt-2 flex items-center gap-2">
      <input
  type="number"
  value={fuelEfficiency}
  onChange={(e) => setFuelEfficiency(Number(e.target.value))}
  className="w-full rounded-lg border border-gray-300 px-4 py-3"
/>
      <span className="whitespace-nowrap text-gray-600">km/L</span>
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700">
      ガソリン単価
    </label>
    <div className="mt-2 flex items-center gap-2">
      <input
  type="number"
  value={gasPrice}
  onChange={(e) => setGasPrice(Number(e.target.value))}
  className="w-full rounded-lg border border-gray-300 px-4 py-3"
/>
      <span className="whitespace-nowrap text-gray-600">円/L</span>
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700">
      駐車場代
    </label>
    <div className="mt-2 flex items-center gap-2">
      <input
  type="number"
  value={parking}
  onChange={(e) => setParking(Number(e.target.value))}
  className="w-full rounded-lg border border-gray-300 px-4 py-3"
/>
      <span className="whitespace-nowrap text-gray-600">円/月</span>
    </div>
  </div>

 <div>
  <label className="block text-sm font-medium text-gray-700">
    車の購入価格
  </label>
  <div className="mt-2 flex items-center gap-2">
    <input
      type="number"
      value={carPrice}
      onChange={(e) => setCarPrice(Number(e.target.value))}
      className="w-full rounded-lg border border-gray-300 px-4 py-3"
    />
    <span className="whitespace-nowrap text-gray-600">円</span>
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700">
    頭金
  </label>
  <div className="mt-2 flex items-center gap-2">
    <input
      type="number"
      value={downPayment}
      onChange={(e) => setDownPayment(Number(e.target.value))}
      className="w-full rounded-lg border border-gray-300 px-4 py-3"
    />
    <span className="whitespace-nowrap text-gray-600">円</span>
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700">
    ローン返済期間
  </label>
  <div className="mt-2 flex items-center gap-2">
    <input
      type="number"
      value={loanYears}
      onChange={(e) => setLoanYears(Number(e.target.value))}
      className="w-full rounded-lg border border-gray-300 px-4 py-3"
    />
    <span className="whitespace-nowrap text-gray-600">年</span>
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700">
    ローン金利
  </label>
  <div className="mt-2 flex items-center gap-2">
    <input
      type="number"
      step="0.1"
      value={loanRate}
      onChange={(e) => setLoanRate(Number(e.target.value))}
      className="w-full rounded-lg border border-gray-300 px-4 py-3"
    />
    <span className="whitespace-nowrap text-gray-600">%/年</span>
  </div>
</div>

  <div>
  <label className="block text-sm font-medium text-gray-700">
    自動車保険
  </label>

  <div className="mt-2 flex items-center gap-2">
    <input
      type="number"
      value={insurance}
      onChange={(e) => setInsurance(Math.ceil(Number(e.target.value) / 12))}
      className="w-full rounded-lg border border-gray-300 px-4 py-3"
    />
    <span className="whitespace-nowrap text-gray-600">円/月</span>
  </div>

  <div className="mt-2 flex items-center gap-2">
    <input
      type="number"
      value={insurance * 12}
      onChange={(e) => setInsurance(Number(e.target.value) / 12)}
      className="w-full rounded-lg border border-gray-300 px-4 py-3"
    />
    <span className="whitespace-nowrap text-gray-600">円/年</span>
  </div>
  </div>

  <div>
  <label className="block text-sm font-medium text-gray-700">
  自動車税・重量税など
</label>

<p className="mt-1 text-sm text-gray-500">
  自動車税、重量税などを含めた年間の金額
</p>

  <div className="mt-2 flex items-center gap-2">
    <input
      type="number"
      value={tax * 12}
      onChange={(e) => setTax(Number(e.target.value) / 12)}
      className="w-full rounded-lg border border-gray-300 px-4 py-3"
    />
    <span className="whitespace-nowrap text-gray-600">円/年</span>
  </div>

  <p className="mt-2 text-sm text-gray-500">
    月額換算：約{Math.round(tax).toLocaleString()}円/月
  </p>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700">
  車検・整備費
  </label>

<p className="mt-1 text-sm text-gray-500">
  車検、点検、オイル交換、消耗品などを含めた年間の金額
</p>

  <div className="mt-2 flex items-center gap-2">
    <input
      type="number"
      value={maintenance * 12}
      onChange={(e) => setMaintenance(Number(e.target.value) / 12)}
      className="w-full rounded-lg border border-gray-300 px-4 py-3"
    />
    <span className="whitespace-nowrap text-gray-600">円/年</span>
  </div>

  <p className="mt-2 text-sm text-gray-500">
    月額換算：約{Math.round(maintenance).toLocaleString()}円/月
  </p>
</div>

  
<div className="mt-8 grid gap-4 sm:grid-cols-2">
  <div className="rounded-2xl bg-green-50 p-6 text-center">
    <p className="text-sm text-gray-700">
      毎月の車関連費用
    </p>
    <p className="mt-2 text-3xl font-bold text-green-600">
      {Math.round(monthlyCost).toLocaleString()}円
    </p>
  </div>

  <div className="rounded-2xl bg-green-50 p-6 text-center">
    <p className="text-sm text-gray-700">
      年間の車関連費用
    </p>
    <p className="mt-2 text-3xl font-bold text-green-600">
      {Math.round(yearlyCost).toLocaleString()}円
    </p>
  </div>

  <div className="rounded-2xl bg-blue-50 p-6 text-center">
  <p className="text-sm text-gray-700">
    車のローン月額
  </p>
  <p className="mt-2 text-3xl font-bold text-blue-600">
    {Math.round(calculatedCarLoan).toLocaleString()}円
  </p>
  </div>

  <div className="rounded-2xl bg-gray-50 p-6 text-center">
  <p className="text-sm text-gray-700">
    ガソリン代
  </p>

  <p className="mt-2 text-2xl font-bold text-amber-900">
    {Math.round(fuelCost).toLocaleString()}円/月
  </p>

  <p className="mt-2 text-sm text-gray-600">
    年間 {Math.round(fuelCost * 12).toLocaleString()}円
  </p>
  </div>

  <div className="rounded-2xl bg-gray-50 p-6 text-center">
  <p className="text-sm text-gray-700">
    駐車場代
  </p>

  <p className="mt-2 text-2xl font-bold text-gray-900">
    年間 {Math.round(parking * 12).toLocaleString()}円
  </p>
  </div>

  <div className="rounded-2xl bg-blue-50 p-6 text-center">
    <p className="text-sm text-gray-700">
      手取りに占める車の費用割合
    </p>
    <p className="mt-2 text-3xl font-bold text-blue-600">
      {costPercentage.toFixed(1)}%
    </p>
  </div>

  <div className="rounded-2xl bg-blue-50 p-6 text-center">
    <p className="text-sm text-gray-700">
      車の費用を払った後に残るお金
    </p>
    <p className="mt-2 text-3xl font-bold text-blue-600">
      {Math.round(remainingMoney).toLocaleString()}円/月
    </p>
  </div>
</div>
</div>
        </section>
      </div>
    </main>
  );
}