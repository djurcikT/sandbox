import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          home: "Home",
          dep_man: "Department Management",
          user_man: "User Management",
          title: "User Management Web-site",

          title_h: "Home page",
          title_h_card: "About this Web-site",
          introduction:
            "This is a web-site that I created during my internship in 'Muhlbauer'. It contains the main page with navigation from which you can go to different parts of the site: Home, Department Management and User Management.This is the Home page that explains each page and what it does. The Department Management page consists of a form about the each department, and then its data is placed in a table, from which you can later delete them. The User Management page consists of a form that the user fills in, and then his data is placed in a table, from which later he can delete them. ",

          title_user_man: "User Management",
          title_dep_man: "Department Management",
          userform_name: "Name:",
          userform_surname: "Surame:",
          userform_gender: "Gender:",
          userform_date: "Date of birth:",
          userform_hobby: "Hobbies:",
          userform_department: "Department:",
          userform_bio: "Biography:",
          userform_photo: "Photo:",
          userform_save: "Save user:",
          userform_save_button: "Save:",

          hobi1: "Sport",
          hobi2: "Music",
          hobi3: "Books",
          gender_f: "Female",
          gender_m: "Male",

          userform_choose_dropdown: "Choose a department",
          dep_man1: "1",
          dep_man2: "2",
          dep_man3: "3",
          dep_man4: "4",
          dep_man5: "5",
          dep_man6: "6",

          user_header1: "Name",
          user_header2: "Surame",
          user_header3: "Details",
          user_header4: "Delete",
          user_open_details: "See",
          user_details: "User info",
        },
      },
      sr: {
        translation: {
          home: "Pocetna",
          dep_man: "Upravljanje odeljenjima",
          user_man: "Upravljanje korisnicima",
          title: "Sajt za upravljanje korisnicima",

          title_h: "Pocetna stranica",
          title_h_card: "O ovom web-sajtu",
          introduction:
            "Ovo je veb-sajt koji sam napravila tokom svoje strucne prakse u 'Muhlbauer-u'. Sadrži glavnu stranicu sa navigacijom sa koje možete ići na različite delove sajta: Pocetna, Upravljanje odeljenjima i Upravljanje korisnicima. Ovo je početna stranica koja objašnjava svaku stranicu i šta ona radi. Stranica Upravljanje odeljenjem se sastoji od obrasca o svakom odeljenju, a zatim se njegovi podaci smeštaju u tabelu iz koje ih kasnije možete izbrisati. Stranica za upravljanje korisnicima se sastoji od obrasca koji korisnik popunjava, a zatim se njegovi podaci smeštaju u tabelu iz koje kasnije može da ih obriše.",

          title_user_man: "Upravljanje korisnicima",
          title_dep_man: "Upravljanje odeljenjima",
          userform_name: "Ime:",
          userform_surname: "Prezime:",
          userform_gender: "Pol:",
          userform_date: "Datum rodjenja:",
          userform_hobby: "Hobi:",
          userform_department: "Odeljenje:",
          userform_bio: "Biografija:",
          userform_photo: "Slika:",
          userform_save: "Sacuvajte korisnika:",
          userform_save_button: "Sacuvaj:",

          hobi1: "Sport",
          hobi2: "Muzika",
          hobi3: "Knjige",
          gender_f: "Zensko",
          gender_m: "Musko",

          userform_choose_dropdown: "Izaberite odeljenje",
          dep_man1: "1",
          dep_man2: "2",
          dep_man3: "3",
          dep_man4: "4",
          dep_man5: "5",
          dep_man6: "6",

          user_header1: "Ime",
          user_header2: "Prezime",
          user_header3: "Detalji",
          user_header4: "Obrisi",
          user_open_details: "Pogledaj",
          user_details: "Detalji o korisniku",
        },
      },
    },
  });
