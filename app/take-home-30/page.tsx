import { pageMetadata } from "../lib/seo";
import { incomeGuides } from "../lib/income-scenarios";
import IncomeGuidePage from "../components/IncomeGuidePage";
const guide = incomeGuides[30];
export const metadata = pageMetadata("/take-home-30", guide.title, guide.description);
export default function Page() { return <IncomeGuidePage income={30} />; }
