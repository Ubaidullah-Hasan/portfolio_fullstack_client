"use client"
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface IProps {
    name: string;
    percentage:number;
}

const SkillsChart = ({ data }: { data: IProps[]}) => {
    const [state, setState] = React.useState<any>({
        series: [{
            name: 'Percentage',
            data: data?.map((item) => item.percentage) // y axis labels
        }],
        options: {
            chart: {
                height: 350,
                type: 'area',
                zoom: {
                    enabled: false
                },
            },
            markers: {
                size: 8, // Marker size
                shape: 'circle', // Marker shape
                // customSVG: {
                //     path: `M10 0 L20 10 L10 20 L0 10 Z`, // SVG path for a diamond
                //     offsetX: 0,
                //     offsetY: 0
                // },
                colors: ['#4147ee'], // Marker colors (match graph color if needed)
                strokeWidth: 2, // Marker border width
                strokeColors: ['#ffffff'], // Marker border color
                hover: {
                    size: 10, // Marker size on hover
                }
            },
            colors: ['#0994EA'], // Change graph color here (green)
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'string',
                categories: data?.map((item) => item.name) // x axis labels
            },
            title: {
                text: 'Analysis Of My Skills',
                align: 'left'
            },
        },


    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart height={350} options={state.options} series={state.series} type="area" />
            </div>
        </div>
    );
};

export default SkillsChart;