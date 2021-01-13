import React, { Component } from 'react'
import { CanvasJSChart } from 'canvasjs-react-charts'

class ProgressCard extends Component {
    constructor() {
        super()
        this.toggleDataSeries = this.toggleDataSeries.bind(this)
    }

    toggleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false
        } else {
            e.dataSeries.visible = true
        }
        this.chart.render()
    }

    render() {
        const options = {
            theme: "light2",
            animationEnabled: true,
            title: { text: "Progress VS Pain"},
            subtitles: [{ text: "" }],
            axisX: { title: "Date"},
            axisY: {
                title: "Percent of Motion",
                titleFontColor: "#6D78AD",
                lineColor: "#6D78AD",
                labelFontColor: "#6D78AD",
                tickColor: "#6D78AD"
            },
            axisY2: {
                title: "Pain Index",
                titleFontColor: "#51CDA0",
                lineColor: "#51CDA0",
                labelFontColor: "#51CDA0",
                tickColor: "#51CDA0"
            },
            toolTip: { shared: true },
            legend: { cursor: "pointer" },
            data: [{
                type: "spline",
                name: "Progress",
                showInLegend: true,
                xValueFormatString: "MMMM DD",
                yValueFormatString: "##",
                dataPoints: [
                    { x: new Date(2020, 11, 12), y: 20 },
                    { x: new Date(2020, 11, 15), y: 50 },
                    { x: new Date(2020, 11, 18), y: 55 }
                ]
            },
            {
                type: "spline",
                name: "Pain",
                axisYType: "secondary",
                showInLegend: true,
                xValueFormatString: "MMMM DD",
                yValueFormatString: "##",
                dataPoints: [
                    { x: new Date(2020, 11, 12), y: 8 },
                    { x: new Date(2020, 11, 15), y: 4 },
                    { x: new Date(2020, 11, 18), y: 3 }
                ]
            }]
        }
        return (
            <div>
                <image alt='Patient Picture'/>
                <h3>{'Patient Name'}</h3>
                <CanvasJSChart options={options}
                    onRef={ref => this.chart = ref} />
            </div>
        )
    }
}

export default ProgressCard