import { pageMetadata } from "../lib/seo";
import ToolPage from "../components/ToolPage";
import ExistingAffiliate from "../components/ExistingAffiliate";
export const metadata = pageMetadata("/living-cost-guide", "一人暮らしの生活費の整理方法｜月払い・年払い・重複を確認", "支払明細から生活費を7項目に分け、年払いと貯金を整理する手順。カード引落しや通勤費の二重計上を避ける例、年間支出の月額換算を紹介。");
export default function Page() {
  return <ToolPage title="一人暮らしの生活費を、漏れなく整理する" description="平均額をそのまま使う前に、手元の明細から自分の予算を作りましょう。月払い・年払い・臨時の支出を分ける方法を紹介します。">
    <p className="ad-disclosure">広告：この記事にはA8.netのアフィリエイト広告が含まれます。</p>
    <section className="explanation"><h2>最初に用意するものと入力の順番</h2><ol className="guide-list"><li>通常の月の給与明細から、使える手取りを確認する。</li><li>銀行・カード・電子決済の明細と現金支出を集める。</li><li>家賃など毎月の支払いを下の7項目に分ける。</li><li>年払いと不定期な支出を別に書き出す。</li><li>生活費と年払いの備えを引いてから、貯金目標が収まるか確認する。</li></ol><p>集計する期間をそろえ、使った月で集計するのか支払った月で集計するのかを決めます。このサイトの計算機は月額予算を作るためのもので、口座の引落日を管理するものではありません。</p></section>
    <section className="explanation"><h2>7項目へ振り分けるときの確認表</h2><div className="table-scroll" tabIndex={0} role="region" aria-label="生活費の分類表"><table className="comparison-table"><caption>金額は自分の明細・契約書から入力します。</caption><thead><tr><th scope="col">項目</th><th scope="col">含めるものの例</th><th scope="col">確認すること</th></tr></thead><tbody>{[
      ["家賃・管理費","家賃、共益費","駐車場込みの場合、交通費側と重ねない"],
      ["食費","食材、外食、飲み物","現金払い・電子決済も集計"],
      ["水道光熱費","電気、ガス、水道","2か月分の請求なら対象期間で月額に換算"],
      ["通信費","携帯、ネット回線","端末分割代や割引終了後の金額も確認"],
      ["日用品","洗剤、消耗品","家具家電の買替えを別に扱う場合は重複しない"],
      ["交通費","電車、バス、車関連","通勤手当と支出の扱いをそろえる"],
      ["その他","医療、衣服、保険、交際、返済等","年払いに移した費用はここに重ねない"],
    ].map(([name,example,note]) => <tr key={name}><th scope="row">{name}</th><td>{example}</td><td>{note}</td></tr>)}</tbody></table></div><p><a href="/living-cost">7項目と年払いの予算を合計する →</a></p></section>
    <section className="explanation"><h2>カードの引落額を丸ごと足すと重複する場合</h2><p>例として、カードで食費3万円と通信費1万円を払ったとします。食費と通信費の各欄に入れた後、カードの引落額4万円をその他にも入れると、同じ4万円を二重に数えてしまいます。カードは支払方法として扱い、集計の基準をそろえてください。</p><h3>給与天引きと通勤費も同じ考え方</h3><p>税金や社会保険料を引いた手取りを収入として使う場合、天引き分を支出側にもう一度足しません。通勤手当を含む入金額を使うなら対応する交通費も含めるなど、収入と支出の両側でそろえます。</p></section>
    <section className="explanation"><h2>年払いを加えたら、残額はどう変わる？</h2><p>手取り25万円、毎月の生活費16.5万円なら、差額は8.5万円です。ここから年払い12万円の月割り1万円と貯金目標3万円を引くと、残額は4.5万円になります。8.5万円をすべて自由に使える額と考えないための計算です。金額は当サイトの仮定です。</p><p>2年に一度12万円かかる費用なら、1年分6万円として年間予算に加える方法があります。ただし支払日が近い場合は、必要額から現在の積立残高を引き、残りの月数で準備できるかも確認してください。</p><p><a href="/simulation">年払い・貯金目標を含めて家計を比較する →</a></p></section>
    <ExistingAffiliate kind="rental" />
    <p className="field-hint mt-6">作成・編集：暮らしの計算機 ／ 更新日：2026年9月21日</p>
  </ToolPage>;
}
