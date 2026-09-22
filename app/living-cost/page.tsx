import BudgetCalculator from "../components/BudgetCalculator";
import ToolPage from "../components/ToolPage";
export default function LivingCostPage() {
  return <ToolPage title="一人暮らし費用計算機" description="毎月の7つの支出と年払いをまとめ、月々に確保する予算と年間総額を確認します。">
    <BudgetCalculator expensesOnly />
    <section className="explanation"><h2>何が含まれる？</h2><p>月額の予算＝7項目の合計＋年払いの年間予算÷12。年間総額＝7項目の月額合計×12＋年払い予算です。初期値の生活費16.5万円・年払い12万円なら、月額換算17.5万円、年間210万円になります。全国平均や推奨額ではありません。</p><p>医療・衣服・交際・返済などは「その他の支出」へ。年払いの費用は年間予算にまとめ、月額欄との重複を避けます。未入力の費用は含まれません。</p><h3>生活費を集計するときの重複に注意</h3><p>給与天引き後の手取りで管理する場合、天引き分を生活費に重ねて加えないでください。カードで払った食費を計上した後、カード引落額をもう一度その他へ入れることも二重計上になります。</p><p>同じ支出が12か月続く仮定です。季節で変わる光熱費や途中で終了する返済は、自分の明細から予算を調整してください。<a href="/living-cost-guide">明細から生活費を整理する手順を見る →</a></p></section>
  </ToolPage>;
}
