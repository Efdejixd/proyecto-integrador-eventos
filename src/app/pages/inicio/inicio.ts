import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({selector:'app-inicio',standalone:true,imports:[RouterLink],template:`
<section class="hero">
  <div><span class="tag">EVENTOS · BOLETERÍA · RESERVAS</span><h1>Vive experiencias que recordarás.</h1>
  <p>Encuentra eventos, reserva tus entradas y administra todo desde un solo lugar.</p>
  <div class="actions"><a routerLink="/eventos" class="btn">Explorar eventos</a><a routerLink="/registro" class="btn secondary">Crear cuenta</a></div></div>
  <div class="visual">🎟️<small>Tu próxima experiencia comienza aquí</small></div>
</section>
<section class="features"><article><b>🔎 Encuentra</b><p>Consulta eventos disponibles por ciudad.</p></article><article><b>🎫 Reserva</b><p>Selecciona entradas y genera tu reserva.</p></article><article><b>✅ Gestiona</b><p>Revisa y administra el estado de tus reservas.</p></article></section>
`,styles:[`.hero{min-height:520px;padding:70px 8%;display:grid;grid-template-columns:1.2fr .8fr;gap:50px;align-items:center;background:linear-gradient(135deg,#f5f3ff,#eef2ff)}h1{font-size:clamp(2.6rem,6vw,5.5rem);line-height:.95;margin:18px 0;color:#101827;max-width:800px}.tag{font-weight:800;color:#6d5dfc;letter-spacing:1px}.hero p{font-size:1.15rem;color:#475569;max-width:620px}.actions{display:flex;gap:12px;margin-top:28px}.btn{padding:13px 20px;border-radius:10px;background:#6d5dfc;color:#fff;text-decoration:none;font-weight:700}.secondary{background:#fff;color:#312e81;border:1px solid #ddd}.visual{font-size:8rem;text-align:center}.visual small{display:block;font-size:1rem;color:#475569}.features{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding:45px 8%}.features article{background:#fff;padding:25px;border-radius:16px;box-shadow:0 8px 30px #0f172a10}.features b{font-size:1.2rem}@media(max-width:750px){.hero{grid-template-columns:1fr}.visual{display:none}.features{grid-template-columns:1fr}}`]})
export class Inicio {}
