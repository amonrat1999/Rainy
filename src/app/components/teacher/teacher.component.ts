import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  form: any = {
    teacherId: null,
    teacherName: null,
    teacherTel: null,
    subjectTaught: null
  }
  teacherId: any;

  constructor(public http: HttpClient) { }
  getDataTeacher: any;
  ngOnInit(): void {
    this.getdataTeacherAll().subscribe(data => {
      console.log(data);
      this.getDataTeacher = data;
      for (let i in data) {

      }
    })
  }

  // ข้อมูลอาจารย์ทั้งหมด
  GetdataTeacherAll() {
    this.getdataTeacherAll().subscribe(data => {
      console.log(data);
    })
  }
  getdataTeacherAll() {
    return this.http.get(`${environment.apiUrl}Classroom/GetdataTeacherAll`);
  }


  // เพิ่มข้อมูลอาจารย์
  AddDataTeacher() {
    this.addDataTeacher(this.form).subscribe(data => {
      window.location.reload();
      console.log(data);
    })
  }
  addDataTeacher(teacherId: string) {
    return this.http.post(`${environment.apiUrl}Classroom/AddDataTeacher`, teacherId);
  }


  // แก้ไขข้อมูลนักศึกษา
  EditDataTeacher() {
    this.form.teacherId = this.teacherId;
    console.log(this.form);
    this.editDataTeacher(this.form).subscribe(data => {
      window.location.reload()
    })
    console.log("แก้ไขข้อมูลสำเร็จแล้ว");
  }
  editDataTeacher(teacherId: any) {
    return this.http.put(`${environment.apiUrl}Classroom/EditDataTeacher`, teacherId);
  }

  //ค้นหา teacher ด้วย id
  GetdataTeacherByid() {
    this.getdataTeacherByid(this.teacherId).subscribe(data => {
      this.form = data;
      console.log(data);
    })
  }
  getdataTeacherByid(teacherId: string) {
    return this.http.get(`${environment.apiUrl}Classroom/GetdataTeacherByid/${teacherId}`);
  }


  // ลบข้อมูลอาจารย์
  DeleteDataTeacher() {
    this.deleteDataTeacher(this.form.teacherId).subscribe(data => {
      window.location.reload();
      console.log("ลบข้อมูลสำเร็จแล้ว");
    })

  }
  deleteDataTeacher(teacherId: string) {
    return this.http.delete(`${environment.apiUrl}Classroom/DeleteDataTeacher/${teacherId}`);
  }


}

