import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "引っ越し費用はいくら？一人暮らしの料金相場と節約方法｜暮らしの計算機",
  description:
    "一人暮らしの引っ越し費用はいくら？引っ越し料金の目安、初期費用、繁忙期と通常期の違い、費用を抑える方法をわかりやすく解説します。",
};

export default function MovingCost() {
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
          引っ越し費用はいくら？
        </h1>

        <p className="mt-4 leading-7 text-gray-600">
          一人暮らしの引っ越しには、引っ越し業者への料金だけでなく、
          新居の初期費用や家具・家電の購入費なども必要になります。
          ここでは、引っ越しにかかる主な費用と節約方法をわかりやすく紹介します。
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            一人暮らしの引っ越し費用の目安
          </h2>

          <div className="mt-5 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    費用
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-900">
                    目安
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">引っ越し料金</td>
                  <td className="px-4 py-3">2〜8万円程度</td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">賃貸の初期費用</td>
                  <td className="px-4 py-3">家賃の4〜6か月分程度</td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">家具・家電</td>
                  <td className="px-4 py-3">5〜15万円程度</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            ※上記は一般的な目安です。荷物量、距離、時期、地域、物件条件などによって大きく変わります。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            引っ越し料金が高くなりやすい時期
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            引っ越し料金は時期によって変わります。
            特に春の引っ越しシーズンは需要が集中しやすいため、
            通常期より料金が高くなる場合があります。
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            日程に余裕がある場合は、複数の引っ越し業者から見積もりを取り、
            日程やサービス内容を比較すると費用を抑えやすくなります。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            引っ越し費用を抑える方法
          </h2>

          <ul className="mt-5 space-y-3 text-gray-600">
            <li>・複数の業者から見積もりを取る</li>
            <li>・不要な家具や家電を処分して荷物を減らす</li>
            <li>・繁忙期を避けられるか検討する</li>
            <li>・平日など比較的空いている日程を検討する</li>
            <li>・自分で運べる荷物は自分で運ぶ</li>
          </ul>
        </section>

        <section className="mt-10 rounded-2xl bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-gray-900">
            一人暮らしの生活費も確認する
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            引っ越し後は毎月の家賃や食費、光熱費、通信費なども必要です。
            自分の収入で無理なく生活できるか、事前に確認しておきましょう。
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/living-cost-guide"
              className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              一人暮らしの生活費を見る
            </Link>

            <Link
              href="/simulation"
              className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-600 hover:bg-blue-50"
            >
              一人暮らしをシミュレーションする
            </Link>
                    <section className="mt-8 rounded-2xl bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-gray-900">
            引っ越し後の生活費もチェック
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            引っ越し費用だけでなく、引っ越し後に毎月必要になる生活費や家賃も確認しておきましょう。
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="/living-cost"
              className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              一人暮らしの生活費を計算する
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
        </section>
                <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            引っ越し後のインターネットも検討
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            新居でインターネットを利用する場合は、引っ越し前に
            回線サービスを比較しておくとスムーズです。
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="https://px.a8.net/svt/ejp?a8mat=4BC4QP+5CX82+447K+BXIYP"
              rel="nofollow"
            >
              <img
                src="https://www29.a8.net/svt/bgt?aid=260906497009&wid=001&eno=01&mid=s00000019208002004000&mc=1"
                width="468"
                height="60"
                alt="@nifty光"
                className="h-auto max-w-full"
              />
            </a>
            <img
              src="https://www15.a8.net/0.gif?a8mat=4BC4QP+5CX82+447K+BXIYP"
              width="1"
              height="1"
              alt=""
            />
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            まとめ
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            一人暮らしの引っ越しでは、引っ越し料金だけでなく、
            賃貸物件の初期費用や家具・家電などにもお金がかかります。
            引っ越し前に必要な費用をまとめて確認し、
            無理のない予算を準備しておくことが大切です。
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            ※掲載している金額はあくまで目安です。
            実際の費用は利用するサービスや物件、時期などによって異なります。
          </p>
        </section>
      </article>
    </main>
  );
}