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
              お問い合わせフォーム
            </h2>

            <form
  action="https://formspree.io/f/xdeodrqp"
  method="POST"
  className="mt-6 space-y-6"
>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  お名前
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  placeholder="お名前を入力してください"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  メールアドレス
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  placeholder="example@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900"
                >
                  お問い合わせ内容
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  placeholder="お問い合わせ内容を入力してください"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white hover:bg-blue-700"
              >
                送信する
              </button>
            </form>
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