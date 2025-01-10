import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell } from "lucide-react"
import { Button } from "../ui/button"

export function Header() {
	return (
		<header className="bg-background p-4 flex flex-col fixed top-0 left-0 right-0 z-20 border-b border-b-foreground/25 gap-4">
			<div className="w-full flex items-center justify-between">
				<aside className="flex items-center gap-2">
					<span className="text-xl font-bold pointer-events-none">Logo.</span>
				</aside>

				<aside className="flex items-center gap-5">
					<span className="text-xl font-bold p-3 bg-foreground/25 hover:bg-foreground-50 transition-all rounded-full relative">
						<Bell className="w-5 h-5" strokeWidth={3} />
						<div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -bottom-2 -end-2 dark:border-gray-900">
							3
						</div>
					</span>
					<Avatar className="rounded-full w-11 h-11">
						<AvatarImage
							src="https://github.com/rafa-carmo.png"
							alt="@rafa-carmo"
						/>
						<AvatarFallback>RC</AvatarFallback>
					</Avatar>
				</aside>
			</div>
			<hr className="w-screen -ml-4" />
			<div className="w-full h-10 flex items-center justify-between">
				<aside>
					<span className="font-bold text-lg  pointer-events-none">
						Dashboard
					</span>
				</aside>

				<aside className="h-10">
					<div className="flex gap-5 items-center justify-center">
						<div className="w-72 flex-1 h-10 border bg-white rounded">-</div>
						<div className="w-60 h-10 border flex gap-0">
							<div className="flex-1 h-10 bg-white rounded-l border border-zinc-400/50 m-0 p-0">
								-
							</div>
							<div className="flex-1 h-10 bg-white rounded-r border border-zinc-400/50 m-0 p-0">
								-
							</div>
						</div>
						<Button variant="secondary">Filtrar</Button>
					</div>
				</aside>
			</div>
		</header>
	)
}
