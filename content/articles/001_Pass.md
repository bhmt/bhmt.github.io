+++
title = '1  Lozinke i autentifikacija'
+++

Razmišljajte o svojim online računima kao o svom domu.
Biste li ostavili svoja ulazna vrata širom otvorena i svoj dom dostupan svima?
Vjerojatno ne. Ali to je upravo ono što slabe lozinke i loša sigurnosna praksa čine - otvaraju vrata neovlaštenim pristupima.

U nastavku saznajte kako zaključati svoja digitalna vrata jačim lozinkama i moćnim alatom koji se zove dvofaktorska provjera autentičnosti (2FA).

## 🔐 Zašto sigurnost počinje s jakom lozinkom

Autentifikacija se odvija kada se netko pokuša prijaviti na korisnički račun društvenih mreža, stranica za online kupovinu i slično.
Za prijavu je potrebno znati identitet po kojem je korisnik poznat, s dokazom o autentičnosti korisnikovog identiteta.
To su najčešće korisničko ime ili e-posta i lozinka.

Lozinka je vaša prva linija obrane.
Ali mnogi ljudi i dalje koriste lozinke koje je lako pogoditi kao što su **123456**, **lozinka** ili čak **qwerty**.

Savjeti za jaku lozinku:

✅ Koristite najmanje 12 znakova  
✅ Pomiješajte velika i mala slova, brojeve i simbole  
❌ Izbjegavajte korištenje osobnih podataka poput imena, rođendana ili kućnih ljubimaca  
❌ Nikada nemojte ponovno koristiti lozinke na više stranica  


>
> 🛠 Koristite upravitelj lozinki (engl. _password manager_) za generiranje i pohranjivanje složenih lozinki kako ih ne biste morali sve pamtiti.
>

Više o najčešćim lozinkama pročitajte na  

[bug.hr - 200 najčešćih lozinki](https://www.bug.hr/sigurnost/otkrivamo-200-najcescih-lozinki-korisnika-iz-hrvatske-i-koliko-vremena-treba-za-24535)  
[n1info.hr - koje lozinke su najčešće](https://n1info.hr/magazin/koje-lozinke-su-najcesce/)

## 🔒Što je dvofaktorska autentifikacija ( Two Factor Authentification - 2FA)?

Čak se i jaka lozinka može ukrasti.
Tu u pomoć dolazi 2FA. 2FA dodaje drugi korak za prijavu.
To je obično kod koji se šalje na vaš telefon ili ga generira aplikacija.

Korištenje višestrukih čimbenika provjere autentičnosti za dokazivanje nečijeg identiteta temelji se na pretpostavci da je malo vjerojatno da će neovlašteni akter moći dostaviti čimbenike potrebne za pristup.
Ako u pokušaju autentifikacije barem jedna od komponenti nedostaje ili je isporučena neispravno, identitet korisnika nije utvrđen s dovoljnom sigurnošću.

Faktori dvofaktorske autentifikacije mogu uključivati:

- **Nešto što korisnik ima**: bilo koji fizički predmet u posjedu korisnika, kao što je sigurnosni token (USB stick), bankovna kartica, ključ itd.
- **Nešto što korisnik zna**: Određena znanja poznata samo korisniku, poput lozinke, PIN-a, PUK-a itd.
- **Nešto što korisnik jest**: Neka fizička karakteristika korisnika (biometrija), kao što je otisak prsta, šarenica oka, glas, brzina tipkanja, uzorak u intervalima pritiskanja tipki itd.

Primjer dvofaktorske autentifikacije je podizanje novca s bankomata - samo ispravna kombinacija bankovne kartice (nešto što korisnik posjeduje) i PIN-a (nešto što korisnik zna) omogućuje provedbu transakcije.

Tipovi 2FA metode su:

| **Tip** | **Primjer** | **Snaga** |
| :-: | :-: | :-: |
| SMS | SMS poruka s kodom| Srednja|
| Aplikacija | Google Authenticator, Authy | Jaka |
| Sigurnosni ključ (hardverski) | YubiKey, Titan Security Key | Vrlo Jaka |

## 🚨 Što izbjegavati

Nemojte zapisivati lozinke niti ih spremati u obične tekstualne datoteke.

Ne dijelite svoje lozinke s drugima - čak i ako kažu da su iz "tehničke podrške".

Nemojte koristiti istu lozinku za sve aplikacije i stranice. Ako jedna lozinka bude otkrivena, otkrivaju se sve.

## ✅ Brzi kontrolni popis

- Koristite jedinstvene lozinke za svaki račun
- Uključite 2FA gdje god je to moguće
- Koristite upravitelj lozinki
- Redovito provjeravajte jesu li vaši računi bili ugroženi (npr. [haveibeenpwned.com](https://haveibeenpwned.com))
