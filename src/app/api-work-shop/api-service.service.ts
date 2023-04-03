/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
/**
 * Event services
 */
export class ApiWorkShop {
    public studentUrl = environment.BASE_URL_STUDENT;
    public facultyUrl = environment.BASE_URL_FACULTY;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,

    ) {

    }

    // student

    /**
     * register
     *
     * @param {object} data
     * @return{Observable}
     */
    registerStudent(data?: object): Observable<any> {
        console.log(data);
        return this._httpClient.post(this.studentUrl + '/registerstudent', data);
    }

    /**
     * enroll in college
     *
     * @param {object} data
     * @return{Observable}
     */
    enrollInCollege(data?: object): Observable<any> {
        console.log(data);
        return this._httpClient.post(this.studentUrl + '/enrollstudent', data);
    }

    /**
     * retrieving student by chain code
     *
     * @param data
     * @return{Observable}
     */
    getStudent(data?: any): Observable<any> {
        return this._httpClient.get(this.studentUrl + '/getstudent/', data);
    }

    /**
     * enroll course
     *
     * @param data
     * @return{Observable}
     */
    enrollCourse(data?: object): Observable<any> {
        console.log(data);
        return this._httpClient.post(this.studentUrl + '/enrollcourse', data);
    }


    //faculty

    /**
     * register
     *
     * @param {object} data
     * @return{Observable}
     */
    registerFaculty(data?: object): Observable<any> {
        console.log(data);
        return this._httpClient.post(this.facultyUrl + '/registerfaculty', data);
    }

    /**
     * enroll faculty in college
     *
     * @param {object} data
     * @return{Observable}
     */
    enrollFacultyInCollege(data?: object): Observable<any> {
        console.log(data);
        return this._httpClient.post(this.facultyUrl + '/enrollfaculty', data);
    }

    /**
     * retrieving faculty by chain code
     *
     * @param {object} data
     * @return{Observable}
     */
    getFaculty(data?: object): Observable<any> {
        return this._httpClient.get(this.facultyUrl + '/getfaculty/');
    }

    /**
     * retrieving student by id
     *
     * @param {object} data
     * @return{Observable}
     */
    getStudentById(data?: object): Observable<any> {
        return this._httpClient.get(this.facultyUrl + '/getfaculty/');
    }

    /**
     * retrieving all students
     *
     * @param {object} data
     * @return{Observable}
     */
    getAllStudent(data?: object): Observable<any> {
        return this._httpClient.get(this.facultyUrl + '/getallstudents/');
    }

    /**
     * retrieving all faculties
     *
     * @param {object} data
     * @return{Observable}
     */
    getAllFaculty(data?: object): Observable<any> {
        return this._httpClient.get(this.facultyUrl + '/getallfaculty/');
    }



}
