import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {title:"プライバシーポリシー｜暮らしの計算機",description:"入力した金額、お問い合わせ情報、A8.net広告に伴う外部送信等の取り扱いについて。",alternates:{canonical:"/privacy"}};
export default function PrivacyPage() {
 return <main id="main-content" className="tool-page"><header className="tool-heading"><h1>プライバシーポリシー</h1><p>暮らしの計算機における情報の取り扱いを説明します。</p></header>
 <section className="explanation"><h2>1. 計算機への入力</h2><p>計算機に入力した金額は、お使いのブラウザ内で計算に使用します。当サイトの計算機には、入力額を運営者のサーバーへ送信する機能や、ブラウザへ永続保存する機能を設けていません。ページを閉じたり再読み込みしたりすると、入力が初期値に戻る場合があります。</p><p>サイトの閲覧に必要な通信や、以下の広告に関する通信は別に発生します。</p></section>
 <section className="explanation"><h2>2. お問い合わせ情報</h2><p>お問い合わせはXの「暮らしの計算機（@kura_culator）」で受け付けています。送信いただいたアカウント情報やお問い合わせ内容を、対応・連絡・不具合の確認に必要な範囲で利用します。公開投稿には個人情報や機密情報を記載しないでください。</p><p>X上での情報の取り扱いはXのプライバシーポリシーにも従います。当サイト内にお問い合わせフォームは設けていません。</p></section>
 <section className="explanation"><h2>3. 広告・外部送信</h2><p>A8.net（株式会社ファンコミュニケーションズ）のアフィリエイト広告を一部の記事に掲載しています。広告画像・計測画像の読み込み時や広告リンクのクリック時に、IPアドレス、ブラウザ等の端末情報、参照元ページ、Cookie等の識別情報が同社等へ送信される場合があります。送信先では広告表示、成果計測、不正防止等のために利用されます。</p><p>詳しい情報の種類や利用目的、Cookie等の取り扱いは、<a href="https://www.a8.net/privacy.html">A8.netのプライバシーに関する案内</a>および<a href="https://www.fancs.com/privacy/">ファンコミュニケーションズのプライバシーポリシー</a>をご確認ください。広告リンク先での情報の取り扱いは、各事業者のポリシーに従います。</p><p>Cookieはブラウザ設定で制限・削除できます。設定により、広告の成果計測等が正常に行われない場合があります。</p></section>
 <section className="explanation"><h2>4. アクセス情報</h2><p>サイトの配信に伴い、ホスティング事業者がIPアドレスやリクエスト情報等を配信・保安のために取り扱う場合があります。Google Search Consoleを、検索結果での表示・クリック状況や登録状況の確認に利用しています。</p><p>現時点で当サイトのコードにGoogle Analyticsの計測タグやGoogle AdSenseの広告タグは組み込んでいません。新たに導入する場合は、実際の運用に合わせて本ページを更新します。</p></section>
 <section className="explanation"><h2>5. 情報に関するお問い合わせ</h2><p>お問い合わせ情報の開示・訂正・削除等については、<Link href="/contact">お問い合わせ窓口</Link>へご連絡ください。ご本人からのご連絡であることを確認したうえで、法令に従って対応します。</p><p>本方針は運用の変更等に応じて更新し、このページでお知らせします。</p></section>
 <p className="field-hint mt-6">制定日：2026年9月5日／更新日：2026年9月10日</p></main>;
}
