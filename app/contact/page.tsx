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
              お問い合わせ方法
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              現在、お問い合わせフォームを準備中です。
              お問い合わせ方法については、準備が整い次第ご案内します。
            </p>
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