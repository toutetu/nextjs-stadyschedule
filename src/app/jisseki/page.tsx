import Link from "next/link"

export const metadata ={
   title:"学習実績登録"
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
        <h1>学習実績登録</h1>
        <div className='flex '>日付 &nbsp;&nbsp;  <input type="date" className='border-2 w-30 text-right'/> に <input type="number" className='border-2 w-10 text-right'/> 時間</div>
        <div  className='flex '>メモ<input type="text" className='border-2 w-300 '/> </div>
        <button className="bg-gray-900 hover:bg-gray-600 text-white rounded px-4 py-2">保存</button>

        <Link
          href="../"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >戻る
        </Link>

    </main>
  )
}
