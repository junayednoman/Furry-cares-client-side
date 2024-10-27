"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PostCategoryChart = () => {
  // Data for post categories
  const postCategoryData = {
    series: [35, 65], // Example data: percentages or count of posts per category
    labels: ["Tip", "Story"], // Example categories
  };

  // Options for the pie chart
  const postCategoryOptions = {
    chart: {
      type: "pie",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 100,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 400,
        },
      },
    },
    labels: postCategoryData.labels,
    title: {
      text: "Post Categories Distribution",
      align: "center",
    },
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
    },
  };

  return (
    <div>
      <Chart
        options={postCategoryOptions as ApexCharts.ApexOptions}
        series={postCategoryData.series}
        type="pie"
      />
    </div>
  );
};

export default PostCategoryChart;
