import Image from "next/image"

export default function Home() {
	return (
		<main className="flex ml-48 mt-16 p-5 flex-wrap gap-10 overflow-y-auto overflow-x-hidden">
			<div className="w-full h-96 bg-green-700 p-4 rounded-lg"> Card </div>

			<div className="min-w-[45%] flex-1 h-96 bg-green-700 p-4 rounded-lg">
				Card
			</div>
			<div className="min-w-[45%] flex-1 h-96 bg-green-700 p-4 rounded-lg">
				Card
			</div>

			<div className="w-[75%] h-96 bg-green-700 p-4 rounded-lg"> Card </div>
			<div className="flex-1 h-96 bg-green-700 p-4 rounded-lg"> Card </div>
		</main>
	)
}
