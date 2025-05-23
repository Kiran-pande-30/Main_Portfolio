import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface TravelProps {
  href?: string;
  title: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  className?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

export function TravelCard({
  title,
  description,
  dates,
  tags,
  image,
  video,
  className,
}: TravelProps) {
  return (
    <Card
      className={cn(
        "flex flex-col md:flex-row w-full overflow-hidden border hover:shadow-md transition-all duration-300 ease-out",
        className
      )}
    >
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col justify-between md:w-1/2 w-full p-4">
        <CardHeader className="p-0">
          <CardTitle className="text-xl">{title}</CardTitle>
          <time className="text-sm text-muted-foreground">{dates}</time>
        </CardHeader>

        <CardContent className="p-0 mt-2">
          <Markdown className="prose max-w-full text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </CardContent>

        {tags && tags.length > 0 && (
          <CardFooter className="p-0 mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[11px] px-2 py-1"
              >
                {tag}
              </Badge>
            ))}
          </CardFooter>
        )}
      </div>
    </Card>
  );
}
