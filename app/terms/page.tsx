import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約・免責事項｜暮らしの計算機",
  description:
    "暮らしの計算機の利用規約・免責事項です。当サイトのサービス利用に関する注意事項を掲載しています。",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <article className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
          <h1 className="text-3xl font-bold text-gray-900">
            利用規約・免責事項
          </h1>

          <p className="mt-4 leading-7 text-gray-700">
            この利用規約・免責事項は、暮らしの計算機（以下「当サイト」）の
            利用条件について定めるものです。
            当サイトを利用することで、本規約に同意したものとみなします。
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              1. サービスについて
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトでは、手取り額、家賃、生活費など、
              日常生活に関する各種計算ツールや情報を提供しています。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトで提供する計算結果や情報は、利用者の判断を
              補助するための目安として提供しています。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              2. 計算結果について
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトの計算結果は、入力された情報や当サイト独自の
              計算方法に基づいて算出される概算値です。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              実際の税金、社会保険料、家賃、生活費、金融商品などの
              金額とは異なる場合があります。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              正確な金額が必要な場合は、勤務先、行政機関、金融機関、
              各サービス提供事業者などにご確認ください。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              3. 情報の正確性について
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトでは、掲載する情報について可能な限り正確な
              情報を提供するよう努めています。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              ただし、情報の完全性、正確性、最新性を保証するものではありません。
              制度や料金などは変更される場合があります。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              4. 損害について
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトの利用によって生じた損害、損失、トラブルなどについて、
              当サイト運営者は、故意または重大な過失がある場合を除き、
              責任を負わないものとします。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              5. 外部サイト・広告について
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトでは、第三者が運営するウェブサイトへのリンクや、
              広告を掲載する場合があります。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              外部サイトの内容、サービス、商品などについては、
              当サイトが保証するものではありません。
              外部サイトを利用する際は、各サイトの利用規約や
              プライバシーポリシーをご確認ください。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              6. 著作権について
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトに掲載されている文章、画像、デザインなどの
              著作物の無断転載・無断使用を禁止します。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              引用を行う場合は、著作権法などの関連法令に従い、
              適切な方法で行ってください。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              7. 利用規約の変更
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトは、必要に応じて本利用規約・免責事項の内容を
              変更することがあります。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              変更後の内容は、当サイトに掲載した時点から適用されます。
            </p>
          </section>

          <p className="mt-10 text-right text-sm text-gray-500">
            制定日：2026年9月5日
          </p>
        </article>
      </div>
    </main>
  );
}