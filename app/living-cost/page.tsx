import BudgetCalculator from "../components/BudgetCalculator";
import ToolPage from "../components/ToolPage";
export default function LivingCostPage() {
  return <ToolPage title="一人暮らし費用計算機" description="家賃・食費・光熱費など、毎月の支出を7つに分けて整理します。">
    <BudgetCalculator expensesOnly />
    <section className="explanation"><h2>何が含まれる？</h2><p>計算するのは入力した7項目の合計です。初期値は家計の計算例であり、全国平均や推奨額ではありません。</p><p>税金や社会保険料を給与天引き後の手取りで管理する場合は、天引き分を生活費に重ねて加えないようにしてください。別途支払う税金・保険・年払いの費用は、月額に換算して追加してください。</p></section>
  </ToolPage>;
}
