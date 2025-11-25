📘 Angular Training – README
🚀 Overview

Repository ini berisi materi, contoh code, dan project untuk Training Angular.
Training ini dirancang untuk peserta yang ingin memahami Angular dari dasar hingga level menengah—mulai dari komponen, routing, services, hingga reactive forms dan best practice development.

🎯 Tujuan Pembelajaran

Setelah mengikuti training ini, peserta akan mampu:

Memahami struktur dan arsitektur Angular

Membuat komponen, module, dan service

Menggunakan data binding, event binding, dan lifecycle hooks

Menggunakan directive & pipe

Membangun aplikasi SPA dengan Routing & Guard

Mengelola state dengan Reactive Forms

Melakukan API handling (HTTP Client)

Mengatur struktur project secara scalable

Membuat mini-project akhir dengan best practice

📦 Prerequisites

Sebelum memulai, pastikan sudah menginstal:

Aplikasi	Versi Minimum	Keterangan
Node.js	18+ 
Angular CLI	15+	npm install -g @angular/cli
VSCode	—	Rekomendasi editor
🛠️ Cara Instalasi
1. Clone Repository
git clone https://github.com/your-org/angular-training.git
cd angular-training

2. Install Dependencies
npm install

3. Jalankan Aplikasi
ng serve -o


Aplikasi akan berjalan di:
👉 http://localhost:4200

📚 Kurikulum Training
1. Pengenalan Angular

Apa itu Angular?

SPA (Single Page Application)

Struktur project Angular

2. Fundamental

Component

Template

Data Binding

Event Binding

Property Binding

Two-way Binding (ngModel)

3. Directive & Pipe

*ngIf, *ngFor, ngSwitch

Custom Directive

Built-in Pipes & Custom Pipes

4. Services & Dependency Injection

Membuat service

Inject service ke component

Observable

5. Routing

Routing dasar

Child Routing

Parameter routing

Route Guard (AuthGuard)

6. Forms

Template-Driven Forms

Reactive Forms

FormBuilder, FormControl, FormGroup

Validasi custom

7. HTTP Client

GET, POST, PUT, DELETE

Interceptor

Error handling

8. State Management (Basic)

Sharing data antar component

BehaviorSubject

Local storage management

9. Best Practices Project

Folder structure scalable

Clean code convention

Component communication

API abstraction

10. Final Project

Membuat aplikasi CRUD lengkap:

Dashboard

CRUD Products

Form validation

API Integration

🧪 Contoh Command Angular CLI
ng new my-app
ng generate component components/header
ng generate module features/auth --route auth --module app.module
ng generate service services/user
ng generate pipe shared/pipes/capitalize

🧰 Tools Pendukung Training

Angular CLI

VSCode Extensions:

Angular Language Service

Prettier

ESLint

Chrome DevTools

Postman / Thunder Client

📝 Tugas / Exercise Peserta
Level 1 – Basic

Membuat komponen Header & Footer

Input binding + output binding

Menggunakan *ngFor untuk list product

Level 2 – Intermediate

Membuat service mengambil data dari API public

Level 3 – Final Project

Build aplikasi CRUD sederhana:

Dashboard

Halaman Product: Create, Read, Update, Delete

Validasi form lengkap

Handling error API

Reusable table component

🤝 Kontribusi

Repo ini dapat dikembangkan.
Pull Request sangat diterima untuk:

Menambah contoh code

Menambah latihan

Menambah dokumentasi

Menambah modul pembelajaran

📄 Lisensi

MIT License © 2025
