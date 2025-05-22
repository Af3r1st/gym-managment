# Gym Management System

_"Pocket Gym"_ je full-stack webová aplikace postavená na technologii MERN (MongoDB, Express, React, Node.js). Je navržena tak, aby pomáhala majitelům a manažerům fitness center efektivněji řídit provoz svých posiloven.



---

## Funkce

- Autentizace a autorizace uživatelů
- Správa uživatelských profilů
- Přehledové (dashboard) zobrazení statistik a příjmů posilovny
- Správa členů posilovny (přidávání, úpravy, mazání)
- Správa personálu posilovny (přidávání, úpravy, mazání)
- Vytváření a správa lekcí (plánování a rezervace)
- Příjímání a správa plateb za členství a lekce
- Generování reportů a export dat do CSV (již brzy)

---

## Použité technologie

- MongoDB pro správu databáze
- Express pro server-side routing a middleware
- React pro tvorbu uživatelského rozhraní na klientovi
- Node.js pro server-side JavaScript
- Tailwind CSS pro responzivní design
- Stripe pro zpracování plateb (brzy)

---

## Začínáme

Pro spuštění aplikace Gym Manager postupujte podle následujících kroků:

1. Naklonujte si tento repozitář do svého zařízení.
2. V kořenové složce projektu nainstalujte potřebné závislosti pomocí `npm install`.
3. Vytvořte soubor `.env` a vložte do něj URI vaší MongoDB databáze.
4. Přejděte do složky `server` a zde také nainstalujte závislosti pomocí `npm install`.
5. Ve složce `server` spusťte backend server pomocí `npm start`.
6. Poté přejděte do složky `client` a spusťte vývojový frontend server pomocí `npm start`.
7. Aplikaci otevřete ve webovém prohlížeči na adrese `http://localhost:3000`.
