import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "手取り40万円の一人暮らし｜家賃・生活費・貯金額の目安",
  description:
    "手取り40万円で一人暮らしをする場合の家賃・生活費・毎月残るお金・年間貯金額の目安を紹介。自分の条件で計算できるシミュレーターも紹介します。",
};

export default function TakeHome40Page() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-6 inline-block text-sm text-blue-600 hover:underline"
        >
          ← トップに戻る
        </Link>

        <article className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            手取り40万円の一人暮らし｜家賃・生活費・貯金額の目安
          </h1>

          <p className="mt-5 leading-7 text-gray-700">
            手取り40万円で一人暮らしをする場合、家賃はいくらまでにするとよいのでしょうか。
            ここでは、家賃・食費・水道光熱費・通信費などの生活費と、毎月どれくらいのお金を残せるかの目安を紹介します。
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              手取り40万円なら家賃はいくら？
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              一般的な目安として、家賃は手取り収入の25〜30%程度にすると、
              生活費とのバランスを取りやすいとされています。
            </p>

            <div className="mt-6 rounded-2xl bg-blue-50 p-6">
              <p className="font-bold text-gray-900">手取り40万円の場合</p>
              <p className="mt-2 text-2xl font-bold text-blue-600">
                家賃 約10〜12万円
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              ※実際に適正な家賃は、住んでいる地域、通勤費、車の有無、趣味や貯金額などによって変わります。
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              手取り40万円の一人暮らしの生活費例
            </h2>

            <div className="mt-5 overflow-hidden rounded-2xl border border-gray-300">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border-b border-gray-300 px-4 py-4 text-left">
                      項目
                    </th>
                    <th className="border-b border-gray-300 px-4 py-4 text-right">
                      月額
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-4">
                      家賃
                    </td>
                    <td className="border-b border-gray-200 px-4 py-4 text-right">
                      10万円
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-gray-200 px-4 py-4">
                      食費
                    </td>
                    <td className="border-b border-gray-200 px-4 py-4 text-right">
                      4万円
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-gray-200 px-4 py-4">
                      水道光熱費
                    </td>
                    <td className="border-b border-gray-200 px-4 py-4 text-right">
                      1.5万円
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-gray-200 px-4 py-4">
                      通信費
                    </td>
                    <td className="border-b border-gray-200 px-4 py-4 text-right">
                      1万円
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-gray-200 px-4 py-4">
                      日用品
                    </td>
                    <td className="border-b border-gray-200 px-4 py-4 text-right">
                      1万円
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-gray-200 px-4 py-4">
                      交通費
                    </td>
                    <td className="border-b border-gray-200 px-4 py-4 text-right">
                      1万円
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-4">その他</td>
                    <td className="px-4 py-4 text-right">3万円</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-10">
  <h2 className="text-2xl font-bold text-gray-900">
    毎月いくら貯金できる？
  </h2>

  <p className="mt-4 leading-7 text-gray-700">
    上記の生活費を例にすると、手取り40万円から生活費21.5万円を引いた場合、
    毎月18.5万円が残ります。
  </p>

  <div className="mt-5 grid gap-4 sm:grid-cols-2">
    <div className="rounded-2xl bg-green-50 p-6 text-center">
      <p className="text-sm text-gray-700">
        毎月残るお金
      </p>
      <p className="mt-2 text-3xl font-bold text-green-600">
        18.5万円
      </p>
    </div>

    <div className="rounded-2xl bg-green-50 p-6 text-center">
      <p className="text-sm text-gray-700">
        年間で残るお金
      </p>
      <p className="mt-2 text-3xl font-bold text-green-600">
        222万円
      </p>
    </div>
  </div>
</section>

<section className="mt-10">
  <h2 className="text-2xl font-bold text-gray-900">
    車を持つなら？
  </h2>

  <p className="mt-4 leading-7 text-gray-700">
    車を持つ場合は、ローンやガソリン代、駐車場代、保険、税金、
    車検・整備費などの費用も考えておく必要があります。
  </p>

  <div className="mt-5">
    <Link
      href="/car-cost"
      className="block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
    >
      <h3 className="text-xl font-bold text-gray-900">
        車の維持費を計算する
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        手取り額や車の購入価格などから、毎月・年間の車関連費用を計算できます。
      </p>

      <p className="mt-4 font-semibold text-blue-600">
        車の費用を計算する →
      </p>
    </Link>
  </div>
</section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              自分の条件で計算してみる
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              家賃や食費などは人によって大きく変わります。
              自分の収入や生活費を入力して、毎月いくら残るのか計算してみましょう。
            </p>

            <Link
              href="/simulation"
              className="mt-6 block rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              一人暮らしシミュレーターを使う
            </Link>
          </section>

          <p className="mt-8 text-xs leading-6 text-gray-500">
            ※掲載している金額はあくまで目安です。実際の生活費や貯金額は、地域・住居・ライフスタイルなどによって異なります。
          </p>

        </article>

        <footer className="mt-10 text-center text-sm text-gray-500">
          暮らしの計算機
        </footer>
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