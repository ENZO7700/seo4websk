
'use client';

import { useEffect, useState, useMemo } from 'react';
import { db } from '@/lib/firebase-config';
import {
  collection,
  getDocs,
  orderBy,
  query,
  limit,
} from 'firebase/firestore';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertCircle,
  Users,
  Clock,
  Zap,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Wand2,
  Loader2,
  Monitor,
  Smartphone,
  Tablet,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  analyzeHeadline,
  AnalyzeHeadlineOutput,
} from '@/ai/flows/analyze-headline-flow';
import { Progress } from '@/components/ui/progress';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const kpiData = [
  {
    title: 'Návštevnosť',
    value: '2,420',
    change: '+12.5%',
    changeType: 'increase',
    icon: <Users />,
  },
  {
    title: 'Bounce Rate',
    value: '45.2%',
    change: '-5.2%',
    changeType: 'decrease',
    icon: <Zap />,
  },
  {
    title: 'Dĺžka Návštevy',
    value: '3m 15s',
    change: '+2m',
    changeType: 'increase',
    icon: <Clock />,
  },
  {
    title: 'Konverzie',
    value: '128',
    change: '+15',
    changeType: 'increase',
    icon: <CheckCircle />,
  },
];

const topPagesData = [
    { page: '/tahaky', views: 845, conversion: '12.5%' },
    { page: '/pricing', views: 612, conversion: '8.2%' },
    { page: '/', views: 578, conversion: '5.1%' },
    { page: '/sluzby/pwa-pre-male-podniky', views: 321, conversion: '15.8%' },
    { page: '/contact', views: 256, conversion: '25.0%' },
];

const keywordData = [
  { keyword: 'seo optimalizacia', position: 3, change: 1 },
  { keyword: 'pwa aplikacie', position: 5, change: -1 },
  { keyword: 'cena seo', position: 8, change: 0 },
  { keyword: 'seo analyza', position: 12, change: 3 },
  { keyword: 'link building slovensko', position: 15, change: -2 },
];


const deviceData = [
    { name: 'Desktop', value: 400, icon: Monitor },
    { name: 'Mobil', value: 300, icon: Smartphone },
    { name: 'Tablet', value: 100, icon: Tablet },
];
const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--secondary))'];


function HeadlineAnalyzerWidget() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [headline, setHeadline] = useState('');
  const [analysisResult, setAnalysisResult] =
    useState<AnalyzeHeadlineOutput | null>(null);

  const handleAnalyze = async () => {
    if (!headline.trim()) {
      toast({
        variant: 'destructive',
        title: 'Vstup je povinný',
        description: 'Prosím, zadajte titulok na analýzu.',
      });
      return;
    }
    setIsLoading(true);
    setAnalysisResult(null);
    try {
      const result = await analyzeHeadline({ headline });
      setAnalysisResult(result);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Nastala chyba!',
        description:
          'Vyskytol sa problém s AI. Skúste to prosím znova.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 />
          Rýchly Analyzátor Titulkov
        </CardTitle>
        <CardDescription>
          Otestujte silu vašich nadpisov priamo tu.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-2">
          <Textarea
            placeholder="Zadajte váš titulok sem..."
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="min-h-[80px]"
          />
          <Button onClick={handleAnalyze} disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              'Analyzovať'
            )}
          </Button>
        </div>
        {analysisResult && (
          <div className="mt-4 space-y-2 animate-fade-in-up">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-muted-foreground">
                SEO Skóre
              </p>
              <p className="text-lg font-bold text-primary">
                {analysisResult.score}/100
              </p>
            </div>
            <Progress value={analysisResult.score} />
            <div
              className="prose prose-sm dark:prose-invert text-left text-balance max-w-none pt-2"
              dangerouslySetInnerHTML={{
                __html: analysisResult.analysis.replace(/\n/g, '<br />'),
              }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}


export default function DashboardPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isFirebaseConfigured = !!db;

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setIsLoading(false);
      return;
    }

    const fetchMessages = async () => {
      try {
        const messagesCollection = collection(db, 'messages');
        const q = query(
          messagesCollection,
          orderBy('createdAt', 'desc'),
          limit(5)
        );
        const messagesSnapshot = await getDocs(q);
        const messagesList = messagesSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            email: data.email,
            message: data.message,
            createdAt:
              data.createdAt?.toDate().toLocaleDateString('sk-SK') ||
              'Neznámy dátum',
          };
        });
        setMessages(messagesList);
      } catch (err) {
        console.error('Error fetching messages: ', err);
        setError('Nepodarilo sa načítať správy z databázy.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [isFirebaseConfigured]);
  
  const memoizedDeviceChart = useMemo(() => (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={deviceData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {deviceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltipContent nameKey="name" hideIndicator />} />
        <Legend iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
  ), []);


  return (
    <main className="container mx-auto px-4 py-24 sm:py-32">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
            Hlavný Dashboard
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70 text-balance">
            Váš komplexný prehľad kľúčových metrík, výkonnosti a aktivít.
          </p>
        </div>

        {!isFirebaseConfigured ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Konfigurácia Chýba</AlertTitle>
            <AlertDescription>
              Dashboard je dočasne mimo prevádzky z dôvodu chýbajúcej Firebase
              konfigurácie.
            </AlertDescription>
          </Alert>
        ) : (
          <>
            <section id="kpi-cards" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {kpiData.map((kpi, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {kpi.title}
                    </CardTitle>
                    <div className="text-muted-foreground">{kpi.icon}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{kpi.value}</div>
                    <p
                      className={`text-xs ${kpi.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {kpi.change} oproti minulému mesiacu
                    </p>
                  </CardContent>
                </Card>
              ))}
            </section>
            
            <section id="main-grid" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
               <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Najvýkonnejšie Stránky</CardTitle>
                        <CardDescription>Top 5 stránok podľa počtu zobrazení za posledných 30 dní.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Stránka</TableHead>
                                    <TableHead>Zobrazenia</TableHead>
                                    <TableHead>Miera Konverzie</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {topPagesData.map((page, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium text-primary hover:underline cursor-pointer">{page.page}</TableCell>
                                        <TableCell>{page.views.toLocaleString()}</TableCell>
                                        <TableCell>{page.conversion}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
               </Card>
               <Card>
                 <CardHeader>
                    <CardTitle>Rozdelenie Zariadení</CardTitle>
                     <CardDescription>Návštevnosť podľa typu zariadenia.</CardDescription>
                 </CardHeader>
                 <CardContent className="flex items-center justify-center">
                    {memoizedDeviceChart}
                 </CardContent>
               </Card>
            </section>

             <section id="secondary-grid" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                 <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Výkonnosť Kľúčových Slov</CardTitle>
                        <CardDescription>Aktuálne pozície a zmeny pre sledované kľúčové slová.</CardDescription>
                    </CardHeader>
                     <CardContent>
                         <Table>
                             <TableHeader>
                                 <TableRow>
                                     <TableHead>Kľúčové Slovo</TableHead>
                                     <TableHead>Aktuálna Pozícia</TableHead>
                                     <TableHead>Zmena (30 dní)</TableHead>
                                 </TableRow>
                             </TableHeader>
                             <TableBody>
                                 {keywordData.map((kw, index) => (
                                     <TableRow key={index}>
                                         <TableCell className="font-medium">{kw.keyword}</TableCell>
                                         <TableCell className="font-bold text-lg">{kw.position}</TableCell>
                                         <TableCell>
                                             <div className={`flex items-center gap-1 ${kw.change > 0 ? 'text-green-500' : kw.change < 0 ? 'text-red-500' : 'text-muted-foreground'}`}>
                                                 {kw.change > 0 ? <TrendingUp size={16} /> : kw.change < 0 ? <TrendingDown size={16} /> : <ArrowRight size={16} />}
                                                 <span>{kw.change !== 0 ? Math.abs(kw.change) : '-'}</span>
                                             </div>
                                         </TableCell>
                                     </TableRow>
                                 ))}
                             </TableBody>
                         </Table>
                     </CardContent>
                 </Card>
                 <HeadlineAnalyzerWidget />
             </section>

            <section id="contact-messages">
              <Card>
                <CardHeader>
                  <CardTitle>Posledné Správy z Kontaktného Formulára</CardTitle>
                  <CardDescription>
                    Prehľad 5 najnovších správ odoslaných cez kontaktný formulár.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="space-y-4">
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-12 w-full" />
                    </div>
                  ) : error ? (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Chyba pri načítaní</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Dátum</TableHead>
                          <TableHead>Meno</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Správa</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {messages.map((msg) => (
                          <TableRow key={msg.id}>
                            <TableCell className="font-medium">
                              {msg.createdAt}
                            </TableCell>
                            <TableCell>{msg.name}</TableCell>
                            <TableCell>{msg.email}</TableCell>
                            <TableCell className="truncate max-w-[200px]">{msg.message}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </section>
          </>
        )}
      </div>
    </main>
  );
}


    