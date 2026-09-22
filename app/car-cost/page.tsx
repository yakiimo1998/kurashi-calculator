"use client";
import { useState } from "react";
import MoneyInput from "../components/MoneyInput";
import ToolPage from "../components/ToolPage";
import { amount, loanPayment } from "../lib/calculations";
const fields = [
  {label:"毎月の手取り",unit:"円",value:"250000",max:100000000},
  {label:"月間走行距離",unit:"km",value:"500",max:100000},
  {label:"燃費",unit:"km/L",value:"15",max:1000,min:0.01},
  {label:"ガソリン単価",unit:"円/L",value:"170",max:10000},
  {label:"駐車場代（月額）",unit:"円",value:"10000",max:10000000},
  {label:"自動車保険（月額）",unit:"円",value:"5000",max:10000000},
  {label:"自動車税など（年額）",unit:"円",value:"48000",max:100000000},
  {label:"車検・整備の積立（年額）",unit:"円",value:"60000",max:100000000},
  {label:"車の購入価格",unit:"円",value:"3000000",max:100000000},
  {label:"頭金",unit:"円",value:"0",max:100000000},
  {label:"返済年数",unit:"年",value:"5",max:30,min:1/12},
  {label:"ローン年利",unit:"％",value:"2.5",max:100},
];
export default function CarCostPage() {
  const [inputs,setInputs] = useState(fields.map(field=>field.value));
  const values = inputs.map((value,i)=>amount(value,fields[i].min ?? 0,fields[i].max));
  let result: {loan:number;fuel:number;monthly:number;annual:number;remaining:number;percent:number|null;months:number;interest:number;running:number;breakdown:[string,number][]}|null=null;
  const valid = values.every(value=>value!==null);
  const downPaymentError = valid && values[9]! > values[8]!;
  if (valid && !downPaymentError) {
    const [income,mileage,efficiency,gas,parking,insurance,tax,maintenance,price,down,years,rate] = values as number[];
    const loan = loanPayment(price-down,rate,Math.round(years*12))!;
    const fuel = mileage/efficiency*gas;
    const monthly = loan+fuel+parking+insurance+tax/12+maintenance/12;
    const months = Math.round(years*12);
    result = {loan,fuel,monthly,annual:monthly*12,remaining:income-monthly,percent:income>0?monthly/income*100:null,months,interest:Math.max(0,loan*months-(price-down)),running:monthly-loan,
      breakdown:[["ローン",loan],["ガソリン",fuel],["駐車場",parking],["保険",insurance],["税金の備え",tax/12],["車検・整備の備え",maintenance/12]]};
  }
  return <ToolPage title="車の費用計算機" description="ローン・ガソリン・保険・税金などを月額に換算し、家計への負担を見積もります。">
    <div className="budget-workspace"><div className="budget-inputs"><p className="field-hint mb-5">初期値は計算例です。契約書・見積書などの金額に変更してください。</p><div className="input-grid input-grid-detail">{fields.map((field,i)=><MoneyInput key={field.label} {...field} value={inputs[i]} onChange={value=>setInputs(current=>current.map((item,j)=>j===i?value:item))} />)}</div>{downPaymentError && <p role="alert" className="field-error">頭金は車の購入価格以下で入力してください。</p>}</div>
    <section className="budget-result" aria-live="polite"><p className="result-label">毎月の車関連費用</p>{result ? <><p className="result-number">{Math.round(result.monthly).toLocaleString()}<span>円</span></p><p className="result-equation">同じ条件で12か月：{Math.round(result.annual).toLocaleString()}円</p><div className="result-divider" /><div className="result-detail"><span>ローン月額</span><strong>{Math.round(result.loan).toLocaleString()}円</strong></div><div className="result-detail"><span>ガソリン代／月</span><strong>{Math.round(result.fuel).toLocaleString()}円</strong></div><div className="result-divider" /><p>車の費用を引いた残額：{Math.round(result.remaining).toLocaleString()}円／月</p><p className="result-note">{result.percent === null ? "手取り0円のため費用割合は表示しません。" : "手取りに占める割合：" + result.percent.toFixed(1) + "％"} 家賃・食費などはまだ差し引いていません。</p><p className="result-note">頭金・購入時の諸費用は月額に含みません。頭金は別途{Number(inputs[9]).toLocaleString()}円が必要です。</p></> : <p>入力内容を確認してください。</p>}</section></div>
    <section className="explanation"><h2>月額の内訳と、完済後の負担</h2>{result ? <><div className="table-scroll" tabIndex={0} role="region" aria-label="車の月額費用の内訳"><table className="comparison-table"><caption>金額は円未満を四捨五入。合計は端数を保持して計算するため、表示内訳の合計とずれる場合があります。</caption><thead><tr><th scope="col">項目</th><th scope="col">月額換算</th><th scope="col">同条件の12か月分</th></tr></thead><tbody>{result.breakdown.map(([label,value]) => <tr key={label}><th scope="row">{label}</th><td>{Math.round(value).toLocaleString()}円</td><td>{Math.round(value*12).toLocaleString()}円</td></tr>)}</tbody></table></div><p>ローン完済後も、入力した維持費が同じなら月{Math.round(result.running).toLocaleString()}円が残ります。試算上の返済回数は{result.months}回、ローンの利息合計は約{Math.round(result.interest).toLocaleString()}円です。ローン手数料や契約上の端数処理は含みません。</p></> : <p>入力が有効になると内訳を表示します。</p>}<h3>頭金を増やす場合の比較</h3><p>頭金を増やすと借入元金は減りますが、購入時に手元から出ていくお金は増えます。月額だけでなく、頭金を払った後にも生活費や整備費を用意できるか確認してください。購入価格に含まれない登録・納車等の諸費用も別途必要です。</p><h3>家計の交通費へ移すとき</h3><p>この月額には税金と車検・整備の月割りが入っています。生活費計算機へ合計額を移した場合は、同じ税金や整備費を年払い予算に重ねて入力しないでください。駐車場代が家賃に含まれる場合も重複を除きます。</p></section>
    <section className="explanation"><h2>計算の前提</h2><p>ガソリン代 ＝ 月間走行距離 ÷ 燃費 × 単価。税金と整備積立は年額を12で割り、他の月額費用と合算します。</p><p>ローンは固定金利・元利均等・毎月払いで試算し、返済年数を月数に換算して四捨五入します。金利0％は元金を月数で割ります。ボーナス払い・手数料・残価設定・実際の端数処理は含みません。</p><p>年額は同じ月額負担が12か月続く仮定です。完済月をまたぐ年や、実際の保険・税額の変化は反映しません。税率や保険料の自動算定は行わないため、ご自身の見積額をご入力ください。高速料金・洗車・消耗品など、入力欄で扱っていない費用は家計側で別に追加してください。</p></section>
  </ToolPage>;
}
