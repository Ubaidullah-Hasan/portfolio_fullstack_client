"use client"
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


const SkillsChart = () => {
    const [state, setState] = React.useState<any>({

        series: [{
            name: 'Percentage',
            data: [31, 40, 28, 51, 42, 109, 100] // todo: technology percentage
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
                categories: [
                    "HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "TypeScript"
                ] // todo: technology name
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
                <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
            </div>
        </div>
    );
};

export default SkillsChart;