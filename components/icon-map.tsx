import {
  Apple,
  ArrowRight,
  Building2,
  Cake,
  CheckCircle,
  Clock,
  Coffee,
  Globe,
  Hammer,
  Heart,
  Leaf,
  Phone,
  Shield,
  ShoppingBag,
  ShoppingBasket,
  Smile,
  Sprout,
  Star,
  Store,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  Apple,
  ArrowRight,
  Building2,
  Cake,
  CheckCircle,
  Clock,
  Coffee,
  Globe,
  Hammer,
  Heart,
  Leaf,
  Phone,
  Shield,
  ShoppingBag,
  ShoppingBasket,
  Smile,
  Sprout,
  Star,
  Store,
  Truck,
  Users,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} />;
}
