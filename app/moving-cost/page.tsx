import { pageMetadata } from "../lib/seo";
import ToolPage from "../components/ToolPage";
import MovingCalculator from "../components/MovingCalculator";
import ExistingAffiliate from "../components/ExistingAffiliate";
export const metadata = pageMetadata("/moving-cost", "引っ越し初期費用の計算機｜見積総額と資金不足を確認", "賃貸契約・運搬・家具家電・旧居の追加支払いを合計して、引っ越し資金の過不足を計算。前家賃や敷金の扱い、見積もり比較の確認項目も掲載。");
export default function Page() {
  return <ToolPage title="引っ越し前に必要なお金を計算" description="運搬代だけでなく、新居の契約・家具家電・旧居の支払いまで整理し、用意した資金に収まるか確認します。">
    <p className="ad-disclosure">広告：この記事にはA8.netのアフィリエイト広告が含まれます。</p>
    <MovingCalculator />
    <section className="explanation"><h2>「最終的な費用」と「一旦必要な現金」を分ける</h2><p>敷金など後で返金される可能性があるお金も、契約時には支払う資金が必要です。この計算機では支払予定額を合計し、金額や入金時期が未確定の返金は引きません。契約書の返金条件や時期を別に確認してください。</p><p>初期値の例では、契約30万円＋運搬6万円＋家具家電12万円＋旧居関連5万円＋その他2万円で55万円。引っ越しに使える資金60万円なら残り5万円です。この60万円は、引っ越し後に残しておく生活用の予備資金を除いた額とします。</p><h3>前家賃を重ねて数えない</h3><p>契約時の支払額に新居の翌月家賃が含まれる場合、その同じ家賃を「その他」にもう一度入れないようにします。一方、旧居も同じ期間の家賃がかかるなら、旧居の追加支払欄にその負担を入れます。</p></section>
    <section className="explanation"><h2>2社の見積もりを、同じ作業内容で比べる</h2><div className="table-scroll" tabIndex={0} role="region" aria-label="引っ越し見積もりの比較例"><table className="comparison-table"><caption>仮の計算例。業者の実際の料金・相場ではありません。</caption><thead><tr><th scope="col">項目</th><th scope="col">見積A</th><th scope="col">見積B</th></tr></thead><tbody><tr><th scope="row">基本の運搬</th><td>50,000円</td><td>58,000円</td></tr><tr><th scope="row">設置・資材の追加</th><td>12,000円</td><td>含まれる</td></tr><tr><th scope="row">比較する合計</th><td>62,000円</td><td>58,000円</td></tr></tbody></table></div><p>表示された基本料金だけで見るとAが安く見えますが、同じ作業を含めた仮定ではBが4,000円低くなります。荷物量、作業日、時間帯、梱包、設置、処分、階段や搬入条件が同じかを確認してから比較してください。</p><h3>支払日ごとに確認する順番</h3><ol className="guide-list"><li>契約金の振込期限、引っ越し代、家具家電の支払日を書き出す。</li><li>その日までに使える現金・口座残高を確認する。</li><li>後日返金や給与入金を、入金前の支払いに使えるものとして数えない。</li><li>引っ越し後の家賃・食費などは<a href="/simulation">月々の家計</a>で別に試算する。</li></ol><p>この計算機は合計額の比較です。支払日順の残高、契約条件の適法性、請求額の妥当性を判定するものではありません。</p></section>
    <ExistingAffiliate kind="internet" />
    <p className="field-hint mt-6">作成・編集：暮らしの計算機 ／ 更新日：2026年9月21日</p>
  </ToolPage>;
}
