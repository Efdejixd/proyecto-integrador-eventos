import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({selector:'app-no-encontrado',standalone:true,imports:[RouterLink],template:`<div class="nf"><b>404</b><h1>Página no encontrada</h1><a routerLink="/">Volver al inicio</a></div>`,styles:[`.nf{text-align:center;padding:100px 20px}.nf b{font-size:6rem;color:#6d5dfc}.nf a{color:#6d5dfc;font-weight:800}`]})
export class NoEncontrado {}
