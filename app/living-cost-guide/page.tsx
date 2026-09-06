import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "一人暮らしの生活費はいくら？月額の目安と内訳を解説｜暮らしの計算機",
  description:
    "一人暮らしにかかる生活費の目安を家賃・食費・水道光熱費・通信費などの項目別に解説。自分の条件に合わせて毎月の生活費も計算できます。",
};

export default function LivingCostGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <article className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
          <h1 className="text-3xl font-bold text-gray-900">
            一人暮らしの生活費はいくら？
          </h1>

          <p className="mt-4 leading-7 text-gray-700">
            一人暮らしを始めると、家賃だけでなく食費、水道光熱費、
            通信費、日用品、交通費などさまざまな費用がかかります。
            ここでは、一人暮らしの生活費の目安を項目別に紹介します。
          </p>

          <section className="mt-8">
                       <h3 className="mt-8 text-xl font-bold text-gray-900">
              地域別の一人暮らし生活費の目安
            </h3>

            <p className="mt-4 leading-7 text-gray-700">
              一人暮らしにかかる生活費は、住む地域によっても変わります。
              特に家賃は地域差が大きいため、東京23区、大阪市、名古屋市では
              必要な生活費にも違いが出ます。
            </p>

            <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3">地域</th>
                    <th className="px-4 py-3">家賃</th>
                    <th className="px-4 py-3">食費</th>
                    <th className="px-4 py-3">水道光熱費</th>
                    <th className="px-4 py-3">通信費</th>
                    <th className="px-4 py-3">その他</th>
                    <th className="px-4 py-3">月額目安</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3">東京23区</td>
                    <td className="px-4 py-3">9〜11万円</td>
                    <td className="px-4 py-3">3〜4万円</td>
                    <td className="px-4 py-3">1〜1.5万円</td>
                    <td className="px-4 py-3">0.5〜1万円</td>
                    <td className="px-4 py-3">2〜3万円</td>
                    <td className="px-4 py-3 font-semibold">15.5〜20.5万円</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">大阪市</td>
                    <td className="px-4 py-3">5.5〜7万円</td>
                    <td className="px-4 py-3">3〜4万円</td>
                    <td className="px-4 py-3">1〜1.5万円</td>
                    <td className="px-4 py-3">0.5〜1万円</td>
                    <td className="px-4 py-3">2〜3万円</td>
                    <td className="px-4 py-3 font-semibold">12〜17万円</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">名古屋市</td>
                    <td className="px-4 py-3">5〜6.5万円</td>
                    <td className="px-4 py-3">3〜4万円</td>
                    <td className="px-4 py-3">1〜1.5万円</td>
                    <td className="px-4 py-3">0.5〜1万円</td>
                    <td className="px-4 py-3">2〜3万円</td>
                    <td className="px-4 py-3 font-semibold">11.5〜16.5万円</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              ※金額は一人暮らしを想定したおおよその目安です。住むエリア、
              部屋の広さ、生活スタイルなどによって実際の費用は異なります。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              ここに交際費、趣味、衣服、医療費、サブスクなどの費用が加わると、
              実際に必要な金額はさらに増えることがあります。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              家賃は手取りの25〜30％程度が目安
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              一人暮らしの家賃を考えるときは、毎月の手取り収入とのバランスが重要です。
              一般的な目安として、家賃を手取り収入の25〜30％程度に抑えると、
              食費や貯金などにお金を回しやすくなります。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              例えば手取り25万円の場合、家賃の目安は約6.3〜7.5万円です。
              ただし、勤務地や住みたい地域、通勤時間などによって
              適切な家賃は変わります。
            </p>

            <div className="mt-6 text-center">
              <Link
                href="/rent"
                className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
              >
                適正家賃を計算する
              </Link>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              食費を抑えるポイント
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              食費は一人暮らしの中でも調整しやすい項目です。
              外食やコンビニの利用が多いと食費が高くなりやすいため、
              自炊を取り入れることで支出を抑えられる場合があります。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              ただし、無理に食費を削りすぎると生活の満足度が下がることもあります。
              自炊と外食を組み合わせながら、自分に合った予算を決めることが大切です。
            </p>
          </section>
                    <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              一人暮らしの家電をレンタルする方法
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              一人暮らしを始めると、冷蔵庫や洗濯機などの家電をそろえるために
              初期費用がかかります。購入するだけでなく、家電をレンタルする方法もあります。
              初期費用を抑えたい場合は、選択肢のひとつとして検討してみてもよいでしょう。
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4BC4QP+2DR76+5MMG+5ZEMP"
                rel="nofollow"
              >
                <img
                  src="https://www27.a8.net/svt/bgt?aid=260906497004&wid=001&eno=01&mid=s00000026260001005000&mc=1"
                  width="300"
                  height="250"
                  alt="家電レンタルみんなのHappy"
                />
              </a>
              <img
                src="https://www14.a8.net/0.gif?a8mat=4BC4QP+2DR76+5MMG+5ZEMP"
                width="1"
                height="1"
                alt=""
              />
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              生活費を計算してみる
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              一人暮らしに必要な金額は、人によって大きく異なります。
              自分の家賃や食費などを入力して、毎月いくら必要になるのか
              確認してみましょう。
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
              手取り収入から貯金額まで確認する
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              生活費だけでなく、毎月いくら残るのか、年間でどのくらい
              貯金できるのかまで確認すると、より具体的な生活設計ができます。
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
              一人暮らしの生活費は、家賃、食費、水道光熱費、通信費などを
              合計して考える必要があります。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              まずは毎月の固定費を把握し、そのうえで食費や趣味などの
              変動する支出を考えると、自分に必要な生活費をイメージしやすくなります。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトの計算結果はあくまで目安です。
              実際の支出は地域や生活スタイルによって異なりますので、
              自分の状況に合わせて調整してください。
            </p>
          </section>
        </article>

      </div>
    </main>
  );
}