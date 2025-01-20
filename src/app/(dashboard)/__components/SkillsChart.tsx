"use client"
import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


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
                height: 360,
                type: 'area',
                zoom: {
                    enabled: false
                },
            },
            grid: {
                padding: {
                    bottom: 0, // Removes the extra space at the bottom
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
                align: 'left',
                
            },
        },


    });

    return (
        <div className='p-5'>
            <div>
                <ReactApexChart height={400} options={state.options} series={state.series} type="area" />
            </div>
        </div>
    );
};

export default SkillsChart;