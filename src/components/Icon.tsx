import {
  ChefHat, Leaf, Sun, Martini, CalendarDays, Croissant, Heart, Baby,
  Clock, Home, Wine, PartyPopper, MapPin, Phone, Mail, type LucideProps,
} from 'lucide-react';

const map = {
  ChefHat, Leaf, Sun, Martini, CalendarDays, Croissant, Heart, Baby,
  Clock, Home, Wine, PartyPopper, MapPin, Phone, Mail,
} as const;

export type IconName = keyof typeof map;

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = map[name as IconName] ?? Leaf;
  return <Cmp {...props} />;
}
