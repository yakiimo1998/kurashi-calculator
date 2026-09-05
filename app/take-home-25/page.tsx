import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "手取り25万円の一人暮らし｜家賃・生活費・貯金額の目安",
  description:
    "手取り25万円で一人暮らしをする場合の家賃・生活費・毎月残るお金・年間貯金額の目安を紹介。シミュレーターで自分の条件でも計算できます。",
};

export default function TakeHome25Page() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-6 inline-block text-sm text-blue-600 hover:underline"
        >
          ← トップに戻る
        </Link>

        <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-3 text-sm font-semibold text-blue-600">
            一人暮らしのお金
          </p>

          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            手取り25万円の一人暮らし｜家賃はいくら？生活費はいくら？
          </h1>

          <p className="mt-5 leading-7 text-gray-600">
            手取り25万円で一人暮らしをする場合、家賃や食費などの生活費は
            どれくらい必要なのでしょうか。ここでは、手取り25万円を前提に、
            家賃の目安や毎月の生活費、貯金できる金額をわかりやすく紹介します。
          </p>

          <h2 className="mt-10 text-2xl font-bold">
            手取り25万円なら家賃はいくら？
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            一般的には、手取り収入に対して家賃を25〜30％程度に抑えると、
            生活費とのバランスを取りやすいと言われています。
          </p>

          <div className="mt-5 rounded-2xl bg-blue-50 p-6 text-center">
            <p className="text-sm text-gray-600">
              手取り25万円の場合の家賃目安
            </p>

            <p className="mt-2 text-4xl font-bold text-blue-600">
              約6.3〜7.5万円
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold">
            手取り25万円の一人暮らしの生活費
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            生活スタイルによって大きく変わりますが、例えば次のような
            支出を想定できます。
          </p>

          <div className="mt-5 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3">項目</th>
                  <th className="px-4 py-3 text-right">目安</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">家賃</td>
                  <td className="px-4 py-3 text-right">7万円</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-3">食費</td>
                  <td className="px-4 py-3 text-right">3万円</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-3">水道光熱費</td>
                  <td className="px-4 py-3 text-right">1.5万円</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-3">通信費</td>
                  <td className="px-4 py-3 text-right">1万円</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-3">日用品</td>
                  <td className="px-4 py-3 text-right">1万円</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-3">交通費</td>
                  <td className="px-4 py-3 text-right">1万円</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-3">その他</td>
                  <td className="px-4 py-3 text-right">2万円</td>
                </tr>

                <tr className="border-t bg-gray-50 font-bold">
                  <td className="px-4 py-3">合計</td>
                  <td className="px-4 py-3 text-right">16.5万円</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-10 text-2xl font-bold">
            毎月いくら貯金できる？
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            上記の生活費を例にすると、手取り25万円から生活費16.5万円を
            引いた場合、毎月8.5万円が残ります。
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-6 text-center">
              <p className="text-sm text-gray-600">毎月残るお金</p>
              <p className="mt-2 text-3xl font-bold text-green-700">
                8.5万円
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-6 text-center">
              <p className="text-sm text-gray-600">年間で残るお金</p>
              <p className="mt-2 text-3xl font-bold text-green-700">
                102万円
              </p>
            </div>
          </div>

          <h2 className="mt-10 text-2xl font-bold">
            あなたの条件で計算してみる
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            家賃や食費などは人によって大きく異なります。
            自分の収入や生活費を入力して、毎月いくら残るのか計算してみましょう。
          </p>

          <Link
            href="/simulation"
            className="mt-6 block w-full rounded-xl bg-blue-600 px-4 py-4 text-center font-semibold text-white hover:bg-blue-700"
          >
            一人暮らしシミュレーターを使う
          </Link>
        </article>

        <p className="mt-6 text-xs leading-6 text-gray-500">
          ※掲載している金額はあくまで目安です。実際の生活費や貯金額は、
          地域・住居・ライフスタイルなどによって異なります。
        </p>
                <section className="mt-8 rounded-2xl bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-gray-900">
            自分の条件でも計算してみる
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            手取りや生活費は人によって異なります。自分の条件を入力して、家賃や毎月の貯金額を確認してみましょう。
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="/take-home"
              className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              手取り額を計算する
            </a>

            <a
              href="/rent"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
            >
              適正家賃を計算する
            </a>

            <a
              href="/simulation"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
            >
              一人暮らしをシミュレーションする
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}