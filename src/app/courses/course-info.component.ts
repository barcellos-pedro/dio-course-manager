import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, private router: Router){}

    ngOnInit(): void {
        // + converte para number
        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(resp =>{
            this.course = resp;
        },
        error => console.log('Error \n', error))
    }

    save(): void {
        this.courseService.save(this.course).subscribe();
        this.router.navigate(['/courses']);
    }
}