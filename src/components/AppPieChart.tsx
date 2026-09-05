"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import { CardContent } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

interface ChartDataEntry {
  location: string
  listeners: number
  fill: string
}

const chartData: ChartDataEntry[] = [
  { location: "USA", listeners: 82934, fill: "var(--color-chrome)" },
  { location: "India", listeners: 68253, fill: "var(--color-safari)" },
  { location: "UK", listeners: 28287, fill: "var(--color-firefox)" },
  { location: "Canada", listeners: 54373, fill: "var(--color-edge)" },
  { location: "Australia", listeners: 43290, fill: "var(--color-other)" },
]

const chartConfig = {
  listeners: {
    label: "Listeners",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function AppPieChart() {
  const totalListeners = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.listeners, 0)
  }, [])

  return (
    <div className="flex flex-col">
      <h1 className="mb-4 text-md font-medium">Listeners by Location</h1>

      <CardContent className="flex-1 h-60">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => `${(Number(value) / 1000).toFixed(1)}k`}
                />
              }
            />

            <Pie
              data={chartData}
              dataKey="listeners"
              nameKey="location"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {(totalListeners / 1000).toFixed(1)}k
                        </tspan>

                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <div className="flex-col bottom-0 gap-2 text-sm">
        <div className="flex items-center gap-2 py-2 text-sm font-medium leading-none">
          Top listeners are from the USA
          <TrendingUp className="h-4 w-4" />
        </div>

        <div className="text-xs leading-none text-muted-foreground">
          USA, India, Canada, Australia, and the UK account for your listeners
        </div>
      </div>
    </div>
  )
}
