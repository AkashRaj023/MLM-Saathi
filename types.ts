
export enum UserRole {
  ADMIN = 'ADMIN',
  VENDOR = 'VENDOR',
  MERCHANT = 'MERCHANT',
  DISTRIBUTOR = 'DISTRIBUTOR'
}

export type AccentIntensity = 'soft' | 'standard' | 'vivid';

export interface UIPreferences {
  theme: 'light' | 'dark';
  accentColor: string;
  accentIntensity: AccentIntensity;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  rank: string;
  avatar?: string;
  pv: number;
  bv: number;
  balance: number;
  preferences: UIPreferences;
}

export interface Merchant {
  id: string;
  name: string;
  network: string;
  avatar: string;
  status: 'ACTIVE' | 'INACTIVE';
  performanceScore: number;
  specialization: string;
  recentSales: number[];
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  date: string;
  category: 'REGULATORY' | 'GOVERNMENT' | 'MARKET';
}

export interface SupportTicket {
  id: string;
  query: string;
  status: 'RESOLVED' | 'ESCALATED' | 'PENDING';
  aiResponse?: string;
}

export interface GenealogyNode {
  id: string;
  name: string;
  rank: string;
  role: UserRole;
  children?: GenealogyNode[];
  pv: number;
  bv: number;
}

export interface PerformanceMetric {
  date: string;
  growth: number;
  revenue: number;
  newMembers: number;
}

export interface Transaction {
  id: string;
  type: 'COMMISSION' | 'PAYOUT' | 'PURCHASE' | 'TRANSFER' | 'WALLET_RECHARGE';
  amount: number;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  date: string;
  description: string;
}
