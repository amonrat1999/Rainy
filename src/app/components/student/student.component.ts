import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  form: any = {
    studentId: null,
    studentName: null,
    studentAge: null,
    studentTel: null
  }
  studentId: any;
  getDataStudent: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetdataStudentAll();
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


  AddDataStudentId() {
    this.addDataStudentId(this.form).subscribe(data => {
      window.location.reload();
      console.log(data);
    })
  }
  addDataStudentId(studentId: string) {
    return this.http.post(`${environment.apiUrl}Classroom/AddDataStudent`, studentId);
  }
  // ลบข้อมูล
  DeleteDataStudent(studentId: string) {
    this.deleteDataStudent(studentId).subscribe(data => {
      this.GetdataStudentAll()
      console.log("ลบข้อมูลนักศึกษาสำเร็จ");
    })
  }

  deleteDataStudent(studentId: string) {
    return this.http.delete(`${environment.apiUrl}Classroom/DeleteDataStudent/${studentId}`);
  }

  // แก้ไขข้อมูล
  EditDataStudent() {
    // this.form.studentId = this.studentId;
    this.editDataStudent(this.form).subscribe(data => {
      this.GetdataStudentAll()
      console.log("แก้ไขข้อมูลนักศึกษาสำเร็จ")
    })

  }
  editDataStudent(studentId: string) {
    return this.http.put(`${environment.apiUrl}Classroom/EditDataStudent`, studentId)
  }

  GetDataStudentById(studentId: string) {
    this.getDataStudentById(studentId).subscribe(data => {
      this.form = data;
      console.log(this.form);
    })
  }
  getDataStudentById(studentId: string) {
    return this.http.get(`${environment.apiUrl}Classroom/GetDataStudentById/${studentId}`);
  }
}


