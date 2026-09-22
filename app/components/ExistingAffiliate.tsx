const ads = {
  rental: { href:"https://px.a8.net/svt/ejp?a8mat=4BC4QP+2DR76+5MMG+5ZEMP", image:"https://www27.a8.net/svt/bgt?aid=260906497004&wid=001&eno=01&mid=s00000026260001005000&mc=1", pixel:"https://www14.a8.net/0.gif?a8mat=4BC4QP+2DR76+5MMG+5ZEMP", width:300, height:250, alt:"家電レンタルみんなのHappy" },
  internet: { href:"https://px.a8.net/svt/ejp?a8mat=4BC4QP+5CX82+447K+BXIYP", image:"https://www29.a8.net/svt/bgt?aid=260906497009&wid=001&eno=01&mid=s00000019208002004000&mc=1", pixel:"https://www15.a8.net/0.gif?a8mat=4BC4QP+5CX82+447K+BXIYP", width:468, height:60, alt:"@nifty光" },
};
export default function ExistingAffiliate({ kind }: { kind: keyof typeof ads }) {
  const ad = ads[kind];
  return <aside className="explanation"><h2>{kind === "rental" ? "家電の購入とレンタルを比べる場合" : "新居でインターネットを契約する場合"}</h2><p>{kind === "rental" ? "月額だけでなく利用期間全体の料金・送料・最低利用期間・返却費用を確認し、購入時の総額と比較してください。短期間でも必ずレンタルの方が安くなるとは限りません。" : "建物の既存回線で足りるかを確認してから、提供エリア・工事日・割引終了後の月額・工事費残債・解約条件を比較してください。契約が不要なら新しく申し込む必要はありません。"}</p><p className="ad-disclosure">広告（PR）：以下はA8.netの広告です。申込み等により運営者が報酬を受け取る場合があります。料金・提供条件はリンク先でご確認ください。</p><div className="affiliate-banner"><a href={ad.href} rel="sponsored nofollow">
    {/* Keep the existing affiliate provider's image and tracking format. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={ad.image} width={ad.width} height={ad.height} alt={ad.alt} className="h-auto max-w-full" />
  </a>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={ad.pixel} width="1" height="1" alt="" />
  </div></aside>;
}
