import { Card, Title, Text, Grid, Col, AreaChart, Metric, Divider, Subtitle, TableCell, TableBody, TableHeaderCell, TableRow, TableHead, BadgeDelta, Table, Callout, Flex, Button } from "@tremor/react";

import { Client } from "@notionhq/client";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { cookies } from 'next/headers';
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

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
    //SUPABASE
    // const supabase = createServerComponentClient({ cookies })
    // const { data } = await supabase.from('notes').select('*')

    // NOTION API
    // const notion = new Client({ auth: process.env.NOTION_KEY });

    // const data = await notion.databases.query({
    //     database_id: "90e8848732c64ad68b0ed696b0b98498"
    // })

    // const objects = data.results
    //     .filter((page): page is PageObjectResponse => 'properties' in page)
    //     .map((page) => {
    //         const properties = page.properties;
    //         console.log("properties:", properties)
    //         const title = 'title' in properties.name ? properties.name.title[0].plain_text : undefined;
    //         const href = 'rich_text' in properties.href ? properties.href.rich_text[0]?.plain_text : undefined;
    //         const icon = 'rich_text' in properties.icon ? properties.icon.rich_text[0]?.plain_text : undefined;
    //         // other properties...
    //         return {
    //             id: page.id,
    //             title,
    //             href,
    //             icon
    //             // other properties...
    //         };
    //     });

    // console.log(objects)



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

                        <Card>
                            <Text>Noticias</Text>


                        </Card>


                    </div>
                </Col>

                {/* Main section */}
                <Col numColSpanLg={4} >
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
                    {/* <Card className="h-20 mt-5 overflow-auto">
                        <Title>Table</Title>
                        <Table >
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
                    </Card> */}

                </Col>

            </Grid>
        </main>
    );
}