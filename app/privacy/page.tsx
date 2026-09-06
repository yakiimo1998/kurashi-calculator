import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜暮らしの計算機",
  description:
    "暮らしの計算機のプライバシーポリシーです。個人情報の取り扱い、Cookie、広告、アクセス解析について説明しています。",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <article className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
          <h1 className="text-3xl font-bold text-gray-900">
            プライバシーポリシー
          </h1>

          <p className="mt-4 leading-7 text-gray-700">
            暮らしの計算機（以下「当サイト」）では、利用者の個人情報を適切に取り扱い、
            以下の方針に基づいて管理します。
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              1. 個人情報の利用目的
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
  当サイトでは、お問い合わせフォームを通じて取得した氏名、メールアドレス、
  お問い合わせ内容などの個人情報を、お問い合わせへの対応、必要な情報の連絡、
  サービスの改善などの目的で利用する場合があります。
</p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              2. Cookie（クッキー）について
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトでは、サービスの利便性向上や利用状況の把握、
              広告配信などの目的でCookieを使用する場合があります。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Cookieとは、利用者がウェブサイトを閲覧した際に、
              利用者の端末に保存される小さな情報です。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              利用者は、ブラウザの設定によりCookieを無効にすることができます。
              ただし、Cookieを無効にした場合、一部のサービスが正常に利用できない
              場合があります。
            </p>
          </section>

                    <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              3. 広告について
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトでは、サービスの紹介にアフィリエイト広告を利用しています。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Googleなどの第三者広告配信事業者は、Cookieを使用して、
              利用者が過去に当サイトや他のウェブサイトを訪問した際の情報をもとに、
              利用者の興味や関心に応じた広告を表示する場合があります。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              広告に関するCookieの利用を無効にする方法については、
              各広告配信事業者が提供する設定をご確認ください。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              4. アクセス解析について
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトでは、サイトの改善や利用状況の把握を目的として、
              Google Analyticsなどのアクセス解析サービスを利用する場合があります。
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              アクセス解析サービスでは、Cookieなどを利用して利用者の情報を
              収集する場合があります。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              5. 個人情報の第三者提供
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトでは、法令に基づく場合などを除き、
              利用者本人の同意なく個人情報を第三者へ提供することはありません。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              6. 免責事項
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトで提供している計算結果や情報は、あくまで目安として提供しています。
              実際の税金、社会保険料、生活費、家賃などとは異なる場合があります。
              最終的な判断や行動については、利用者ご自身の責任でお願いいたします。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              7. プライバシーポリシーの変更
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              当サイトは、必要に応じて本プライバシーポリシーの内容を変更することがあります。
              変更後のプライバシーポリシーは、当サイトに掲載した時点から適用されます。
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