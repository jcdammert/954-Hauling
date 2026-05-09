import {
  Home,
  Truck,
  Building2,
  Trash2,
  Hammer,
  ShieldAlert,
  Package,
  Warehouse,
  KeyRound,
  Zap,
  HardHat,
  Archive,
  PackageOpen,
  Users,
  Shield,
  ShieldCheck,
  Star,
  Award,
  MapPin,
  Clock,
  CircleDollarSign,
  Phone,
  Mail,
  ChevronRight,
  Check,
  Quote,
  type LucideProps,
} from 'lucide-react';
import { type FC } from 'react';

const serviceIconMap: Record<string, FC<LucideProps>> = {
  'local-residential-moving': Home,
  'long-distance-moving': Truck,
  'commercial-office-moving': Building2,
  'junk-removal': Trash2,
  'demolition-services': Hammer,
  'hazardous-waste-removal': ShieldAlert,
  'small-deliveries': Package,
  'commercial-warehouse-deliveries': Warehouse,
  'estate-cleanouts': KeyRound,
  'appliance-removal': Zap,
  'construction-debris-removal': HardHat,
  'storage-solutions': Archive,
  'packing-services': PackageOpen,
  'labor-only-moving-help': Users,
};

export function ServiceIcon({
  slug,
  className = 'w-5 h-5',
}: {
  slug: string;
  className?: string;
}) {
  const Icon = serviceIconMap[slug] || Package;
  return <Icon className={className} />;
}

export {
  Shield,
  ShieldCheck,
  Star,
  Award,
  MapPin,
  Clock,
  CircleDollarSign,
  Phone,
  Mail,
  ChevronRight,
  Check,
  Quote,
  Truck,
  Home,
  Building2,
  Trash2,
  Hammer,
  Package,
  Users,
};
