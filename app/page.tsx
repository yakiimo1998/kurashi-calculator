import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold text-blue-600">
            暮らしのお金をかんたん計算
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            🏠 暮らしの計算機
          </h1>

          <p className="mt-4 text-gray-600">
            「いくら必要？」「どれくらいが適正？」
            <br />
            暮らしに関するお金をかんたんに計算できます。
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="mb-4 text-4xl">💰</div>

            <h2 className="text-xl font-bold text-gray-900">
              手取り計算
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              月給や年収から、実際の手取り額の目安を計算します。
            </p>

            <Link
              href="/take-home"
              className="mt-6 block w-full rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              計算する
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="mb-4 text-4xl">🏠</div>

            <h2 className="text-xl font-bold text-gray-900">
              適正家賃計算
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              手取り収入から、無理のない家賃の目安を計算します。
            </p>

            <Link
              href="/rent"
              className="mt-6 block w-full rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              計算する
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="mb-4 text-4xl">🛋️</div>

            <h2 className="text-xl font-bold text-gray-900">
              一人暮らし費用
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              一人暮らしに必要な毎月の生活費を計算します。
            </p>

            <Link
              href="/living-cost"
              className="mt-6 block w-full rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              計算する
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="mb-4 text-4xl">📊</div>

            <h2 className="text-xl font-bold text-gray-900">
              一人暮らしシミュレーター
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              手取りと生活費から、毎月いくら残るかをシミュレーションします。
            </p>

            <Link
              href="/simulation"
              className="mt-6 block w-full rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              シミュレーションする
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="mb-4 text-4xl">💴</div>

            <h2 className="text-xl font-bold text-gray-900">
              手取り25万円の一人暮らし
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              手取り25万円なら家賃はいくら？生活費や貯金額の目安を紹介します。
            </p>

            <Link
              href="/take-home-25"
              className="mt-6 block w-full rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              詳しく見る
            </Link>
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            便利な生活費計算
          </h2>

          <p className="mt-3 text-gray-600">
            電気代など、毎日の暮らしにかかる費用もかんたんに計算できます。
          </p>

          <div className="mt-5">
            <Link
              href="/electricity"
              className="block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
            >
              <div className="text-4xl">💡</div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                電気代計算機
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                消費電力と使用時間から、1か月・1年間の電気代を計算します。
              </p>

              <p className="mt-4 font-semibold text-blue-600">
                電気代を計算する →
              </p>
            </Link>
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            手取り別の一人暮らし
          </h2>

          <p className="mt-3 text-gray-600">
            手取り額ごとの家賃・生活費・貯金額の目安を確認できます。
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              href="/take-home-20"
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50"
            >
              <p className="font-bold text-gray-900">手取り20万円</p>
              <p className="mt-2 text-sm text-gray-600">
                家賃・生活費・貯金額の目安
              </p>
            </Link>

            <Link
              href="/take-home-25"
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50"
            >
              <p className="font-bold text-gray-900">手取り25万円</p>
              <p className="mt-2 text-sm text-gray-600">
                家賃・生活費・貯金額の目安
              </p>
            </Link>

            <Link
              href="/take-home-30"
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50"
            >
              <p className="font-bold text-gray-900">手取り30万円</p>
              <p className="mt-2 text-sm text-gray-600">
                家賃・生活費・貯金額の目安
              </p>
            </Link>

            <Link
              href="/take-home-35"
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50"
            >
              <p className="font-bold text-gray-900">手取り35万円</p>
              <p className="mt-2 text-sm text-gray-600">
                家賃・生活費・貯金額の目安
              </p>
            </Link>

            <Link
              href="/take-home-40"
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50"
            >
              <p className="font-bold text-gray-900">手取り40万円</p>
              <p className="mt-2 text-sm text-gray-600">
                家賃・生活費・貯金額の目安
              </p>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/simulation"
              className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              自分の条件で一人暮らしを計算する
            </Link>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">
            暮らしのお役立ち記事
          </h2>

          <p className="mt-3 text-gray-600">
            一人暮らしのお金や生活費について、わかりやすく解説しています。
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              href="/living-cost-guide"
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50"
            >
              <p className="font-bold text-gray-900">
                一人暮らしの生活費はいくら？
              </p>
              <p className="mt-2 text-sm text-gray-600">
                家賃・食費・光熱費など、毎月の生活費の目安を解説
              </p>
            </Link>

            <Link
              href="/saving-guide"
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50"
            >
              <p className="font-bold text-gray-900">
                一人暮らしの貯金額はいくら？
              </p>
              <p className="mt-2 text-sm text-gray-600">
                毎月いくら貯金すればいい？貯金額の目安を解説
              </p>
            </Link>
          </div>
        </section>
        <footer className="mt-16 text-center text-sm text-gray-500">
          <div>暮らしの計算機</div>

          <div className="mt-2 flex justify-center gap-4">
            <Link
              href="/privacy"
              className="text-blue-600 hover:underline"
            >
              プライバシーポリシー
            </Link>

            <Link
              href="/contact"
              className="text-blue-600 hover:underline"
            >
              お問い合わせ
            </Link>
            <Link
  href="/terms"
  className="text-blue-600 hover:underline"
>
  利用規約・免責事項
</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}