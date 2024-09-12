import { Appbar } from "../components/appbar";
import { About1 } from "../components/about1";
import { About2 } from "../components/about2";

export default function Home() {
  return <div className="bg-gray-900">
    <Appbar/>
    <About1/>
    <About2/>
  </div>
}
