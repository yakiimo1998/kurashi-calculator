import { pageMetadata } from "../lib/seo";
import ToolPage from "../components/ToolPage";
import TobaccoCalculator from "../components/TobaccoCalculator";
import { sources } from "../lib/tobacco";

export const metadata = pageMetadata("/fun", "タバコ代計算機｜1週間・1か月・1年・3年の費用比較｜暮らしの計算機", "銘柄と1日の本数からタバコ代を無料計算。1週間・1か月・1年・3年の支出を、吸わなかった場合の外食・本・旅行の予算例と比較。価格の手入力にも対応しています。");
export default function FunPage() {
  return <div className="fun-theme"><ToolPage title="オモシロ計算機" description="タバコ代計算機：1週間・1か月・1年・3年の支出と、別の使い道を比較。">
    <TobaccoCalculator />
    <section className="explanation"><h2>計算の前提と価格の出典</h2>
      <p>タバコ代 ＝ 1箱の価格 ÷ 1箱の本数 × 1日の平均本数 × 日数。1週間は7日、1か月は30日、1年は365日、3年は1,095日です。箱の端数を切り上げず、吸う本数に相当する費用を計算し、表示時に1円単位で四捨五入します。</p>
      <p>表示している箱の価格が期間中ずっと続くと仮定した比較です。過去に実際に支払った金額や、今後の値上げを含む購入費用ではありません。加熱式の本体代・電気代・周辺用品、禁煙にかかる費用、貯金の利息は含みません。</p>
      <p>価格は税込の国内通常販売価格です（免税価格を除く）。公式情報の確認日は2026年9月12日。掲載済みの2026年10月1日の改定は、日本時間の適用日から切り替わります。未登録の価格改定をリアルタイムに取得する機能はありません。実際の価格が異なる場合は「価格・本数を手入力」で変更してください。</p>
      <p>掲載銘柄は一部です。銘柄名は商品の識別のために記載しています。喫煙や商品の購入を勧めるページではなく、支出を比較するための計算機です。</p>
      <ul>{Object.values(sources).map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.name}（新しいタブ）</a></li>)}</ul>
    </section>
    <section className="explanation tobacco-caution" aria-labelledby="tobacco-caution-title">
      <h2 id="tobacco-caution-title">喫煙を推奨するものではありません</h2>
      <p><strong>この計算機は、タバコにかかる支出を見直すためのものです。紙巻たばこ・加熱式たばこの喫煙や購入、特定の銘柄への切り替えを勧めるものではありません。</strong></p>
      <ul>
        <li>20歳未満の喫煙は法律で禁止されています。</li>
        <li>喫煙は、がんなどの病気のリスクを高めます。また、ニコチンには依存性があります。</li>
        <li>たばこの煙は周囲の人の健康にも影響します。加熱式たばこにも発がん性物質やニコチンが含まれ、本人や周囲の人への健康上の悪影響は否定できません。</li>
      </ul>
      <p className="tobacco-caution-source">参考：一般社団法人日本たばこ協会「<a href="https://www.tioj.or.jp/activity/pdf/250401-ad-caution-manual.pdf" target="_blank" rel="noopener noreferrer">注意文言等の広告表示に関するマニュアル（2025年4月1日改定・PDF／新しいタブ）</a>」。同資料を参考に当サイトがまとめた注意書きであり、同協会の監修・推奨を示すものではありません。</p>
    </section>
  </ToolPage></div>;
}
