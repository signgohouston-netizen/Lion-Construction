import { HardHat, Home, CookingPot, Bath, Expand, Warehouse, Building2, Layers, Fence, PaintRoller, House, DoorOpen, Grid3x3 } from "lucide-react";
import type { Service } from "@/data/services";

const icons = { HardHat, Home, CookingPot, Bath, Expand, Warehouse, Building2, Layers, Fence, PaintRoller, House, DoorOpen, Grid3x3 };

export function ServiceIcon({ icon, className = "h-7 w-7" }: { icon: Service["icon"]; className?: string }) {
  const Icon = icons[icon];
  return <Icon className={className} aria-hidden="true" />;
}
