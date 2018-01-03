import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from '../../shared/commonHttp.service';
import { ActivatedRoute } from '@angular/router';
import { TraverseService } from '../../shared/traverse.service';


@Component({
    selector: 'app-my-courses',
    templateUrl: './my-courses.component.html',
    styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
    employees: any;
    managers: any;
    stringSubscriptionDate: string;
    courses: any;
    courseId: any;
    coursesData: any;

    constructor(
        private commonHttpService: CommonHttpService,
        private traverseService: TraverseService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {

        // All Courses

        this.commonHttpService.getMyCourses()
            .subscribe((res: any) => {
                this.courses = res.data;
                console.log(res.data);

            }, (err: any) => {
                console.log(err);
            })

    }

}