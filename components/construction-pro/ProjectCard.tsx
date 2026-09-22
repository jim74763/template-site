import * as motion from "motion/react-client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { ConstructionProject } from "./types";

export function ProjectCard({ project, index }: { project: ConstructionProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="overflow-hidden p-0 h-full flex flex-col">
        <div className="relative h-64">
          <Image
            width={project.width}
            height={project.height}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full">
            {project.category}
          </div>
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">{project.details.location}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium">{project.details.duration}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Size</p>
              <p className="font-medium">{project.details.size}</p>
            </div>
          </div>
          <Button className="w-full">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
