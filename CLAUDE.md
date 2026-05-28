---
project_name: LABO42018
project_type: "academic-2nd-semester"
complexity: "medium"
technologies: "typescript, angular-6, javascript, highcharts, bootstrap"
description: "Laboratorio IV 2018 - Segundo parcial de Programación III (La Comanda PWA + Angular v6)"
status: "completed"
role_match: "Frontend Developer, PWA Developer"
---

# 📌 LABO42018

## 🎯 Descripción

**Laboratorio IV 2018** - Segundo parcial de **Programación III**.
Contiene proyecto "La Comanda" (PWA) y ejemplos de Angular v6.

**Directorios principales:**
- `PracticaParcial/` - Código del parcial
- `laComanda-master/` - Backend de la comanda
- `PARCIAL/` y `PARCIALOK/` - Versiones del parcial
- `Ejercicio-Servicios/` - Ejemplos de servicios REST
- `TP_LAV4_2017-master/` - Trabajo práctico del año anterior

## 🛠️ Tecnologías

- **Lenguajes:** TypeScript, JavaScript
- **Frameworks:** Angular v6.x
- **UI:** Angular Material v6, ng-bootstrap v4, PrimeNG v6
- **Charts:** Highcharts v6, Chart.js (si aplica)
- **Auth:** Auth0 Angular JWT
- **CSV:** angular2-csv
- **Testing:** Jasmine, Karma, Protractor

## 📁 Estructura del Proyecto

```
LABO42018/
├── CLAUDE.md              ← Este archivo
├── .claude/               ← Configuración
│   ├── settings.json
│   ├── agents/
│   ├── commands/
│   ├── hooks/
│   ├── rules/
│   └── skills/
├── .git/
├── ANOTACIONES/           ← Notas de clase
│   ├── ANOTACIONES_8-11.txt
│   ├── Anotaciones_CLASE*.txt
│   └── ...
├── CLASES/                ← Clases del curso
│   ├── CLASE1/
│   ├── CLASE2/
│   ├── CLASE4-TEMARIO/
│   ├── CLASE5-SERVICIOS/
│   └── ...
├── Ejercicio-Servicios/   ← Ejemplos de REST API
├── laComanda-master/      ← Backend de la comanda
├── MAYORMENOR/            ← Ejercicio de ordenación
├── node_modules/          ← Dependencias npm
├── parcialRecu/           ← Parcial recuperatorio
├── PracticaParcial/       ← Código del parcial
├── package.json           ← Dependencias
├── package-lock.json
├── PRUEBAS.html           ← HTML de pruebas
├── README.md
├── src/                   ← Código fuente
├── tsconfig.json
├── tslint.json
└── TP_LAV4_2017-master/   ← Trabajo práctico anterior
```

## 📦 Dependencias Principales

```json
{
  "@angular/animations": "^6.0.2",
  "@angular/cdk": "^6.0.2",
  "@angular/common": "^6.0.0",
  "@angular/compiler": "^6.0.0",
  "@angular/core": "^6.0.0",
  "@angular/flex-layout": "^6.0.0-beta.15",
  "@angular/forms": "^6.0.0",
  "@angular/http": "^6.0.0",
  "@angular/material": "^6.0.2",
  "@angular/platform-browser": "^6.0.0",
  "@angular/platform-browser-dynamic": "^6.0.0",
  "@angular/router": "^6.0.0",
  "@auth0/angular-jwt": "^2.0.0",
  "@ng-bootstrap/ng-bootstrap": "^4.0.0",
  "angular-file-uploader": "^4.1.4",
  "angular-highcharts": "^6.2.6",
  "angular2-csv": "^0.2.9",
  "bootstrap": "^4.x.x",
  "font-awesome": "^4.7.0",
  "highcharts": "^6.2.0",
  "jquery": "^3.3.1",
  "primeicons": "^1.0.0",
  "primeng": "^6.1.6",
  "rxjs": "^6.0.0",
  "zone.js": "^0.8.26"
}
```

## 🚀 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
ng serve

# Build para producción
ng build

# Ejecutar tests
npm test

# Linting
ng lint
```

## 💡 Puntos Clave para el Desarrollador

1. **Angular v6:** Versión específica del curso 2018
2. **La Comanda:** Proyecto PWA de pedidos de restaurantes
3. **Highcharts:** Gráficos en dashboards
4. **Auth0:** Autenticación con Auth0
5. **Generación de CSV:** Exportar datos a Excel
6. **Bootstrap + Material:** UI híbrida

## 🔒 Seguridad y restricciones

- **NUNCA** commitear `node_modules/`
- **NUNCA** commitear `.env` ni credenciales de Auth0
- **NUNCA** hardcodear API keys de Highcharts
- **NUNCA** commitear `package-lock.json` sin revisión
- Validar y sanitizar todos los inputs

## 📝 Contexto del Proyecto

- **Asignatura:** Programación III (Laboratorio)
- **Periodo:** 2018 (Lab IV)
- **Tipo:** Segundo parcial + trabajo práctico
- **Audiencia:** Estudiantes de desarrollo web
- **Enfoque:** PWA, Angular Material, dashboards, gráficos

---
*Memoria de proyecto generada por Claude*
