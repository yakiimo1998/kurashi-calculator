import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "電気代はいくら？一人暮らしの目安と計算方法を解説｜暮らしの計算機",
  description:
    "一人暮らしの電気代はいくら？電気代の計算方法、家電ごとの消費電力、電気代を節約する方法をわかりやすく解説します。",
};

export default function ElectricityGuide() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 md:p-10">
        <Link
          href="/"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          ← 暮らしの計算機トップへ
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
          電気代はいくら？一人暮らしの目安と計算方法
        </h1>

        <p className="mt-4 leading-7 text-gray-600">
          一人暮らしでは、家賃や食費だけでなく電気代も毎月かかります。
          ここでは、電気代の計算方法や、家電を使ったときの電気代の目安、
          電気代を抑えるためのポイントをわかりやすく紹介します。
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            電気代はどうやって計算する？
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            家電の電気代は、おおまかに
            「消費電力（kW）×使用時間（時間）×電気料金単価（円/kWh）」
            で計算できます。
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-5">
            <p className="font-semibold text-gray-900">
              例：1,000Wの家電を1日5時間使う場合
            </p>

            <p className="mt-3 leading-7 text-gray-600">
              1,000W = 1kWなので、
            </p>

            <p className="mt-2 leading-7 text-gray-600">
              1kW × 5時間 × 30日 × 31円
            </p>

            <p className="mt-2 font-bold text-gray-900">
              ＝ 4,650円／月
            </p>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            ※実際の電気料金は契約プランや料金単価などによって異なります。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            家電の消費電力と電気代
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            電気代は家電の消費電力だけでなく、使う時間によっても変わります。
            消費電力が大きい家電ほど、長時間使うと電気代も高くなります。
          </p>

          <div className="mt-5 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    家電の例
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    消費電力の例
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">LED照明</td>
                  <td className="px-4 py-3">数十W程度</td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">テレビ</td>
                  <td className="px-4 py-3">数十〜数百W程度</td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">電子レンジ</td>
                  <td className="px-4 py-3">数百〜1,000W以上</td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">エアコン</td>
                  <td className="px-4 py-3">使用状況によって大きく変動</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            ※消費電力は製品によって異なります。正確な数値は家電本体や取扱説明書などをご確認ください。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            電気代を節約する方法
          </h2>

          <ul className="mt-5 space-y-3 text-gray-600">
            <li>・使っていない照明や家電の電源を切る</li>
            <li>・エアコンの設定温度を極端にしない</li>
            <li>・冷蔵庫を開ける回数を減らす</li>
            <li>・古い家電を買い替える際は省エネ性能も確認する</li>
            <li>・契約している電気料金プランを定期的に確認する</li>
          </ul>
        </section>

        <section className="mt-10 rounded-2xl bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-gray-900">
            自分の電気代を計算してみる
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            家電の消費電力と使用時間がわかれば、
            月額・年間の電気代を簡単に計算できます。
          </p>

          <Link
            href="/electricity"
            className="mt-5 block rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            電気代を計算する →
          </Link>
        </section>

        <section className="mt-10 rounded-2xl bg-gray-50 p-6">
          <h2 className="text-xl font-bold text-gray-900">
            一人暮らしの生活費も確認
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            電気代だけでなく、家賃・食費・通信費などを含めて
            毎月の生活費を確認すると、家計の全体像を把握しやすくなります。
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/living-cost-guide"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
            >
              一人暮らしの生活費を見る
            </Link>

            <Link
              href="/simulation"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
            >
              一人暮らしをシミュレーションする
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            まとめ
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            電気代は、消費電力・使用時間・電気料金単価によって変わります。
            家電をどれくらい使っているのかを把握すると、
            電気代の見直しや節約につながります。
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            ※掲載している計算例や金額は目安です。
            実際の電気料金は契約内容や使用状況などによって異なります。
          </p>
        </section>
      </article>
    </main>
  );
}