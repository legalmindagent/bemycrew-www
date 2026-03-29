import {
  CalendarClock, ClipboardList, FolderKanban, BarChart3, MapPin, Workflow,
  Route, Smartphone, Camera, ScanBarcode, PenTool, FileText, Receipt, Users,
  LayoutDashboard, CalendarPlus, MessageSquare, Navigation, CreditCard,
  FileCheck, Wallet, Star, Brain, Bot, Mic, ScanSearch, Phone,
  Thermometer, Droplets, Zap, DoorOpen, KeyRound, Building2, Wrench,
  ShieldCheck, HardHat, Home, Building, House,
  MessageCircle, Package, HelpCircle, GraduationCap, ArrowLeftRight,
  Factory, DollarSign, CheckCircle, Target, Lock, Mail,
  type LucideProps
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  CalendarClock, ClipboardList, FolderKanban, BarChart3, MapPin, Workflow,
  Route, Smartphone, Camera, ScanBarcode, PenTool, FileText, Receipt, Users,
  LayoutDashboard, CalendarPlus, MessageSquare, Navigation, CreditCard,
  FileCheck, Wallet, Star, Brain, Bot, Mic, ScanSearch, Phone,
  Thermometer, Droplets, Zap, DoorOpen, KeyRound, Building2, Wrench,
  ShieldCheck, HardHat, Home, Building, House,
  MessageCircle, Package, HelpCircle, GraduationCap, ArrowLeftRight,
  Factory, DollarSign, CheckCircle, Target, Lock, Mail,
};

interface IconProps extends LucideProps {
  name: string;
}

export default function Icon({ name, ...props }: IconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
