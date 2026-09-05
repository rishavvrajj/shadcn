"use client"

import {
    Area,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "An area chart with gradient fill"

const chartData = [
    { month: "January", desktop: 23186, mobile: 8538 },
    { month: "February", desktop: 35305, mobile: 23834 },
    { month: "March", desktop: 63237, mobile: 35250 },
    { month: "April", desktop: 26373, mobile: 19230 },
    { month: "May", desktop: 35209, mobile: 13320 },
    { month: "June", desktop: 23214, mobile: 14620 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export function AppAreaChart() {
    return (
        <div className="w-full overflow-hidden">
            <h1 className="text-md font-semibold tracking-tight truncate">Total Visitors</h1>
            <p className="mb-2 text-sm text-muted-foreground">Visitor traffic from desktop and mobile devices over the last 6 months.</p>
            <div className="w-full min-w-0 overflow-hidden">
                <ChartContainer
                    config={chartConfig}
                    className="h-75 w-full min-w-0"
                >
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            right: 12,
                            left: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => `${value / 1000}k`}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-desktop)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-desktop)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-mobile)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-mobile)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="mobile"
                            type="natural"
                            fill="url(#fillMobile)"
                            fillOpacity={0.4}
                            stroke="var(--color-mobile)"
                            stackId="a"
                        />
                        <Area
                            dataKey="desktop"
                            type="natural"
                            fill="url(#fillDesktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </div>
        </div>
    )
}
