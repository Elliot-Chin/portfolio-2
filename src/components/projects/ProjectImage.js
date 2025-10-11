// components/projects/ProjectImage.js
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"

export const ProjectImage = ({ alt, src, description, lg_size, bg, maxH }) => {
    const modalHandler = useDisclosure()

    const maxHClasses = maxH ?? "max-h-full" // e.g. "max-h-[30vh] sm:max-h-[35vh] lg:max-h-[40vh]"

    return (
        <>
            <Modal
                isOpen={modalHandler.isOpen}
                onOpenChange={modalHandler.onOpenChange}
                size="5xl"
                placement="center"
                backdrop="blur"
                classNames={{ base: "bg-opacity-20 bg-slate-600 glass-effect", header: "text-white" }}
            >
                <ModalContent>
                    <ModalHeader><span className="font-raleway lg:text-3xl">{alt}</span></ModalHeader>
                    <ModalBody className="flex items-center justify-center">
                        <img alt={alt} src={src} className={`max-w-full h-auto object-contain rounded-md  ${maxHClasses}`} />
                    </ModalBody>
                    <ModalFooter className="flex items-center justify-center">
                        <span className="text-white font-montserrat text-sm text-center italic lg:text-xl">{description}</span>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <div className={`rounded-md flex flex-col gap-2 mx-auto mt-5 w-full ${lg_size ? `xl:${lg_size}` : "xl:w-1/3"}`}>
                <div className={`w-full rounded-md flex items-center justify-center`}>
                    <img
                        alt={alt}
                        src={src}
                        onClick={() => modalHandler.onOpen()}
                        className={`w-full h-auto object-contain bg-transparent hover:cursor-pointer ${maxHClasses}`}
                    />
                </div>
                <span className="font-montserrat text-sm dark:text-white text-slate-950 text-center w-full italic">
                    {description}
                </span>
            </div>
        </>
    )
}
