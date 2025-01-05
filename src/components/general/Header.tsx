import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
	return (
		<header className="bg-background p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-20 border-b border-b-foreground/25">
			<aside className="flex items-center gap-2">
				<span className="text-xl font-bold">Logo.</span>
			</aside>

			<aside className="flex items-center gap-2">
				<span className="text-xl font-bold">Menu.</span>
				<Avatar className="rounded-sm">
					<AvatarImage
						src="https://github.com/rafa-carmo.png"
						alt="@rafa-carmo"
					/>
					<AvatarFallback>RC</AvatarFallback>
				</Avatar>
			</aside>
		</header>
	)
}
