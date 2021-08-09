import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  form: any = {
    classroomId: null,
    classroomName: null,
    classroomStudent: [
      {
        studentId: null,
        studentName: null,
        studentAge: null,
        studentTel: null
      }
    ],
    classTeacher: [
      {
        teacherId: null,
        teacherName: null,
        teacherTel: null,
        subjectTaught: null
      }
    ]
  }
  classroomId: any;

  constructor(public http: HttpClient) { }
  getDataClassroom: any;
  getDataTeacher: any;
  getDataStudent: any;

  ngOnInit(): void {
    this.GetdataClassroomAll()
    this.GetdataTeacherAll()
    this.GetdataStudentAll()
  }


  GetdataClassroomAll() {
    this.getDataClassroomAll().subscribe(data => {
      console.log(data);
      this.getDataClassroom = data
    })
     // this.getDataClassroom = this.Allclass.sort((end:any , start:any ) => start.classroomName - end.classroomName);
  }
  getDataClassroomAll() {
    return this.http.get(`${environment.apiUrl}Classroom/GetdataClassroomAll`)
  }

  GetDataClassroomId() {
    console.log(this.classroomId);
    this.getDataClassroomId(this.classroomId).subscribe(data => {
      this.form = data;
    })
  }
  getDataClassroomId(classroomId: string) {
    return this.http.get(`${environment.apiUrl}Classroom/GetdataClassroomByid/${classroomId}`);
  }

  //สร้าง Classroom
  CreateClassroom() {
    this.createClassroom(this.form).subscribe(data => {
      window.location.reload();
      console.log(data);
    })
  }
  createClassroom(classroomId: string) {
    return this.http.post(`${environment.apiUrl}Classroom/CreateClassroom`, classroomId);
  }

  //ลบ Classroom
  DeletedClassroom() {
    this.deletedClassroom(this.form.classroomId).subscribe(data => {
      window.location.reload();
      console.log("ลบข้อมูลสำเร็จแล้ว");
    })

  }
  deletedClassroom(classroomId: string) {
    return this.http.delete(`${environment.apiUrl}Classroom/DeletedClassroom/${classroomId}`);
  }


  AddTeacherInClassroom(teacherId: string) {
     this.addTeacherInClassroom(this.classroomId , teacherId).subscribe( data =>{
      window.location.reload();
      console.log("เพิ่มข้อมูล Teacher สำเร็จ");
    })
  }
  addTeacherInClassroom(classroomId: string, teacherId: string) {
    return this.http.get(`${environment.apiUrl}Classroom/AddTeacherInClassroom/${classroomId}/${teacherId}`);
  }

  GetdataTeacherAll() {
    this.getdataTeacherAll().subscribe(data => {
      console.log(data);
      this.getDataTeacher = data;
    })
  }
  getdataTeacherAll() {
    return this.http.get(`${environment.apiUrl}Classroom/GetdataTeacherAll`);
  }

  getClassroomIdOnModal(classroomId: string) { 
    this.classroomId = classroomId;
    console.log(classroomId);
  }


  GetdataStudentAll() {
    this.getDataStudentAll().subscribe(data => {
      console.log(data);
      this.getDataStudent = data;
    })
  }
  getDataStudentAll() {
    return this.http.get(`${environment.apiUrl}Classroom/GetdataStudentAll`);
  }
  
  AddStudentInClassroom(studentId: string) {
    this.addStudentInClassroom(this.classroomId , studentId ).subscribe( data =>{
      window.location.reload();
      console.log("เพิ่มข้อมูล Student สำเร็จ")
    })
  }
  addStudentInClassroom(classroomId: string , studentId: string ) {
    return this.http.get(`${environment.apiUrl}Classroom/AddStudentInClassroom/${classroomId}/${studentId}`);
  }
}



