import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Chip } from "@nextui-org/react";
import Image from "next/image";



export const ExpCard = ({ prop }) => {

    return (
        <Card className="dark:bg-slate-600 bg-gray-400 glass-effect bg-opacity-50">
            <CardHeader className="flex justify-between flex-col">
                <Image
                    alt={prop.imgAlt}
                    height={0}
                    radius="sm"
                    src={prop.imgSrc}
                    width={prop.smWidth || 128}
                    className="lg:hidden bg-white rounded-lg p-3 mt-3"
                    priority
                />
                <Image
                    alt={prop.imgAlt}
                    height={0}
                    radius="sm"
                    src={prop.imgSrc}
                    width={prop.lgWidth || 256}
                    className="hidden lg:flex w-1/2 bg-white p-3 rounded-lg mt-3"
                    priority
                />
            </CardHeader>

            <CardBody className="px-5">

                <div className="flex flex-col mb-5 font-montserrat text-white gap-1
                                        lg:mb-0">
                    <span className="text-2xl dark:text-slate-300 text-slate-950
                                            lg:text-4xl">{prop.title}</span>
                    <div className="flex flex-col gap-3">
                        <span className="text-sm font-oswald dark:text-slate-400 text-slate-950
                                            lg:text-xl">{prop.duration}</span>
                        {<Chip color={prop.coop && 'warning' || 'lg:transparent'} variant="flat" className={prop.coop && 'text-slate-950 dark:text-warning-600' || 'text-transparent'}>Co-Op</Chip>}
                    </div>
                </div>

                <Divider className="bg-slate-950 my-3" />

                <div className="flex flex-col mb-5 font-montserrat text-white">
                    <div className="rounded-md flex flex-col gap-2">

                        {
                            prop.skills?.map((skill, index) => (
                                <span className="dark:text-orange-300 text-slate-800 font-spacemono">{skill.label}</span>
                            ))
                        }
                        <Divider className="bg-slate-950 my-3" />

                        <p className="font-montserrat text-slate-950 dark:text-white" dangerouslySetInnerHTML={{ __html: prop.summary }} />
                    </div>
                </div>
            </CardBody>

            {prop.buttonLink && <CardFooter>
                <Button
                    size="md"
                    radius="lg"
                    variant="flat"
                    color='secondary'
                    className={`font-oswald text-lg text-white mx-auto fade-in mb-5`}
                    onClick={() => window.open(prop.buttonLink, '_blank')}
                >
                    View Employer Evaluation
                </Button>
            </CardFooter>}
        </Card>
    )
}