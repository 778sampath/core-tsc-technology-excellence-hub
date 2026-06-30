import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { kpis, platformCoverage, chartData, activities } from "@/mock-data";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { ArrowUpRight, Target, Box, FlaskConical, Cpu, Cable, Sparkles, Layers } from "lucide-react";

export default function Dashboard() {
  const COLORS = ["#056BFC", "#3FD534", "#FABD00", "#60a5fa", "#16a34a"];

  return (
    <div className="space-y-6">
      <motion.section
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] text-slate-50 p-8 shadow-[0_30px_90px_rgba(5,107,252,0.18)] bg-gradient-to-br from-[#056BFC] via-[#0C64D6] to-[#033B8C]"
      >
        <div className="absolute inset-0 opacity-80">
          <div className="absolute left-4 top-10 h-52 w-52 rounded-full bg-[#3FD534]/20 blur-3xl" />
          <div className="absolute right-8 top-24 h-64 w-64 rounded-full bg-[#FABD00]/20 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#000000]/10 blur-2xl" />
        </div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.75fr_1.1fr] items-center">
          <div className="space-y-6">
            <Badge className="bg-white/15 text-white border border-white/20 px-3 py-1 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" /> Core TSC Hub
            </Badge>
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Accelerating Insurance Transformation
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Drive faster decisions with platform intelligence, reusable assets, and operational excellence. A dashboard built for modern insurance teams.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Ready assets", value: "0" },
                { label: "Live POCs", value: "0" },
                { label: "Platform partners", value: "0" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-2xl bg-[#ffffff]/10 px-4 py-2 text-sm font-medium text-white">Hub insight</span>
                <span className="text-sm font-medium text-white/70">Updated 2 mins ago</span>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-white/70">Live conversion</div>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-4xl font-bold text-white">0%</p>
                    <p className="text-sm text-white/70">vs. last month</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#056BFC]/15 px-3 py-1 text-sm text-white">
                    <ArrowUpRight className="w-4 h-4" /> 0% growth
                  </div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">Earnix readiness</p>
                  <p className="mt-2 text-2xl font-semibold text-white">0%</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">Strategic assets</p>
                  <p className="mt-2 text-2xl font-semibold text-white">0</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: "Competencies", value: kpis.totalCompetencies, icon: Target, accent: "#056BFC" },
          { label: "Accelerators", value: kpis.accelerators, icon: Box, accent: "#3FD534" },
          { label: "Assets", value: kpis.reusableAssets, icon: Layers, accent: "#FABD00" },
          { label: "POCs", value: kpis.pocs, icon: FlaskConical, accent: "#303030" },
          { label: "Automation", value: kpis.automationSolutions, icon: Cpu, accent: "#056BFC" },
          { label: "Integration", value: kpis.integrationFrameworks, icon: Cable, accent: "#3FD534" },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <Card className="hover-elevate transition-all duration-300 bg-white shadow-sm shadow-slate-200 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-2">
                <div className="p-3 rounded-full" style={{ backgroundColor: `${kpi.accent}20` }}>
                  <kpi.icon className="w-6 h-6" style={{ color: kpi.accent }} />
                </div>
                <div className="text-3xl font-bold tracking-tight" style={{ color: kpi.accent }}>{kpi.value}</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{kpi.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coverage Metrics */}
        <Card className="lg:col-span-1 shadow-sm">
          <CardHeader>
            <CardTitle>Platform Coverage</CardTitle>
            <CardDescription>Maturity and expertise across core systems</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {platformCoverage.map((platform, i) => (
              <div key={platform.platform} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>{platform.platform}</span>
                  <span className="text-[#056BFC]">{platform.coverage}%</span>
                </div>
                <Progress value={platform.coverage} className="h-2 bg-gray-200" indicatorClassName="bg-[#056BFC]" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Main Chart */}
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader>
            <CardTitle>Capability Coverage Trend</CardTitle>
            <CardDescription>12-month trailing growth by platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData.coverageTrend} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorGw" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#056BFC" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#056BFC" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Area type="monotone" dataKey="Guidewire" stroke="#056BFC" strokeWidth={2} fillOpacity={1} fill="url(#colorGw)" />
                  <Area type="monotone" dataKey="Earnix" stroke="#3FD534" strokeWidth={2} fill="transparent" />
                  <Area type="monotone" dataKey="DuckCreek" stroke="#FABD00" strokeWidth={2} fill="transparent" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Asset Distribution */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Asset Distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData.assetCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.assetCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity Feed */}
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates across the hub</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {activities.slice(0, 4).map((activity, i) => (
                <div key={activity.id} className="flex items-start gap-4">
                  <div className="relative mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#056BFC] relative z-10" />
                    {i !== 3 && <div className="absolute top-2 left-1 w-px h-12 bg-border -translate-x-1/2" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">{activity.action}</span>: {activity.target}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}