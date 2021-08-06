import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { ZeloMockApiService } from '@zelo/lib/mock-api';
import { project as projectData } from 'app/mock-api/dashboards/project/data';

@Injectable({
    providedIn: 'root'
})
export class ProjectMockApi {
    private _project: any = projectData;

    /**
     * Constructor
     */
    constructor(private _zeloMockApiService: ZeloMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._zeloMockApiService
            .onGet('api/dashboards/project')
            .reply(() => [200, cloneDeep(this._project)]);
    }
}
