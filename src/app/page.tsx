import Image from "next/image"

export default function Home() {
	return (
		<>
			<div className="w-full h-96 bg-green-700 p-4 rounded-lg"> Card </div>

			<div className="w-full md:min-w-[45%] md:flex-1 h-96 bg-green-700 p-4 rounded-lg">
				Card
			</div>
			<div className="w-full md:min-w-[45%] md:flex-1 h-96 bg-green-700 p-4 rounded-lg">
				Card
			</div>

			<div className="w-full md:max-w-[75%] h-96 bg-green-700 p-4 rounded-lg">
				Card
			</div>
			<div className="flex-1 h-96 bg-green-700 p-4 rounded-lg"> Card </div>
		</>
	)
}
