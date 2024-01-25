import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        ログインフォームを表示する予定です。
        
        <div className='flex '>メールアドレス &nbsp;&nbsp;  <input type="text" className='border-2 w-100 text-right'/> </div>
        <div className='flex '>パスワード&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" className='border-2 w-100 text-right'/> </div>

        <Link
          href="../"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >戻る
        </Link>

    </main>
  )
}
