import * as motion from "motion/react-client";
import { Phone, Mail, MapPin } from "lucide-react";
import type { ConstructionContactData } from "@/lib/website-content/construction-pro/types";

export function ContactInfo({
  contactInfo,
  businessHours,
  serviceAreas,
}: {
  contactInfo: ConstructionContactData["contactInfo"];
  businessHours: ConstructionContactData["businessHours"];
  serviceAreas: ConstructionContactData["serviceAreas"];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-primary mr-3" />
            <span>{contactInfo.phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-primary mr-3" />
            <span>{contactInfo.email}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-primary mr-3" />
            <span>{contactInfo.address}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
        <div className="space-y-2">
          {businessHours.map((entry) => (
            <p key={entry.label}>
              {entry.label}: {entry.hours}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">{serviceAreas.title}</h3>
        <p className="text-muted-foreground">{serviceAreas.text}</p>
      </div>
    </motion.div>
  );
}
