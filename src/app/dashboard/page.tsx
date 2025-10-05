
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
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
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
import {
    generateKpiData,
    GenerateKpiDataOutput,
} from '@/ai/flows/generate-kpi-data-flow';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { formatNumber } from '@/lib/utils';
import { isFirebaseConfigured } from '@/lib/firebase-config';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: React.ReactNode;
}

const generateRandomData = () => {
  const topPagesData = [
    { page: '/tahaky', views: Math.floor(Math.random() * 500) + 500, conversion: `${(Math.random() * 10 + 5).toFixed(1)}%` },
    { page: '/pricing', views: Math.floor(Math.random() * 400) + 400, conversion: `${(Math.random() * 8 + 4).toFixed(1)}%` },
    { page: '/', views: Math.floor(Math.random() * 300) + 300, conversion: `${(Math.random() * 5 + 2).toFixed(1)}%` },
    { page: '/sluzby/pwa-pre-male-podniky', views: Math.floor(Math.random() * 200) + 200, conversion: `${(Math.random() * 15 + 10).toFixed(1)}%` },
    { page: '/contact', views: Math.floor(Math.random() * 150) + 150, conversion: `${(Math.random() * 20 + 15).toFixed(1)}%` },
  ];

  const keywordData = [
    { keyword: 'seo optimalizacia', position: Math.floor(Math.random() * 3) + 1, change: Math.floor(Math.random() * 5) - 2 },
    { keyword: 'pwa aplikacie', position: Math.floor(Math.random() * 5) + 3, change: Math.floor(Math.random() * 5) - 2 },
    { keyword: 'cena seo', position: Math.floor(Math.random() * 7) + 5, change: Math.floor(Math.random() * 5) - 2 },
    { keyword: 'seo analyza', position: Math.floor(Math.random() * 10) + 8, change: Math.floor(Math.random() * 5) - 2 },
    { keyword: 'link building slovensko', position: Math.floor(Math.random() * 10) + 10, change: Math.floor(Math.random() * 5) - 2 },
  ];

  const deviceData = [
      { name: 'Desktop', value: Math.floor(Math.random() * 200) + 300, icon: Monitor },
      { name: 'Mobil', value: Math.floor(Math.random() * 200) + 250, icon: Smartphone },
      { name: 'Tablet', value: Math.floor(Math.random() * 100) + 50, icon: Tablet },
  ];
  
  return { topPagesData, keywordData, deviceData };
};

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
        <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
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
          <motion.div
            className="mt-4 space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
                __html: analysisResult.analysis.replace(/\\n/g, '<br />'),
              }}
            />
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}


function KpiCard({ title, value, change, changeType, icon }: KpiCardProps) {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-green-500' : 'text-red-500';

  return (
     <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${changeColor}`}>
          {change} oproti minulému mesiacu
        </p>
      </CardContent>
    </Card>
  )
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "anticipate",
      },
    },
  };

export default function DashboardPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [kpiData, setKpiData] = useState<GenerateKpiDataOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const firebaseConfigured = isFirebaseConfigured();
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const { topPagesData, keywordData, deviceData } = useMemo(() => generateRandomData(), []);

  useEffect(() => {
    if (!authLoading && !user) {
        router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!user) return; // Don't fetch data if user is not authenticated

    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const kpiPromise = generateKpiData();
        
        let messagesPromise: Promise<any> = Promise.resolve(null);
        if (firebaseConfigured) {
          const messagesCollection = collection(db!, 'messages');
          const q = query(
            messagesCollection,
            orderBy('createdAt', 'desc'),
            limit(5)
          );
          messagesPromise = getDocs(q);
        }
        
        const [kpiResult, messagesSnapshot] = await Promise.all([
            kpiPromise,
            messagesPromise,
        ]);

        setKpiData(kpiResult);
        
        if (messagesSnapshot) {
            const messagesList = messagesSnapshot.docs.map((doc: any) => {
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
        }

      } catch (err) {
        setError('Nepodarilo sa načítať dáta pre dashboard.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [user, firebaseConfigured]);
  
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
  ), [deviceData]);

  const kpiCards = kpiData ? [
    { title: 'Návštevnosť', value: formatNumber(kpiData.traffic.value), change: `${kpiData.traffic.change > 0 ? '+' : ''}${kpiData.traffic.change}%`, changeType: kpiData.traffic.change > 0 ? 'increase' : 'decrease', icon: <Users /> },
    { title: 'Bounce Rate', value: `${kpiData.bounceRate.value.toFixed(1)}%`, change: `${kpiData.bounceRate.change > 0 ? '+' : ''}${kpiData.bounceRate.change.toFixed(1)}%`, changeType: kpiData.bounceRate.change > 0 ? 'decrease' : 'increase', icon: <Zap /> },
    { title: 'Dĺžka Návštevy', value: `${kpiData.visitDuration.minutes}m ${kpiData.visitDuration.seconds}s`, change: `${kpiData.visitDuration.change > 0 ? '+' : ''}${Math.floor(kpiData.visitDuration.change / 60)}m ${kpiData.visitDuration.change % 60}s`, changeType: kpiData.visitDuration.change > 0 ? 'increase' : 'decrease', icon: <Clock /> },
    { title: 'Konverzie', value: formatNumber(kpiData.conversions.value), change: `${kpiData.conversions.change > 0 ? '+' : ''}${kpiData.conversions.change}`, changeType: kpiData.conversions.change > 0 ? 'increase' : 'decrease', icon: <CheckCircle /> },
  ] : [];

  if (authLoading || !user) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
    );
  }


  return (
    <main className="container mx-auto px-4 py-24 sm:py-32">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Hlavný Dashboard
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70 text-balance">
            Váš komplexný prehľad kľúčových metrík, výkonnosti a aktivít.
          </p>
        </div>

        {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Chyba pri načítaní dát</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        
        <motion.section 
            id="kpi-cards" 
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
          {isLoading || !kpiData ? (
            Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-[126px]" />)
          ) : (
            kpiCards.map((kpi, index) => <motion.div variants={itemVariants} key={index}><KpiCard {...kpi} /></motion.div>)
          )}
        </motion.section>
        
        <motion.section 
            id="main-grid" 
            className="grid gap-4 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
           <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Card>
                    <CardHeader>
                        <CardTitle>Najvýkonnejšie Stránky</CardTitle>
                        <CardDescription>Top 5 stránok podľa počtu zobrazení za posledných 30 dní.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {isLoading ? <Skeleton className="h-[240px]" /> : (
                            <div className="overflow-x-auto">
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
                                            <TableCell>{formatNumber(page.views)}</TableCell>
                                            <TableCell>{page.conversion}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            </div>
                        )}
                    </CardContent>
            </Card>
           </motion.div>
           <motion.div variants={itemVariants}>
            <Card>
                <CardHeader>
                    <CardTitle>Rozdelenie Zariadení</CardTitle>
                    <CardDescription>Návštevnosť podľa typu zariadenia.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center pt-6">
                    {isLoading ? <Skeleton className="h-[250px] w-full" /> : memoizedDeviceChart}
                </CardContent>
            </Card>
           </motion.div>
        </motion.section>

         <motion.section 
            id="secondary-grid" 
            className="grid gap-4 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
             <motion.div className="lg:col-span-2" variants={itemVariants}>
                <Card>
                    <CardHeader>
                        <CardTitle>Výkonnosť Kľúčových Slov</CardTitle>
                        <CardDescription>Aktuálne pozície a zmeny pre sledované kľúčové slová.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {isLoading ? <Skeleton className="h-[260px]" /> : (
                            <div className="overflow-x-auto">
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
                            </div>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
                <HeadlineAnalyzerWidget />
            </motion.div>
         </motion.section>

        <section id="contact-messages">
          <Card>
            <CardHeader>
              <CardTitle>Posledné Správy</CardTitle>
              <CardDescription>
                Prehľad 5 najnovších správ odoslaných cez kontaktný formulár.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                   {!firebaseConfigured ? (
                     <Alert variant="default">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Konfigurácia Chýba</AlertTitle>
                        <AlertDescription>
                            Pre zobrazenie správ je potrebné nakonfigurovať Firebase.
                        </AlertDescription>
                    </Alert>
                   ) : (
                    <>
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-12 w-full" />
                    </>
                   )}
                </div>
              ) : messages.length > 0 ? (
                <div className="overflow-x-auto">
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
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">Zatiaľ žiadne správy.</p>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
