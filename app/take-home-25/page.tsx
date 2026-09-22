import { pageMetadata } from "../lib/seo";
import { incomeGuides } from "../lib/income-scenarios";
import IncomeGuidePage from "../components/IncomeGuidePage";
const guide = incomeGuides[25];
export const metadata = pageMetadata("/take-home-25", guide.title, guide.description);
export default function Page() { return <IncomeGuidePage income={25} />; }
