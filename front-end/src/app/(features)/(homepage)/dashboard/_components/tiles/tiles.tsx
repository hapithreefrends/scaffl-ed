'use client';
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';
import '../../_styles/dashboard.css';

const Tiles = () => {
    const today = new Date();

    // Generate data for the last 3 months
    const generateRandomData = () => {
        const data = [];
        const startDate = new Date();
        startDate.setMonth(today.getMonth() - 3); // 3 months ago

        for (let i = 0; i < 90; i++) { // Approx. 3 months (90 days)
            const date = new Date();
            date.setDate(today.getDate() - i);
            data.push({
                date: date.toISOString().split('T')[0],
                count: Math.floor(Math.random() * 5), // Random activity count (0-4)
            });
        }
        return data;
    };

    const heatmapData = generateRandomData();

    return (
        <div
            style={{
                border: "2px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
            }}>
            <h4>Activity Heatmap</h4>
            <CalendarHeatmap
                startDate={new Date(today.getFullYear(), today.getMonth() - 3, today.getDate())}
                endDate={today}
                values={heatmapData}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-scale-${value.count}`;
                }}
                tooltipDataAttrs={(value) => {
                    return {
                        'data-tooltip-content': `${value?.date || 'No date'}`,
                        'data-tooltip-id': 'calendar-heatmap-tooltip',
                    };
                }}
                showWeekdayLabels={false} // Disable weekday labels
            />
            <Tooltip id="calendar-heatmap-tooltip" />

        </div>
    );
};

export default Tiles;