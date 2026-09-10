import BudgetCalculator from "../components/BudgetCalculator";
import ToolPage from "../components/ToolPage";
export default function SimulationPage() {
  return <ToolPage title="一人暮らしシミュレーター" description="毎月の手取りと7つの生活費から、残るお金・不足するお金を計算します。">
    <BudgetCalculator />
    <section className="explanation"><h2>結果の見方と計算方法</h2><p>毎月の残額 ＝ 手取り − 入力した生活費の合計。12か月分の残額は、毎月の残額を12倍したものです。</p><p>ボーナス・引っ越し費用・更新料・冠婚葬祭など、入力していない収入や支出は含みません。年に一度の費用は12で割って「その他の支出」に加えると、月々の予算を考えやすくなります。</p><h3>家賃を変えて比較するには？</h3><p>家賃だけを変更すると、結果がすぐ更新されます。他の支出を同じにすると、候補の部屋ごとの負担を比較できます。</p></section>
  </ToolPage>;
}
