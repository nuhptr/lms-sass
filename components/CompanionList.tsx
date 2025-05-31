import Link from "next/link";
import Image from "next/image";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";

type Props = {
    title: string;
    // from index.d.ts
    companions?: Companion[];
    classNames?: string;
};

export const CompanionList = ({ classNames, companions, title }: Props) => {
    return (
        <article className={cn("companion-list", classNames)}>
            <h2 className="font-bold text-3xl">Recent Session</h2>

            <Table>
                <TableHeader>
                    <TableHead className="text-lg w-2/3">Lessons</TableHead>
                    <TableHead className="text-lg">Subject</TableHead>
                    <TableHead className="text-lg text-right">
                        Duration
                    </TableHead>
                    <TableHead className="text-lg text-right">Amount</TableHead>
                </TableHeader>
                <TableBody>
                    {companions?.map(
                        ({ id, subject, name, topic, duration }) => (
                            <TableRow key={id}>
                                <TableCell>
                                    <Link href={`/companions/${id}`}>
                                        <div className="flex items-center gap-8">
                                            <div
                                                className="size-[64px] flex items-center justify-center rounded-lg max-md:hidden"
                                                style={{
                                                    backgroundColor:
                                                        getSubjectColor(
                                                            subject
                                                        ),
                                                }}
                                            >
                                                <Image
                                                    src={`/icons/${subject}.svg`}
                                                    alt={subject}
                                                    width={28}
                                                    height={28}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="font-bold text-2xl">
                                                    {name}
                                                </p>
                                                <p className="text-lg">
                                                    {topic}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <div className="subject-badge w-fit max-md:hidden">
                                        {subject}
                                    </div>
                                    <div
                                        className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                                        style={{
                                            backgroundColor:
                                                getSubjectColor(subject),
                                        }}
                                    >
                                        <Image
                                            src={`/icons/${subject}.svg`}
                                            alt={subject}
                                            width={18}
                                            height={18}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
        </article>
    );
};
