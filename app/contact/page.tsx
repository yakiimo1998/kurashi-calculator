import Link from "next/link";

export default function ContactPage() {
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
          <h1 className="text-3xl font-bold text-gray-900">
            お問い合わせ
          </h1>

          <p className="mt-6 leading-7 text-gray-700">
            暮らしの計算機へのお問い合わせは、以下の内容をご確認のうえ、
            ご連絡ください。
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              お問い合わせについて
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              サイトに関するご質問、ご意見、不具合のご報告などがございましたら、
              お問い合わせください。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Xでお問い合わせ
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              お問い合わせは、X（旧Twitter）の「暮らしの計算機」アカウントへ
              ご連絡ください。
            </p>

            <div className="mt-6 rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200">
              <p className="text-lg font-bold text-gray-900">
                暮らしの計算機
              </p>
              <p className="mt-1 text-gray-600">@kura_culator</p>

              <a
                href="https://x.com/kura_culator"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-4 text-center font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Xのプロフィールを開く
                <span className="sr-only">（新しいタブで開きます）</span>
              </a>
              <p className="mt-3 text-sm text-gray-500">
                Xのプロフィールが新しいタブで開きます。
              </p>
            </div>
          </section>
          

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              ご注意
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              お問い合わせ内容によっては、回答できない場合があります。
              また、回答までにお時間をいただく場合がありますので、ご了承ください。
            </p>
          </section>
        </article>

        <footer className="mt-10 text-center text-sm text-gray-500">
          暮らしの計算機
        </footer>
      </div>
    </main>
  );
}