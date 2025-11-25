# 📘 Angular Training – README

## 🚀 Overview
Repository ini berisi materi, contoh kode, dan project untuk **Training Angular**. Training ini dirancang mulai dari tingkat dasar hingga menengah — mencakup komponen, routing, services, reactive forms, serta best practice.

---

## 🎯 Tujuan Pembelajaran
Setelah mengikuti training ini, peserta akan mampu:
- Memahami struktur dan arsitektur Angular
- Membuat Component, Module, dan Service
- Menggunakan data binding, event binding, lifecycle hooks
- Menggunakan Directive & Pipe
- Membangun aplikasi SPA dengan Routing & Guard
- Mengelola state dengan Reactive Forms
- Melakukan API handling (HTTP Client)
- Mendesain struktur project scalable
- Membuat mini-project dengan best practice

---

## 📦 Prerequisites
| Aplikasi | Versi Minimum | Keterangan |
|---------|----------------|------------|
| Node.js | 18+ | Required |
| Angular CLI | 15+ | `npm install -g @angular/cli` |
| VSCode | — | Rekomendasi editor |

---

## 🛠️ Cara Instalasi
```bash
git clone https://github.com/your-org/angular-training.git
cd angular-training
npm install
ng serve -o
```
Aplikasi berjalan di: **http://localhost:4200**

---

## 📚 Kurikulum Training
### 1. Pengenalan Angular
- Apa itu Angular?
- SPA (Single Page Application)
- Struktur project Angular

### 2. Fundamental
- Component & Template
- Data Binding
- Event Binding
- Property Binding
- Two-way Binding (ngModel)

### 3. Directive & Pipe
- *ngIf, *ngFor, ngSwitch
- Custom Directive
- Built-in & Custom Pipe

### 4. Services & Dependency Injection
- Membuat service
- Inject service ke component
- Observable

### 5. Routing
- Routing dasar
- Child Routing
- Parameter
- Route Guard (AuthGuard)

### 6. Forms
- Template-Driven Forms
- Reactive Forms
- FormBuilder, FormControl, FormGroup
- Custom validation

### 7. HTTP Client
- GET, POST, PUT, DELETE
- Interceptor
- Error handling

### 8. State Management (Basic)
- Sharing data antar component
- BehaviorSubject
- Local storage handling

### 9. Best Practices Project
- Scalable folder structure
- Clean code convention
- Component communication
- API abstraction

### 10. Final Project
Membangun aplikasi CRUD:
- Dashboard
- CRUD Products
- Form validation
- API integration

---

## 🧪 Contoh Command Angular CLI
```bash
ng new my-app
ng generate component components/header
ng generate module features/auth --route auth --module app.module
ng generate service services/user
ng generate pipe shared/pipes/capitalize
```

---

## 🧰 Tools Pendukung
- Angular CLI
- VSCode Extensions:
  - Angular Language Service
  - Prettier
  - ESLint
- Chrome DevTools
- Postman / Thunder Client

---

## 📝 Tugas / Exercise
### Level 1 – Basic
- Membuat komponen Header & Footer
- Input binding + Output binding
- Menggunakan *ngFor untuk list product

### Level 2 – Intermediate
- Membuat service untuk mengambil data dari API public

### Level 3 – Final Project
Build aplikasi CRUD sederhana:
- Dashboard
- Product CRUD
- Validasi form lengkap
- Error handling
- Reusable table component

---

## 🤝 Kontribusi
Pull Request diterima untuk:
- Menambah contoh kode
- Menambah latihan
- Menambah dokumentasi
- Menambah modul

---

## 📄 Lisensi
MIT License © 2025
