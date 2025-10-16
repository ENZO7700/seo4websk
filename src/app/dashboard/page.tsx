
'use client';

import { useEffect, useState, useMemo } from 'react';
import { db } from '@/lib/firebase-config';
import {
  collection,
  getDocs,
  orderBy,
  query,
  limit,
  where,
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
import {
    generateKeywordData,
    GenerateKeywordDataOutput,
} from '@/ai/flows/generate-keyword-data-flow';
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

  const deviceData = [
      { name: 'Desktop', value: Math.floor(Math.random() * 200) + 300, icon: Monitor },
      { name: 'Mobil', value: Math.floor(Math.random() * 200) + 250, icon: Smartphone },
      { name: 'Tablet', value: Math.floor(Math.random() * 100) + 50, icon: Tablet },
  ];
  
  return { topPagesData, deviceData };
};

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))'];


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
        <CardTitle className="flex items-center gap-2 text-xl md:text-2xl text-foreground">
          <Wand2 className='text-primary' />
          Rýchly Analyzátor Titulkov
        </CardTitle>
        <CardDescription className='text-muted-foreground'>
          Otestujte silu vašich nadpisov priamo tu.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-2">
          <Textarea
            placeholder="Zadajte váš titulok sem..."
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="min-h-[80px] bg-background text-foreground"
          />
          <Button onClick={handleAnalyze} disabled={isLoading} variant="default">
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
            {analysisResult.audioDataUri && (
                <div className='flex items-center justify-center p-2 bg-muted/50 rounded-md mt-2'>
                    <audio controls src={analysisResult.audioDataUri} className="w-full h-10">
                        Váš prehliadač nepodporuje audio element.
                    </audio>
                </div>
            )}
            <div
              className="prose prose-sm dark:prose-invert text-left text-balance max-w-none pt-2 text-foreground"
              dangerouslySetInnerHTML={{
                __html: analysisResult.analysis.replace(/(\*\*.*?\*\*)/g, '<h4>$1</h4>').replace(/\*/g, '<li>'),
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
        <CardTitle className="text-sm font-medium text-foreground">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
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
  const [keywordData, setKeywordData] = useState<GenerateKeywordDataOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const firebaseConfigured = isFirebaseConfigured();
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const { topPagesData, deviceData } = useMemo(() => generateRandomData(), []);

  useEffect(() => {
    if (!authLoading && !user) {
        router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!user || !firebaseConfigured) {
        if (!authLoading) {
            setIsLoading(false);
        }
        return;
    };

    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const kpiPromise = generateKpiData();
        const keywordPromise = generateKeywordData();
        
        const messagesCollection = collection(db!, 'messages');
        const q = query(
            messagesCollection,
            where('userId', '==', user.uid),
            orderBy('createdAt', 'desc'),
            limit(5)
        );
        const messagesPromise = getDocs(q);
        
        const [kpiResult, keywordResult, messagesSnapshot] = await Promise.all([
            kpiPromise,
            keywordPromise,
            messagesPromise,
        ]);

        setKpiData(kpiResult);
        setKeywordData(keywordResult);
        
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
  }, [user, authLoading, firebaseConfigured]);
  
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
          className='text-muted-foreground'
        >
          {deviceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltipContent nameKey="name" hideIndicator />} cursor={{fill: 'hsla(var(--muted))'}} />
        <Legend iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
  ), [deviceData]);

  const kpiCards = kpiData ? [
    { title: 'Návštevnosť', value: formatNumber(kpiData.traffic.value), change: `${kpiData.traffic.change > 0 ? '+' : ''}${kpiData.traffic.change}%`, changeType: kpiData.traffic.change > 0 ? 'increase' : 'decrease', icon: <Users /> },
    { title: 'Miera Odchodov', value: `${kpiData.bounceRate.value.toFixed(1)}%`, change: `${kpiData.bounceRate.change > 0 ? '+' : ''}${kpiData.bounceRate.change.toFixed(1)}%`, changeType: kpiData.bounceRate.change > 0 ? 'decrease' : 'increase', icon: <Zap /> },
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-foreground">
            Môj Dashboard
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            Váš osobný prehľad kľúčových metrík, výkonnosti a aktivít.
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
                        <CardTitle className='text-foreground'>Najvýkonnejšie Stránky</CardTitle>
                        <CardDescription className='text-muted-foreground'>Top 5 stránok podľa počtu zobrazení za posledných 30 dní.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {isLoading ? <Skeleton className="h-[240px]" /> : (
                            <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='text-muted-foreground'>Stránka</TableHead>
                                        <TableHead className='text-muted-foreground'>Zobrazenia</TableHead>
                                        <TableHead className='text-muted-foreground'>Miera Konverzie</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {topPagesData.map((page, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium text-primary hover:underline cursor-pointer">{page.page}</TableCell>
                                            <TableCell className='text-foreground'>{formatNumber(page.views)}</TableCell>
                                            <TableCell className='text-foreground'>{page.conversion}</TableCell>
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
                    <CardTitle className='text-foreground'>Rozdelenie Zariadení</CardTitle>
                    <CardDescription className='text-muted-foreground'>Návštevnosť podľa typu zariadenia.</CardDescription>
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
                        <CardTitle className='text-foreground'>Výkonnosť Kľúčových Slov</CardTitle>
                        <CardDescription className='text-muted-foreground'>Aktuálne pozície a zmeny pre sledované kľúčové slová.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {isLoading || !keywordData ? <Skeleton className="h-[260px]" /> : (
                            <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='text-muted-foreground'>Kľúčové Slovo</TableHead>
                                        <TableHead className='text-muted-foreground'>Aktuálna Pozícia</TableHead>
                                        <TableHead className='text-muted-foreground'>Zmena (30 dní)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {keywordData.keywords.map((kw, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium text-foreground">{kw.keyword}</TableCell>
                                            <TableCell className="font-bold text-lg text-foreground">{kw.position}</TableCell>
                                            <TableCell>
                                                <div className={`flex items-center gap-1 ${kw.change < 0 ? 'text-green-500' : kw.change > 0 ? 'text-red-500' : 'text-muted-foreground'}`}>
                                                    {kw.change < 0 ? <TrendingUp size={16} /> : kw.change > 0 ? <TrendingDown size={16} /> : <ArrowRight size={16} />}
                                                    <span className='text-foreground'>{kw.change !== 0 ? Math.abs(kw.change) : '-'}</span>
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
              <CardTitle className='text-foreground'>Moje Posledné Správy</CardTitle>
              <CardDescription className='text-muted-foreground'>
                Prehľad 5 najnovších správ, ktoré ste odoslali cez kontaktný formulár.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading && firebaseConfigured ? (
                <div className="space-y-4">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                </div>
              ) : messages.length > 0 ? (
                <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='text-muted-foreground'>Dátum</TableHead>
                      <TableHead className='text-muted-foreground'>Meno</TableHead>
                      <TableHead className='text-muted-foreground'>Email</TableHead>
                      <TableHead className='text-muted-foreground'>Správa</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {messages.map((msg) => (
                      <TableRow key={msg.id}>
                        <TableCell className="font-medium text-foreground">
                          {msg.createdAt}
                        </TableCell>
                        <TableCell className='text-foreground'>{msg.name}</TableCell>
                        <TableCell className='text-foreground'>{msg.email}</TableCell>
                        <TableCell className="truncate max-w-[200px] text-foreground">{msg.message}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                </div>
              ) : (
                 <div className="text-center py-4">
                    {!firebaseConfigured ? (
                        <Alert variant="default" className='bg-muted/50 text-left'>
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Konfigurácia Chýba</AlertTitle>
                            <AlertDescription className='text-muted-foreground'>
                                Pre zobrazenie správ je potrebné nakonfigurovať Firebase.
                            </AlertDescription>
                        </Alert>
                    ) : (
                         <p className="text-sm text-muted-foreground">Zatiaľ ste neodoslali žiadne správy.</p>
                    )}
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
