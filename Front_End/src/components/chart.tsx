import LineChartComponent from "./LineChart";
import "../css/chart.css";

const Chart = () => {
    return (
        <div className="mainContainerChart">

            <div className="titleUser">
                <h1>Bonjour xxx</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div>
                <LineChartComponent />
            </div>
        </div>

    );
}

export default Chart;
