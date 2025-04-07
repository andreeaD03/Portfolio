# Portfolio

My personal portfolio:

1.Titlu: Aplicație Blog în React

    Obiectiv:
    Construiește o aplicație web de tip blog folosind React, care să afișeze o listă de postări și să permită vizualizarea detaliată a fiecărei postări.

    Cerințe Funcționale: 1. Listă de Postări:
    • Afișează o listă de postări preluate dintr-o sursă externă (de exemplu, API-ul JSONPlaceholder).
    • Fiecare element din listă trebuie să afișeze cel puțin titlul postării.
    • Limitarea numărului de postări afișate (de exemplu, primele 10 postări). 2. Vizualizare Detaliată a Postării:
    • Când utilizatorul face click pe o postare din listă, se va naviga către o pagină de detaliu.
    • Pagina de detaliu va afișa informații complete despre postare (titlu, conținut, eventual autor). 3. Navigare:
    • Implementarea navigării folosind React Router.
    • Asigură-te că utilizatorul poate reveni ușor la lista principală de postări. 4. Stare și Efecte:
    • Utilizează React Hooks (useState, useEffect) pentru gestionarea stării și a efectelor secundare (de exemplu, preluarea datelor).
    • Afișează un indicator de încărcare (spinner sau mesaj) în timpul preluării datelor.

    Cerințe Tehnice: 1. Structura Proiectului:
    • Utilizează Create React App pentru a porni proiectul.
    • Organizează componenta pe fișiere separate (ex: componente pentru listă și detaliu). 2. Gestionarea Rutei:
    • Configurează rutele pentru pagina de listă și pagina de detaliu.
    • Asigură-te că URL-urile sunt semnificative (de exemplu, /posts pentru listă și /posts/:id pentru detaliu). 3. Consum API:
    • Realizează cereri HTTP pentru a prelua datele dintr-un API extern.
    • Gestionează eventualele erori de rețea și afișează mesaje corespunzătoare în interfața utilizator. 4. Calitatea Codului:
    • Scrie cod curat și bine organizat.
    • Respectă principiile componentelor reutilizabile și a separării responsabilităților.
    • Include comentarii unde este necesar și asigură-te că denumirile variabilelor și funcțiilor sunt semnificative. 5. Stilizare:
    • Aplică un design simplu și modern, fie folosind CSS modulare, fie folosind o bibliotecă de componente (ex: Material UI sau Bootstrap).
    • Asigură-te că interfața este responsive și accesibilă.

    Extensii Opționale:
    • Filtrare și Căutare: Adaugă funcționalitate pentru filtrarea sau căutarea postărilor în funcție de titlu sau conținut.
    • Pagini Multiple: Implementează paginare pentru lista de postări dacă se afișează mai multe de 10.
    • Testare: Include teste unitare sau de integrare pentru componentele cheie ale aplicației.
    • Stare Globală: Dacă este cazul, folosește un manager de stare (ex: Context API, Redux) pentru a gestiona starea aplicației la nivel global.
