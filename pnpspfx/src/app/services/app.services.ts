import { Injectable, OnInit } from '@angular/core';
import pnp from "@pnp/pnpjs";

@Injectable({
    providedIn: 'root'
})

export class BaseService implements OnInit {
    private listName: string = 'ProgramMeny';
    constructor() {
    }

    ngOnInit() {
    }

    public getlistData1() {
        var promise = new Promise((resolve, reject) => {
            if (this.listName !== null && this.listName !== undefined) {
                pnp.sp.web.lists.getByTitle(this.listName).items.get().then((items: any[]) => {
                    if (items !== null && items !== undefined) {
                        resolve(items);
                    }
                    else {
                        reject("Error")
                    }
                });
            }
        });
        return promise;
    }

    public getlistData2() {
        return pnp.sp.web.lists.getByTitle(this.listName).items.get().then((items: any[]) => {
            if (items !== null && items !== undefined) {
                return items;
            }
        });
    }

    public getById() {

    }

    public post() {

    }

    public update() {

    }

    public delete() {

    }

}