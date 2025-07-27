'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase-config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Line, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const chartData = [
    { month: 'Január', visitors: 186, conversions: 80 },
    { month: 'Február', visitors: 305, conversions: 200 },
    { month: 'Marec', visitors: 237, conversions: 120 },
    { month: 'Apríl', visitors: 473, conversions: 190 },
    { month: 'Máj', visitors: 320, conversions: 130 },
    { month: 'Jún', visitors: 450, conversions: 250 },
];

const chartConfig = {
  visitors: {
    label: 'Návštevníci',
    color: 'hsl(var(--primary))',
  },
  conversions: {
    label: 'Konverzie',
    color: 'hsl(var(--accent))',
  },
};


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
        const q = query(messagesCollection, orderBy('createdAt', 'desc'));
        const messagesSnapshot = await getDocs(q);
        const messagesList = messagesSnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                name: data.name,
                email: data.email,
                message: data.message,
                createdAt: data.createdAt?.toDate().toLocaleDateString('sk-SK') || 'Neznámy dátum',
            }
        });
        setMessages(messagesList);
      } catch (err) {
        console.error("Error fetching messages: ", err);
        setError('Nepodarilo sa načítať správy z databázy.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [isFirebaseConfigured]);

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32">
       <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
                Dashboard
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70 text-balance">
                Prehľad kľúčových metrík a aktivít na vašej stránke.
              </p>
            </div>

            {!isFirebaseConfigured ? (
                 <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Konfigurácia Chýba</AlertTitle>
                    <AlertDescription>
                        Dashboard je dočasne mimo prevádzky z dôvodu chýbajúcej Firebase konfigurácie.
                    </AlertDescription>
                </Alert>
            ) : (
                <>
                    <section id="analytics-charts">
                        <div className="grid gap-8 md:grid-cols-2">
                             <Card>
                                <CardHeader>
                                    <CardTitle>Návštevnosť a Konverzie</CardTitle>
                                    <CardDescription>Vývoj za posledných 6 mesiacov</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                                        <LineChart accessibilityLayer data={chartData}>
                                            <CartesianGrid vertical={false} />
                                            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                                            <ChartTooltip content={<ChartTooltipContent />} />
                                            <Legend />
                                            <Line dataKey="visitors" type="monotone" stroke="var(--color-visitors)" strokeWidth={2} dot={false} name="Návštevníci" />
                                            <Line dataKey="conversions" type="monotone" stroke="var(--color-conversions)" strokeWidth={2} dot={false} name="Konverzie" />
                                        </LineChart>
                                    </ChartContainer>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader>
                                    <CardTitle>Zdroje Návštevnosti</CardTitle>
                                     <CardDescription>Podiel jednotlivých zdrojov</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                                        <BarChart accessibilityLayer data={[
                                            { source: 'Organické', value: 45 },
                                            { source: 'Priame', value: 25 },
                                            { source: 'Referral', value: 15 },
                                            { source: 'Sociálne', value: 10 },
                                            { source: 'PPC', value: 5 },
                                        ]}>
                                             <CartesianGrid vertical={false} />
                                             <XAxis dataKey="source" tickLine={false} axisLine={false} tickMargin={8} />
                                             <YAxis />
                                             <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                                             <Bar dataKey="value" fill="var(--color-visitors)" radius={4} name="Podiel" />
                                        </BarChart>
                                    </ChartContainer>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                    
                    <section id="contact-messages">
                        <Card>
                        <CardHeader>
                            <CardTitle>Odoslané Správy</CardTitle>
                            <CardDescription>Zoznam správ odoslaných cez kontaktný formulár.</CardDescription>
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
                                        <TableCell className="font-medium">{msg.createdAt}</TableCell>
                                        <TableCell>{msg.name}</TableCell>
                                        <TableCell>{msg.email}</TableCell>
                                        <TableCell>{msg.message}</TableCell>
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
