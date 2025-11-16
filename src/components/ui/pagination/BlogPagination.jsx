import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export function BlogPagination() {
    return (
        <div className="mt-10">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationLink
                            className='!px-[10px]'
                            href='#'>
                            <ChevronLeft aria-hidden="true" className="size-5" />
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className='!px-[10px]' href='#'>
                            <ChevronRight aria-hidden="true" className="size-5" />
                        </PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>

    )
}
