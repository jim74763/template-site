import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <Input placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Input type="email" placeholder="Email Address" />
            </div>
            <div className="space-y-2">
              <Input placeholder="Phone Number" />
            </div>
            <div className="space-y-2">
              <Textarea placeholder="Tell us about your project" className="min-h-[150px]" />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
