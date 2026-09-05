import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "一人暮らしの貯金額はいくら？毎月いくら貯めるべきか解説｜暮らしの計算機",
  description:
    "一人暮らしでは毎月いくら貯金すればいい？手取り別の貯金額の目安や、生活費とのバランス、無理なく貯金する方法を解説します。",
};

export default function SavingGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <article className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
          <h1 className="text-3xl font-bold text-gray-900">
            一人暮らしの貯金額はいくら？
          </h1>

          <p className="mt-4 leading-7 text-gray-700">
            一人暮らしでは、家賃や食費などの生活費だけでなく、
            将来のための貯金も考えておきたいところです。
            この記事では、毎月どのくらい貯金すればよいのか、
            手取り収入とのバランスを考えながら解説します。
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              毎月の貯金は手取りの10〜20％が目安
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              貯金額に決まった正解はありませんが、
              まずは毎月の手取り収入の10〜20％程度を
              貯金に回す方法があります。
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3">手取り月収</th>
                    <th className="px-4 py-3">10％</th>
                    <th className="px-4 py-3">20％</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3">20万円</td>
                    <td className="px-4 py-3">2万円</td>
                    <td className="px-4 py-3">4万円</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">25万円</td>
                    <td className="px-4 py-3">2.5万円</td>
                    <td className="px-4 py-3">5万円</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">30万円</td>
                    <td className="px-4 py-3">3万円</td>
                    <td className="px-4 py-3">6万円</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">35万円</td>
                    <td className="px-4 py-3">3.5万円</td>
                    <td className="px-4 py-3">7万円</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 leading-7 text-gray-700">
              例えば手取り25万円なら、月2.5〜5万円程度を
              貯金の目標にする方法があります。
              ただし、家賃や生活費が高い場合は、
              無理のない金額から始めることが大切です。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              まずは生活費を把握する
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              貯金額を決める前に、毎月いくら生活費がかかっているのかを
              把握しておきましょう。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              家賃、食費、水道光熱費、通信費、日用品、交通費などを
              合計すると、自分に必要な最低限の生活費が見えてきます。
            </p>

            <div className="mt-6 text-center">
              <Link
                href="/living-cost"
                className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
              >
                一人暮らしの生活費を計算する
              </Link>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              貯金しやすい家計を作るポイント
            </h2>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              1. 給料日に先取りする
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              給料が入ったら、使う前に決めた金額を貯金する方法です。
              残ったお金を貯金するよりも、毎月の貯金を習慣にしやすくなります。
            </p>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              2. 固定費を見直す
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              家賃、通信費、サブスクリプションなどの固定費は、
              一度見直すと毎月の支出を減らせる可能性があります。
            </p>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              3. 無理な節約をしない
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              貯金を優先するあまり、食費や必要な生活費まで
              極端に削る必要はありません。
              継続できる金額を目標にすることが大切です。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              手取り25万円なら年間いくら貯金できる？
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              例えば毎月3万円を貯金すると、1年間では36万円になります。
              毎月5万円なら年間60万円です。
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3">毎月の貯金</th>
                    <th className="px-4 py-3">1年間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3">2万円</td>
                    <td className="px-4 py-3">24万円</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">3万円</td>
                    <td className="px-4 py-3">36万円</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">5万円</td>
                    <td className="px-4 py-3">60万円</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">7万円</td>
                    <td className="px-4 py-3">84万円</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 leading-7 text-gray-700">
              実際にどれくらい貯金できるかは、手取り収入だけでなく
              家賃や生活費によって変わります。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              自分の条件でシミュレーションする
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              自分の手取り収入と生活費を入力すると、
              毎月いくら残るのか、年間でどのくらい貯金できるのかを
              確認できます。
            </p>

            <div className="mt-6 text-center">
              <Link
                href="/simulation"
                className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
              >
                一人暮らしをシミュレーションする
              </Link>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              まとめ
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              一人暮らしの貯金額は、手取り収入と生活費のバランスを
              考えて決めることが大切です。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              最初は手取りの10％程度から始め、
              家計に余裕が出てきたら貯金額を増やす方法もあります。
              大切なのは、無理なく継続できる金額を設定することです。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトの計算結果はあくまで目安です。
              実際の収入や支出に合わせて、自分に合った貯金額を考えてください。
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}