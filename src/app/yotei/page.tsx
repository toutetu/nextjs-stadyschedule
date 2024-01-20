
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24"> 
        <h1>学習スケジュール登録</h1>
        <div className='flex '>月 &nbsp;&nbsp;  <input type="number" className='border-2 w-10 text-right'/> 時間</div>
        <div className='flex '>火 &nbsp;&nbsp;  <input type="number" className='border-2 w-10 text-right'/> 時間</div>
        <div className='flex '>水 &nbsp;&nbsp;  <input type="number" className='border-2 w-10 text-right'/> 時間</div>
        <div className='flex '>木 &nbsp;&nbsp;  <input type="number" className='border-2 w-10 text-right'/> 時間</div>
        <div className='flex '>金 &nbsp;&nbsp;  <input type="number" className='border-2 w-10 text-right'/> 時間</div>
        <div className='flex '>土 &nbsp;&nbsp;  <input type="number" className='border-2 w-10 text-right'/> 時間</div>
        <div className='flex '>日 &nbsp;&nbsp;  <input type="number" className='border-2 w-10 text-right'/> 時間</div>

        <button className="bg-gray-900 hover:bg-gray-800 text-white rounded px-4 py-2">保存</button>

        <Link
          href="../"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >戻る
        </Link>

    </main>
  )
}
