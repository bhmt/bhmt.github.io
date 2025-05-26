---
title: Plave stranice
description: Curenje podataka o korisnicima Facebooka
---

U travnju 2021. Facebook je doživio curenje podataka.

Cyberkriminalci su pristupili osobnim podacima više od pola milijuna korisnika Facebooka i objavili ih na hakerskom forumu. Iako se često naziva jednim od najvećih kibernetičkih napada 2021., prvotni napad zapravo se dogodio 2019., ali se ponovno pojavio dvije godine kasnije, proganjajući dioničare i korisnike Facebooka.

## Koji podatci su postali javni?

U curenju podataka na Facebooku hakeri su pristupili informacijama 533 milijuna korisnika iz 106 zemalja, od kojih su većina bili Amerikanci. Curenje nije uključivalo nikakve financijske ili zdravstvene informacije, ali je uključivalo sljedeće:

- Facebook identiteti - poveznica do profila
- Puna imena
- Datumi rođenja
- Lokacije
- E-mail adrese

## Podatci

U nastavku su primjeri podataka koji je moguće pretražiti po imenu i prezimenu, a imaju pozivni broj +385.

Pretražite svoje korisničko ime i provjerite jesu li vaši podatci bili otkriveni.


<div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/sql-wasm.js" integrity="sha512-Yra4xuTWinXfBpG2ftgDX8MVmMiOev1FtqiYs51+kEna/5peD0kZqAL1syYCH61f9gxmAFidIJz42IKcRhWMkw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js"></script>
  <script src="/js/db.js"></script>
  <script src="/js/table.js"></script>
  <link rel="stylesheet" href="/css/table_form.css">


  <script>
      function handleForm(e) {
          event.preventDefault();
          const first = document.getElementById('fbfirst').value.trim();
          const last = document.getElementById('fblast').value.trim();

          let results = Query(first, last);

          const rDiv = document.getElementById('fbresults');
          if (results === null) {
              rDiv.innerText = 'Došlo je do greške kod pretraživanja.';
              return;
          }
          
          if (results.length === 0) {
              rDiv.innerText = 'Nema resultata.';
              return;
          }

          rDiv.innerHTML = generateTable();
          renderTable(results);
      }
  </script>

  <div class="form-container">
    <form onsubmit="handleForm(event)">
      <div class="form-group">
        <label>
          Ime
          <input type="text" id="fbfirst" required />
        </label>
      </div>
      <div class="form-group">
        <label>
          Prezime
          <input type="text" id="fblast" required />
        </label>
      </div>
      <button id="submit" type="submit">Pretraži</button>
    </form>
  </div>

  <div id="fbresults"></div>
</div>
