
// import SkillCard from "./Skillcard";
import Link from "next/link"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
        <h1 className='text-[30px]'>記録</h1>
        日付を選ぶと、その日の予定と実績が表示されます
        <div className='flex '>日付 &nbsp;&nbsp;  <input type="date" className='border-2 w-30 text-right'/> </div>
        予定  xxxx 時間 &nbsp;&nbsp;&nbsp;実績  xxxx 時間
        <div  className='flex '>メモ&nbsp;xxxxxxxx</div>
{/* 
        <SkillCard
          skill={"React"}
          level={1} /> */}








        <Link
          href="../"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >戻る
        </Link>

    </main>
  )
}


