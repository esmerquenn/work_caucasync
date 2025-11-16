

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function MenuBrandAccardion() {

    const brands = [
        { id: 1, name: "Chanel" },
        { id: 2, name: "Dior" },
        { id: 3, name: "Tom Ford" },
        { id: 4, name: "Yves Saint Laurent" },
        { id: 5, name: "Versace" },
        { id: 6, name: "Armani" },
        { id: 7, name: "Gucci" },
        { id: 8, name: "Prada" },
        { id: 9, name: "Burberry" },
        { id: 10, name: "Givenchy" },
        { id: 11, name: "Creed" },
        { id: 12, name: "Maison Francis Kurkdjian" },
        { id: 13, name: "Byredo" },
        { id: 14, name: "Jo Malone" },
        { id: 15, name: "Calvin Klein" },
        { id: 16, name: "Lancome" },
        { id: 17, name: "Hugo Boss" },
        { id: 18, name: "Montblanc" },
        { id: 19, name: "Bvlgari" },
        { id: 20, name: "Azzaro" },
    ]

    return (
        <Accordion type="single" defaultValue="brands" collapsible className="w-full">
            <AccordionItem value="brands">
                <AccordionTrigger className={'hover:no-underline py-[2px] font-semibold'}>
                    <h3 className="text-[18px]">Brendlər</h3>
                </AccordionTrigger>
                <AccordionContent className={'mt-[5px] pl-[5px] border-t pt-[5px] h-[230px] overflow-auto'}>
                    {brands.map(item => <p key={item.id} className="text-[16px] font-semibold" >{item.name}</p>)}
                </AccordionContent>
            </AccordionItem>

        </Accordion>
    )
}
