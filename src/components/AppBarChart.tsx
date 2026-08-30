"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", desktop: 186000, mobile: 80000 },
    { month: "February", desktop: 305000, mobile: 200000 },
    { month: "March", desktop: 237000, mobile: 120000 },
    { month: "April", desktop: 73000, mobile: 190000 },
    { month: "May", desktop: 209000, mobile: 130000 },
    { month: "June", desktop: 214000, mobile: 140000 },
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

export function AppBarChart() {
    return (
        <div>
            <h1 className="mb-4 text-lg font-medium">Monthly recurring revenue</h1>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        // Divides numbers like 186000 by 1000 to display $186k
                        tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <ChartTooltip 
                        content={
                            <ChartTooltipContent 
                                // Optional: Formats the numbers inside the tooltip popup too
                                formatter={(value) => `$${Number(value).toLocaleString()}`} 
                            />
                        } 
                    />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}
