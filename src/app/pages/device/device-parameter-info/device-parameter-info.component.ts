import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {DeviceDataType} from "../../../models/device-data";
import {GraphData} from "../../../models/graph-data";
import * as moment from 'moment';
import {DeviceDataService} from "../../../services/device-data.service";
import {Subject} from "rxjs";

@Component({
    selector: 'device-parameter-info',
    templateUrl: './device-parameter-info.component.html'
})
export class DeviceParameterInfoComponent implements OnInit {
    @Input() dataType: DeviceDataType;
    @Input() device_id: string;

    period: string = 'daily';

    yAxisLabel: string = '';
    graphData: GraphData[] = [];
    xMin;
    xMax;
    yMin;
    yMax;

    moment;

    update$: Subject<any> = new Subject();

    constructor(private deviceDataService: DeviceDataService, private ref: ChangeDetectorRef) {
        this.moment = moment();
    }

    updateChart() {
        this.update$.next(true);
    }

    ngOnInit(): void {
        this.yAxisLabel = this.dataType.details['name'];

        this.xMin = this.dataType.min_x;
        this.xMax = this.dataType.max_x;
        this.yMin = this.dataType.min_y - 10;
        this.yMax = this.dataType.max_y + 10;

        let dataArray = [];
        this.dataType.graphData.forEach((data) => {
            dataArray.push({name: new Date(data.created_at), value: data.value});
        });

        this.graphData[0] = new GraphData();
        this.graphData[0].name = this.dataType.details['name'];
        this.graphData[0].series = dataArray;
    }

    xAxisTickFormatting = (e) => {

        if (this.period == 'monthly')
            return moment(e).format('D/M');

        if (this.period == 'weekly')
            return moment(e).format('dd');

        return moment(e).format('HH:mm');
    }

    changePeriod(type: string) {
        this.period = type;

        this.deviceDataService.getDataByParameter(this.device_id, this.dataType.details['device_parameter_id'], this.period).subscribe((d) => {
            this.dataType = d;

            this.xMin = this.dataType.min_x;
            this.xMax = this.dataType.max_x;
            this.yMin = this.dataType.min_y - 10;
            this.yMax = this.dataType.max_y + 10;

            let dataArray = [];
            this.dataType.graphData.forEach((data) => {
                dataArray.push({name: new Date(data.created_at), value: data.value});
            });

            let graphData = new GraphData();
            graphData.name = this.dataType.details['name'];
            graphData.series = dataArray;

            let single = [];
            single.push(graphData)

            this.graphData = [...single];

            this.updateChart();
        });

    }
}
