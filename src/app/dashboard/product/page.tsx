import { Card, Metric, Text, Flex, BadgeDelta, DeltaType, Grid } from "@tremor/react";

const categories = [
    {
        title: "Sales",
        metric: "$ 12,699",
        metricPrev: "$ 9,456",
        delta: "34.3%",
        deltaType: "moderateIncrease",
    },
    {
        title: "Profit",
        metric: "$ 40,598",
        metricPrev: "$ 45,564",
        delta: "10.9%",
        deltaType: "moderateDecrease",
    },
    {
        title: "Customers",
        metric: "1,072",
        metricPrev: "856",
        delta: "25.3%",
        deltaType: "moderateIncrease",
    },
    {
        title: "Customers",
        metric: "1,072",
        metricPrev: "856",
        delta: "25.3%",
        deltaType: "moderateIncrease",
    },
    {
        title: "Customers",
        metric: "1,072",
        metricPrev: "856",
        delta: "25.3%",
        deltaType: "moderateIncrease",
    },
];

export default function Page() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <Grid numItemsSm={3} numItemsLg={5} className="gap-6">
                    {categories.map((item) => (
                        <Card key={item.title} className="">
                            <Flex alignItems="start">
                                <Text>{item.title}</Text>
                                <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
                            </Flex>
                            <Flex justifyContent="start" alignItems="baseline" className="truncate space-x-3">
                                <Metric>{item.metric}</Metric>
                                <Text className="truncate">from {item.metricPrev}</Text>
                            </Flex>
                        </Card>
                    ))}
                </Grid>
            </div>
            <div className="flex flex-row">
                <p>Hola</p>
            </div>
        </div>

    );
}