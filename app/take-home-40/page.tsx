import { pageMetadata } from "../lib/seo";
import { incomeGuides } from "../lib/income-scenarios";
import IncomeGuidePage from "../components/IncomeGuidePage";
const guide = incomeGuides[40];
export const metadata = pageMetadata("/take-home-40", guide.title, guide.description);
export default function Page() { return <IncomeGuidePage income={40} />; }
