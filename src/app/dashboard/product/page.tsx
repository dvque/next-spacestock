import { Card, Title, Text, Grid, Col, AreaChart, Metric, Divider, Subtitle, TableCell, TableBody, TableHeaderCell, TableRow, TableHead, BadgeDelta, Table, Callout, Flex, Button } from "@tremor/react";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';

const chartdata = [
    {
        date: "Jan 22",
        SemiAnalysis: 2890,
    },
    {
        date: "Feb 22",
        SemiAnalysis: 2756,
    },
    {
        date: "Mar 22",
        SemiAnalysis: 3322,
    },
    {
        date: "Apr 22",
        SemiAnalysis: 3470,
    },
    {
        date: "May 22",
        SemiAnalysis: 3475,
    },
    {
        date: "Jun 22",
        SemiAnalysis: 3129,
    },
];

const salesPeople = [
    {
        name: "Peter Doe",
        leads: 45,
        sales: "1,000,000",
        quota: "1,200,000",
        variance: "low",
        region: "Region A",
        delta: "overperforming",
        deltaType: "moderateIncrease",
    },
    {
        name: "Lena Whitehouse",
        leads: 35,
        sales: "900,000",
        quota: "1,000,000",
        variance: "low",
        region: "Region B",
        delta: "average",
        deltaType: "unchanged",
    },
    {
        name: "Phil Less",
        leads: 52,
        sales: "930,000",
        quota: "1,000,000",
        variance: "medium",
        region: "Region C",
        delta: "underperforming",
        deltaType: "moderateDecrease",
    },
    {
        name: "John Camper",
        leads: 22,
        sales: "390,000",
        quota: "250,000",
        variance: "low",
        region: "Region A",
        delta: "overperforming",
        deltaType: "increase",
    },
    {
        name: "Max Balmoore",
        leads: 49,
        sales: "860,000",
        quota: "750,000",
        variance: "low",
        region: "Region B",
        delta: "overperforming",
        deltaType: "increase",
    },
    {
        name: "Peter Moore",
        leads: 82,
        sales: "1,460,000",
        quota: "1,500,000",
        variance: "low",
        region: "Region A",
        delta: "average",
        deltaType: "unchanged",
    },
    {
        name: "Joe Sachs",
        leads: 49,
        sales: "1,230,000",
        quota: "1,800,000",
        variance: "medium",
        region: "Region B",
        delta: "underperforming",
        deltaType: "moderateDecrease",
    },
];

const categories = [
    {
        title: "Sales",
        metric: "$ 23,456",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
        status: "Performing as usual",
        color: "emerald",
    },
    {
        title: "Profit",
        metric: "$ 12,789",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
        status: "Immediate action required",
    },
    {
        title: "Customers",
        metric: "456",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
        status: "Critical performance",
    },
    {
        title: "Orders",
        metric: "1,789",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
        status: "Performing as usual",
    },
];

const statusMapping = {
    "Performing as usual": { icon: "CheckCircleIcon", color: "emerald" },
    "Immediate action required": { icon: "ShieldExclamationIcon", color: "rose" },
    "Critical performance": { icon: "CogIcon", color: "amber" },
};


export default async function Page() {
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.from('notes').select('*')


    return (
        <main>
            {/* <pre>
                {JSON.stringify(data, null, 2)}
            </pre> */}
            <Grid numItemsLg={6} className="gap-6 grow">
                {/* KPI sidebar */}
                <Col numColSpanLg={2}>
                    <div className="flex flex-col space-y-6 ">
                        <Card decoration="top" decorationColor="indigo">
                            <Text>Sales</Text>
                            <Metric>$ 34,743</Metric>
                            <Divider>Description</Divider>
                            <Subtitle>Upgrades</Subtitle>
                            <Text className="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue
                                blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.
                            </Text>
                        </Card>

                        {categories.map((item) => (
                            <Card key={item.title}>
                                <Text>{item.title}</Text>
                                <Metric>{item.metric}</Metric>
                                <Callout
                                    className="mt-6"
                                    title={item.status}
                                    icon={statusMapping[item.status].icon}
                                    color={statusMapping[item.status].color}
                                >
                                    {item.text}
                                </Callout>
                            </Card>
                        ))}

                    </div>
                </Col>

                {/* Main section */}
                <Col numColSpanLg={4} className="sticky">
                    {/* <Card className="h-full">
                        <div className="h-60" />
                    </Card> */}
                    <Card>
                        <Title>Newsletter revenue over time (USD)</Title>
                        <AreaChart
                            className="h-72 mt-4"
                            data={chartdata}
                            index="date"
                            yAxisWidth={65}
                            categories={["SemiAnalysis"]}
                            colors={["indigo", "cyan"]}
                        />


                    </Card>
                    <Card className="mt-5">
                        <Title>Table</Title>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell>Name</TableHeaderCell>
                                    <TableHeaderCell className="text-right">Leads</TableHeaderCell>
                                    <TableHeaderCell className="text-right">Sales ($)</TableHeaderCell>
                                    <TableHeaderCell className="text-right">Quota ($)</TableHeaderCell>
                                    <TableHeaderCell className="text-right">Variance</TableHeaderCell>
                                    <TableHeaderCell className="text-right">Region</TableHeaderCell>
                                    <TableHeaderCell className="text-right">Status</TableHeaderCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {salesPeople.map((item) => (
                                    <TableRow key={item.name}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell className="text-right">{item.leads}</TableCell>
                                        <TableCell className="text-right">{item.sales}</TableCell>
                                        <TableCell className="text-right">{item.quota}</TableCell>
                                        <TableCell className="text-right">{item.variance}</TableCell>
                                        <TableCell className="text-right">{item.region}</TableCell>
                                        <TableCell className="text-right">
                                            <BadgeDelta deltaType={item.deltaType} size="xs">
                                                {item.delta}
                                            </BadgeDelta>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>

                </Col>

            </Grid>
        </main>
    );
}