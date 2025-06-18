import { ChevronRight, ChevronLeft } from "lucide-react"
import { ArrowType } from "@/types/definitions";

export function CustomNextArrow(props: ArrowType) {
    const { onClick } = props
    return (
        <div
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 text-dark shadow-lg transition z-320 cursor-pointer p-2 rounded-full bg-white drop-shadow-[0_0_20px_#C6C6CF] hover:drop-shadow-none  hover:bg-dark hover:text-light"
            onClick={onClick}
        >
            <ChevronRight size={28} />
        </div>
    )
}

export function CustomPrevArrow(props: ArrowType) {
    const { onClick } = props
    return (
        <div
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 text-dark shadow-lg transition z-320 cursor-pointer p-2 rounded-full bg-white drop-shadow-[0_0_20px_#C6C6CF] hover:drop-shadow-none  hover:bg-dark hover:text-light"
            onClick={onClick}
        >
            <ChevronLeft size={28} />
        </div>
    )
}