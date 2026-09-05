import Link from "next/link";

export default function PrivacyPage() {
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
            プライバシーポリシー
          </h1>

          <p className="mt-6 leading-7 text-gray-700">
            暮らしの計算機（以下「当サイト」）では、利用者の個人情報を適切に取り扱い、
            プライバシーの保護に努めます。
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              1. 個人情報の利用目的
            </h2>
            <p className="mt-4 leading-7 text-gray-700">
              当サイトでは、お問い合わせなどを通じて利用者から提供された情報を、
              お問い合わせへの対応や必要な連絡のために利用する場合があります。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              2. 広告について
            </h2>
            <p className="mt-4 leading-7 text-gray-700">
              当サイトでは、今後、第三者配信の広告サービスを利用する場合があります。
              広告配信事業者は、利用者の興味に応じた広告を表示するため、
              Cookieなどを使用することがあります。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              3. アクセス解析について
            </h2>
            <p className="mt-4 leading-7 text-gray-700">
              当サイトでは、サイトの改善や利用状況の確認のため、
              アクセス解析サービスを利用する場合があります。
              これらのサービスではCookieなどを利用してアクセス情報を収集することがあります。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              4. 個人情報の第三者提供
            </h2>
            <p className="mt-4 leading-7 text-gray-700">
              当サイトでは、法令に基づく場合などを除き、
              利用者の個人情報を本人の同意なく第三者へ提供することはありません。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              5. 免責事項
            </h2>
            <p className="mt-4 leading-7 text-gray-700">
              当サイトで提供する計算結果や情報は、あくまで目安として提供しています。
              実際の税金、社会保険料、生活費、家賃などとは異なる場合があります。
              最終的な判断は利用者ご自身の責任でお願いいたします。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              6. プライバシーポリシーの変更
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