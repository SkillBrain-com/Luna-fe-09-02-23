# Navigare in terminal
```bash
#WINDOWS/UNIX/GITBASH
# navigam in folderul1
cd folder1

#WINDOWS/UNIX/GITBASH
# navigam in folderul anterior
cd ..

#WINDOWS/UNIX/GITBASH
# navigeaza intr-un folder anume
cd ~/Desktop/

#UNIX/GITBASH
#afiseaza toate fisierele din folderul in care ne aflam
ls

#UNIX/GITBASH
#afiseaza folderul/calea pana la folderul in care suntem
#pwd -> print working directory
pwd

#UNIX/GITBASH
#golirea terminalului (pentru claritate)
clear

#WINDOWS
#afiseaza toate fisierele din folderul in care ne aflam
#afiseaza folderul/calea pana la folderul in care suntem
dir

#WINDOWS
#golirea terminalului (pentru claritate)
#cls -> clear screen
cls
```

# Pentru a vedea foldere invizibile
> Folderele invizibile au numele cu . in fata de exemplu .git
> Pe macos mergem in folder si apasam command + shift + .
> In folder mergem la View > Show > Hidden files
https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5


# Comenzi git
```bash
# am initializat un repo in folderul in care ma aflu
# adica s-a creat un folder ascuns numit .git
git init

# Acest pas se face o singura data pentru autentificare
git config --global user.name "unsernamegit"
git config --global user.email "mailulmeudegit@gmail.com"

# legam folderul/ repo-ul local de repo-ul de pe github
# git remote add origin url
# url reprezinta url-ul repo-ului de pe git
git remote add origin https://github.com/cezarmocanu/git-intro-1.git

# adaugam TOATE modificarile
git add .

# Ne indica ce fisiere au fost adaugate in commit
# verde adaugate in commit
# rosu ne adaugate in commit
git status

# Creeaza un commit local
# Impachetam toate modificarile si adugam o eticheta cu un mesaj descriptiv
# Mesajul trebuie sa fie intre gilimele
git commit -m "Mesaj commit"

# In cazul in care este primul commit dupa autentificare git-ul va va sugera sa va logati pe web

# Trimite pe cloud/github toate commiturile locale
git push

#** Comanda poate sa fie modificata in cazul in care nu exista ramuri/branch-uri
## sau in cazul in care lucram pe o ramura care nu exista pe cloud
git push --set-upstream origin main

# Clonam/descarcam un repo de pe github in folderul in care ne aflam
# git clone url
# url reprezinta url-ul repo-ului de pe git
git clone https://github.com/cezarmocanu/git-intro-1.git
```

# Cum creez un branch/cum lucrez pe un branch
# Atentie! Nu putem sa ne mutam pe o alta ramura, atata timp cat avem fisiere modificate sau commituri netrimise
```bash
#Creez o comanda in cloud folosind interfata de la github

# Se informeaza de diferentele dintre proiectul meu local si ce e pe cloud
# Afla daca a aparut vreun branch nou pe cloud/ daca au aparut modificari 
# Fara sa descarce aceste modificari 
git fetch

# Ne mutam proiectul pe ramura dorita
# Numele ramurii este cel pe care l-am pus pe github
git checkout branch-name

# Facem modifiarile dorite pe aceasta ramura
# Testam modificarile

# Add commit push
# Adauga modificarile intr-un commit si le trimite pe cloud pe branch-ul pe care lucram
git add .
git commit -m "Mesajul meu"
git push

# Cand am finalizat toate modificarile din interfata de la Github creem un Pull Request (PR)

# Dupa ce Pull Requestul este aprobat putem uni branch-ul nostru cu cel principal/sursa
```

# Cum descarcam modificarile de pe un branch?
```bash

# ne mutam pe branch-ul dorit
git checkout branch-name

# descarcam modificarile
git pull
```

# Cum procedam daca din momentul in care am creat branc-ul nostru, s-au produs modificari pe branch-ul sursa
```bash
# ne mutam pe branch-ul dorit
git checkout branch-name

# preluam diferentele fara sa le descarcam
git fetch

# descarcam modificarile
git pull

# in cazul in care observam ca modificarile nu au venit/nu s-au produs
# putem face merge, adica luam manual modificarile de pe branch-ul sursa
# si le unim cu branc-ul nostru
# git merge sursa tinta
# sursa este ramura sursa
# tinta este ramura pe care lucram noi/ramura tinta
git merge main tabel-comenzi

# in cazul in care apar conflicte mergem in editor si rezolvam manual conflictul
# in functie de situatie, alegem bucatile de cod de interes
# dupa ce conflictele sunt rezolvate si am testat codul putem face un commit

git add .
git commit -m "Am facut merge manual pentru a lua ultimele actualizari din main"
git push
```
