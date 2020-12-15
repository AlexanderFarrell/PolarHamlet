import {Mind} from "./Mind";

export class MindFactory {
    constructor() {
    }

    static CreateWithDepartments(departments){
        let mind = new Mind();
        console.log(departments);
        departments.forEach((department) => {
            mind.Add(department)
        })

        return mind;
    }
}