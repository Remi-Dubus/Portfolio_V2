import { ChevronRight, ChevronLeft } from "lucide-react"
import { arrowType } from "@/types/definitions";

export function CustomNextArrow(props: arrowType) {
    const { onClick } = props
    return (
        <div
            className="absolute right-[-25px] top-1/3 translate-y-10 z-10 text-dark shadow-lg transition cursor-pointer p-2 rounded-full bg-white drop-shadow-[0_0_20px_#C6C6CF] hover:drop-shadow-none  hover:bg-dark hover:text-light"
            onClick={onClick}
        >
            <ChevronRight size={28} />
        </div>
    )
}

export function CustomPrevArrow(props: arrowType) {
    const { onClick } = props
    return (
        <div
            className="absolute left-[-20px] top-1/3 translate-y-10 z-10 text-dark shadow-lg transition cursor-pointer p-2 rounded-full bg-white drop-shadow-[0_0_20px_#C6C6CF] hover:drop-shadow-none  hover:bg-dark hover:text-light"
            onClick={onClick}
        >
            <ChevronLeft size={28} />
        </div>
    )
}