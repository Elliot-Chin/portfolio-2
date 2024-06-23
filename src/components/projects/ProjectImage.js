import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import Image from "next/image"
import { useState } from "react"




export const ProjectImage = ({ alt, src, description, size, lg_size, bg }) => {

    const modalHandler = useDisclosure()

    return (


        <>

            <Modal
                isOpen={modalHandler.isOpen}
                onOpenChange={modalHandler.onOpenChange}
                size="5xl"
                placement="center"
                backdrop="blur"
                classNames={{
                    base: 'bg-opacity-20 bg-slate-600 glass-effect',
                    header: 'text-white'
                }}
            >
                <ModalContent>
                    <ModalHeader>
                        <span className="font-oswald lg:text-3xl">{alt}</span>
                    </ModalHeader>

                    <ModalBody className="flex items-center justify-center">
                        <Image
                            alt={alt}
                            height={2048}
                            src={src}
                            width={2048}
                            className={`w-3/4 ${bg || 'bg-white'} rounded-md`}
                            priority
                        />
                    </ModalBody>

                    <ModalFooter className="flex items-center justify-center">
                        <span className="text-white font-montserrat text-sm text-center italic lg:text-xl">{description}</span>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <div className={`rounded-md overflow-hidden flex flex-col gap-2 ${size || 'w-3/4'} mx-auto mt-5
                        lg:${lg_size || 'w-1/4'}`}>
                <Image
                    alt={alt}
                    height={1024}
                    src={src}
                    width={1024}
                    className="w-full bg-white rounded-md hover:cursor-pointer"
                    priority
                    onClick={() => modalHandler.onOpen()}
                />
                <span className="font-montserrat text-sm dark:text-white text-slate-950 text-center w-full italic">{description}</span>
            </div>
        </>
    )
}