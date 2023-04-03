import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiWorkShop } from './api-service.service';
/**
 * Component
 */
@Component({
  selector: 'app-api-work-shop',
  templateUrl: './api-work-shop.component.html',
  styleUrls: ['./api-work-shop.component.scss']
})

/**
 * Component
 */
export class ApiWorkShopComponent implements OnInit {
  // student
  public registerationForm!: FormGroup;
  public studentEnrollInCollegeForm!: FormGroup;
  public studentByChainCodeForm!: FormGroup;
  public studentEnrollInCourseForm!: FormGroup;

  //faculty
  public facultyRegisterationForm!: FormGroup;
  public facultyEnrollInCollegeForm!: FormGroup;
  public facultyByChainCodeForm!: FormGroup;
  public studentByFacultyForm!: FormGroup;
  public studentsByFaculty!: FormGroup;
  public getAllFacultyForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiWorkShop,
  ) { }

  /**
   * initially loaded
   */
  ngOnInit(): void {
    // student
    this.registerationForm = this.fb.group({
      student_name: ['', [Validators.required]],
    });
    this.studentEnrollInCollegeForm = this.fb.group({
      student_name: ['', [Validators.required]],
      channel_name: ['', [Validators.required]],
      chain_code_name: ['', [Validators.required]],
      department: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
    this.studentByChainCodeForm = this.fb.group({
      student_name: ['', [Validators.required]],
      channel_name: ['', [Validators.required]],
      chain_code_name: ['', [Validators.required]],
    });
    this.studentEnrollInCourseForm = this.fb.group({
      student_name: ['', [Validators.required]],
      channel_name: ['', [Validators.required]],
      chain_code_name: ['', [Validators.required]],
      course_name: ['', [Validators.required]],
    });

    //Faculty
    this.facultyRegisterationForm = this.fb.group({
      faculty_name: ['', [Validators.required]],
    });
    this.facultyEnrollInCollegeForm = this.fb.group({
      faculty_name: ['', [Validators.required]],
      channel_name: ['', [Validators.required]],
      chain_code_name: ['', [Validators.required]],
      department: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
    this.facultyByChainCodeForm = this.fb.group({
      faculty_name: ['', [Validators.required]],
      channel_name: ['', [Validators.required]],
      chain_code_name: ['', [Validators.required]],
    });
    this.studentByFacultyForm = this.fb.group({
      faculty_name: ['', [Validators.required]],
      channel_name: ['', [Validators.required]],
      chain_code_name: ['', [Validators.required]],
      student_name: ['', [Validators.required]],
    });
    this.studentsByFaculty = this.fb.group({
      faculty_name: ['', [Validators.required]],
      channel_name: ['', [Validators.required]],
      chain_code_name: ['', [Validators.required]],
    });
    this.getAllFacultyForm = this.fb.group({
      faculty_name: ['', [Validators.required]],
      channel_name: ['', [Validators.required]],
      chain_code_name: ['', [Validators.required]],
    });
  }

  // Student

  /**
   * registration
   */
  public onRegistration() {
    const data = {
      studentName: this.registerationForm.value.student_name,
    }
    if (this.registerationForm.valid) {
      this.apiService.registerStudent(data).subscribe((res) => {
        console.log(res)
      })
    }
  }

  /**
 * enroll in college
 */
  public onStudentEnrollInCollege() {
    const data = {
      studentName: this.studentEnrollInCollegeForm.value.student_name,
      channelName: this.studentEnrollInCollegeForm.value.channel_name,
      chaincodeName: this.studentEnrollInCollegeForm.value.chain_code_name,
      department: this.studentEnrollInCollegeForm.value.department,
      age: this.studentEnrollInCollegeForm.value.age,
    }
    if (this.studentEnrollInCollegeForm.valid) {
      this.apiService.enrollInCollege(data).subscribe((res) => {
        console.log(res)
      })
    }
  }

  /**
   * get student
   */
  public onGetStudentByChainCode() {
    const data = {
      studentName: this.studentByChainCodeForm.value.student_name,
      channelName: this.studentByChainCodeForm.value.channel_name,
      chaincodeName: this.studentByChainCodeForm.value.chain_code_name,
    }
    if (this.studentByChainCodeForm.valid) {
      this.apiService.getStudent(data).subscribe((res) => {
        console.log(res)
      })
    }
  }

  /**
  * enroll in course
  */
  public onEnrollInCourse() {
    const data = {
      studentName: this.studentEnrollInCourseForm.value.student_name,
      channelName: this.studentEnrollInCourseForm.value.channel_name,
      chaincodeName: this.studentEnrollInCourseForm.value.chain_code_name,
      courseName: this.studentEnrollInCourseForm.value.course_name,
    }
    if (this.studentEnrollInCourseForm.valid) {
      this.apiService.enrollCourse(data).subscribe((res) => {
        console.log(res)
      })
    }
  }

  // Faculty

  /**
  * registration
  */
  public onFacultyRegistration() {
    const data = {
      facultyName: this.facultyRegisterationForm.value.faculty_name,
    }
    if (this.facultyRegisterationForm.valid) {
      this.apiService.registerFaculty(data).subscribe((res) => {
        console.log(res)
      })
    }
  }

  /**
* enroll in college
*/
  public onfacultyEnrollInCollege() {
    const data = {
      facultyName: this.facultyEnrollInCollegeForm.value.faculty_name,
      channelName: this.facultyEnrollInCollegeForm.value.channel_name,
      chaincodeName: this.facultyEnrollInCollegeForm.value.chain_code_name,
      department: this.facultyEnrollInCollegeForm.value.department,
      age: this.facultyEnrollInCollegeForm.value.age,
    }
    if (this.facultyEnrollInCollegeForm.valid) {
      this.apiService.enrollFacultyInCollege(data).subscribe((res) => {
        console.log(res)
      })
    }
  }

  /**
  * get faculty
  */
  public onGetfacultyByChainCode() {
    const data = {
      facultyName: this.facultyByChainCodeForm.value.faculty_name,
      channelName: this.facultyByChainCodeForm.value.channel_name,
      chaincodeName: this.facultyByChainCodeForm.value.chain_code_name,
    }
    if (this.facultyByChainCodeForm.valid) {
      this.apiService.getFaculty(data).subscribe((res) => {
        console.log(res)
      })
    }
  }

  /**
  * get student
  */
  public onGetStudentByFaculty() {
    const data = {
      facultyName: this.studentByFacultyForm.value.faculty_name,
      channelName: this.studentByFacultyForm.value.channel_name,
      chaincodeName: this.studentByFacultyForm.value.chain_code_name,
      studentName: this.studentByFacultyForm.value.student_name,
    }
    if (this.studentByFacultyForm.valid) {
      this.apiService.getStudentById(data).subscribe((res) => {
        console.log(res)
      })
    }
  }

  /**
  * get All students
  */
  public onGetStudentsByFaculty() {
    const data = {
      facultyName: this.studentsByFaculty.value.faculty_name,
      channelName: this.studentsByFaculty.value.channel_name,
      chaincodeName: this.studentsByFaculty.value.chain_code_name,
    }
    if (this.studentsByFaculty.valid) {
      this.apiService.getAllStudent(data).subscribe((res) => {
        console.log(res)
      })
    }
  }

  /**
  * get All faculty
  */
  public onGetAllFaculty() {
    const data = {
      facultyName: this.getAllFacultyForm.value.faculty_name,
      channelName: this.getAllFacultyForm.value.channel_name,
      chaincodeName: this.getAllFacultyForm.value.chain_code_name,
    }
    if (this.getAllFacultyForm.valid) {
      this.apiService.getAllFaculty(data).subscribe((res) => {
        console.log(res)
      })
    }
  }

}
