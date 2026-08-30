"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A donut chart showing customer churn rate"

const chartData = [
  {
    status: "Churned",
    customers: 86,
    fill: "var(--color-churned)",
  },
  {
    status: "Retained",
    customers: 914,
    fill: "var(--color-retained)",
  },
]

const chartConfig = {
  customers: {
    label: "Customers",
  },
  churned: {
    label: "Churned",
    color: "var(--chart-1)",
  },
  retained: {
    label: "Retained",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function AppPieChart() {
  const totalCustomers = React.useMemo(() => {
    return chartData.reduce((total, item) => total + item.customers, 0)
  }, [])

  const churnedCustomers = chartData.find(
    (item) => item.status === "Churned"
  )?.customers ?? 0

  const churnRate = ((churnedCustomers / totalCustomers) * 100).toFixed(1)

  return (
    <div>
      <h1 className="mb-4 text-lg font-medium">Churn rate</h1>

      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />

          <Pie
            data={chartData}
            dataKey="customers"
            nameKey="status"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (
                  viewBox &&
                  "cx" in viewBox &&
                  "cy" in viewBox
                ) {
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
                        {churnRate}%
                      </tspan>

                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Churn rate
                      </tspan>
                    </text>
                  )
                }

                return null
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  )
}