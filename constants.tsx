
import { UserRole, User, Merchant, NewsItem, Transaction, PerformanceMetric, GenealogyNode } from './types.ts';

export const APP_NAME = "NexSaathi";

export const COLORS = {
  primary: '#00d09c',
  accent: '#1a73e8', // Google Blue
  bg: '#0f172a',
  surface: '#1e293b'
};

export const ACCENT_COLORS = [
  { name: 'Nexus Teal', value: '#00d09c' },
  { name: 'Royal Blue', value: '#1a73e8' },
  { name: 'Indian Saffron', value: '#ff9933' },
  { name: 'Deep Purple', value: '#6200ee' }
];

export const MOCK_MERCHANTS: Merchant[] = [
  { id: 'm1', name: 'Ayush Tiwari', network: 'Varanasi Central', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AyushT', status: 'ACTIVE', performanceScore: 94, specialization: 'FMCG', recentSales: [40, 55, 30, 80, 55, 90, 70] },
  { id: 'm2', name: 'Ankit Sharma', network: 'Indore Hub', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AnkitS', status: 'ACTIVE', performanceScore: 88, specialization: 'Health', recentSales: [20, 30, 45, 40, 60, 50, 65] },
  { id: 'm3', name: 'Abhay Pratap', network: 'Lucknow North', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AbhayP', status: 'ACTIVE', performanceScore: 76, specialization: 'Lifestyle', recentSales: [10, 20, 15, 30, 25, 40, 35] },
  { id: 'm4', name: 'Shubham Mishra', network: 'Delhi Metro', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=ShubhamM', status: 'INACTIVE', performanceScore: 45, specialization: 'Retail', recentSales: [40, 35, 30, 25, 20, 15, 10] },
  { id: 'm5', name: 'Yuvraj Singh', network: 'Chandigarh Star', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=YuvrajS', status: 'ACTIVE', performanceScore: 92, specialization: 'Agri-Tech', recentSales: [60, 70, 65, 80, 75, 90, 85] }
];

export const AKASH_RAJ: User = {
  id: 'akash-001',
  name: 'Akash Raj',
  email: 'akash.raj@nexsaathi.in',
  role: UserRole.DISTRIBUTOR,
  rank: 'Strategic Lead',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Akash',
  pv: 25800,
  bv: 980000,
  balance: 145200.00,
  preferences: {
    theme: 'dark',
    accentColor: '#00d09c',
    accentIntensity: 'standard'
  }
};

export const LEADERBOARD = [
  { name: 'Vikram Singh', volume: '₹12.4L', growth: '+15%' },
  { name: 'Rajesh Kumar', volume: '₹10.8L', growth: '+12%' },
  { name: 'Priya Verma', volume: '₹9.2L', growth: '+18%' },
  { name: 'Sanjay Gupta', volume: '₹8.5L', growth: '+9%' },
];

export const SUPPORT_CATEGORIES = [
  { id: 'billing', label: 'Payouts & TDS', icon: 'billing' },
  { id: 'kyc', label: 'Aadhar & Bank KYC', icon: 'kyc' },
  { id: 'network', label: 'Downline Chain', icon: 'network' },
  { id: 'merchants', label: 'Shop Integration', icon: 'merchants' },
  { id: 'compliance', label: 'Legal Policies', icon: 'compliance' },
];

export const REGULATORY_NEWS: NewsItem[] = [
  { id: 'n1', title: 'Direct Selling (Consumer Protection) Rules 2024 Update', source: 'Ministry of Consumer Affairs', url: '#', date: 'Mar 12, 2024', category: 'REGULATORY' },
  { id: 'n2', title: 'TDS Rate Revision for MLM Commissions Section 194H', source: 'Income Tax Dept', url: '#', date: 'Feb 28, 2024', category: 'GOVERNMENT' },
  { id: 'n3', title: 'Growing Trends in Direct-to-Home Distribution', source: 'FICCI Report', url: '#', date: 'Jan 20, 2024', category: 'MARKET' }
];

export const MOCK_PERFORMANCE: PerformanceMetric[] = [
  { date: 'Oct', growth: 12, revenue: 120000, newMembers: 30 },
  { date: 'Nov', growth: 18, revenue: 152000, newMembers: 45 },
  { date: 'Dec', growth: 25, revenue: 265000, newMembers: 85 },
  { date: 'Jan', growth: 32, revenue: 378000, newMembers: 120 },
  { date: 'Feb', growth: 28, revenue: 410000, newMembers: 110 }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 't1', type: 'COMMISSION', amount: 45000, status: 'COMPLETED', date: '2024-03-10', description: 'Feb Generation Bonus' },
  { id: 't2', type: 'WALLET_RECHARGE', amount: 5000, status: 'COMPLETED', date: '2024-03-05', description: 'Internal Transfer' },
  { id: 't3', type: 'PAYOUT', amount: -20000, status: 'PENDING', date: '2024-03-02', description: 'Bank Settlement' }
];

export const MOCK_PORTFOLIO = [
  { name: 'Business Volume', value: 450000, color: '#00d09c' },
  { name: 'Vesting Assets', value: 280000, color: '#1a73e8' },
  { name: 'Reserve Pool', value: 150000, color: '#ff9933' },
  { name: 'Liquid Bonus', value: 120000, color: '#6200ee' }
];

// Add missing MOCK_GENEALOGY export to fix errors in NetworkGenealogy.tsx and AIInsightsPanel.tsx
export const MOCK_GENEALOGY: GenealogyNode = {
  id: 'akash-001',
  name: 'Akash Raj',
  rank: 'Strategic Lead',
  role: UserRole.DISTRIBUTOR,
  pv: 25800,
  bv: 980000,
  children: [
    {
      id: 'vikram-002',
      name: 'Vikram Singh',
      rank: 'Diamond Director',
      role: UserRole.DISTRIBUTOR,
      pv: 12000,
      bv: 450000,
      children: [
        { id: 'raj-004', name: 'Rajesh Kumar', rank: 'Platinum', role: UserRole.DISTRIBUTOR, pv: 5000, bv: 180000 },
        { id: 'priya-005', name: 'Priya Verma', rank: 'Gold', role: UserRole.DISTRIBUTOR, pv: 4200, bv: 150000 },
      ]
    },
    {
      id: 'ankit-003',
      name: 'Ankit Sharma',
      rank: 'Emerald Director',
      role: UserRole.DISTRIBUTOR,
      pv: 8500,
      bv: 320000,
      children: [
        { id: 'sanjay-006', name: 'Sanjay Gupta', rank: 'Silver', role: UserRole.DISTRIBUTOR, pv: 3000, bv: 110000 },
      ]
    }
  ]
};

// Add missing MOCK_EXPENSES export to fix error in ExpenseTracker.tsx
export const MOCK_EXPENSES = [
  { id: 'e1', date: '2024-03-01', title: 'Cloud Infrastructure', category: 'Tech', amount: 12000 },
  { id: 'e2', date: '2024-03-05', title: 'Marketing Campaign', category: 'Growth', amount: 45000 },
  { id: 'e3', date: '2024-03-08', title: 'Legal Consultation', category: 'Legal', amount: 8000 },
  { id: 'e4', date: '2024-03-12', title: 'Office Maintenance', category: 'Operational', amount: 5000 },
  { id: 'e5', date: '2024-03-15', title: 'API Subscriptions', category: 'Tech', amount: 3500 },
];
