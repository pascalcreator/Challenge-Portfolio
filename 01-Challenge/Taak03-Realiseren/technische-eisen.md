# Challenge Portfolio: Technische Eisen

## Onderdelen:

- Een Menu dat linked naar de verschillende paginas.
- Pagina "About"
    > Dit is de pagina die een bezoeker als eerste ziet als hij op je portfolio komt. Deze moet `index.html` heten. Op deze pagina introduceer je jezelf en geef je een korte uitleg over wat een bezoeker kan verwachten van de rest van je portfolio website.
- Pagina "Interests"
    > Op deze pagina kun je dieper ingaan op eventuele hobbies en/of interesses.
- Pagina "Projects"
    > Op deze pagina heb je plek om de Software Ontwikkeling projecten waar je trots op bent te kunnen presenteren. 
- Pagina "Contact"
    > Hier kun je aangeven op welke manier bezoekers van je portfolio contact met je kunnen opnemen. Denk hierbij aan het vermelden van je ROC email adres (voornaam.achternaam@student.rocva.nl, *niet* je studentennummer@talnet.nl!) en eventuele links naar Social Media.  
        > 
        > :warning: LETOP: als je linked naar Social Media bedenk dan dat je portfolio gezien gaat worden door stagebedrijven en later misschien eventuele werkgevers. Zorg er dus voor dat je alleen linked naar accounts die daar geschikt voor zijn en bij de bezoeker een proffesionele indruk zouden achter laten.
   
## Technische eisen



### Elke pagina bevat:

1. De root van je portfolio website moet de `/portfolio` map zijn. Dit is dus waar je `index.html` staat.
2. Elke pagina is correct opgebouwd met `DOCTYPE`, `HTML`, `HEAD` en `BODY` elementen.
3. Elke pagina bevat een correcte titel voor de desbetreffende pagina in het `TITLE` element
4. Het menu is zichtbaar en bruikbaar op elke pagina 
5. Elke pagina is logisch verdeeld en er wordt gebruikt gemaakt van semantische elementen. (`NAV`, `HEADER`, `SIDEBAR`, `MAIN`, `ARTICLE` en/of `FOOTER`)
6. CSS en Javascript code staat in externe bestanden in een eigen submap (`/css` en `/js`) van de website en wordt gelinked vanuit de html bestanden

Gebruik zoveel mogelijk HTML/CSS technieken zoals je die heb leren kennen in Frontend-Basic en Frontend-Essentials. Dit betekent dat je juiste HTML elementen (tags) gebruikt voor onderdelen van je portfolio. Dus als je een lijst hebt met punten maak daar dan een ordered of unordered list van. Wil je informatie tonen die het beste in een tabel is te vatten, maak daar dan een tabel van. Het is aan jou om te beslissen welke elementen het beste kunnen worden toegepast in een bepaalde situatie.

Onderstaande lijst is een beknopt overzicht van de HTML/CSS en JS technieken die behandeld zijn in de Frontend-Basic en Essentials modules. Kijk voor uitleg bij de desbetreffende modules. Uiteraard is het toegestaan niet behandelde technieken te gebruiken.

#### HTML
```html
<!-- Frontend-Basic -->
    <!DOCTYPE html>
    <head> en <title> en <body>
    <h1> t/m <h6> en <p>
    <a href="">
    <img src="">
    class- en id-atributen (<element class="" id="">)

<!-- Frontend-Essentials -->
    <ul> en <ol> met <li>
    <nav> en <article>
    <table> met <thead> en <tr> en <td>
    <link rel="" href="">
    <script src=""> 
```

#### CSS
```css
/* Frontend-Basic */
    background-color
    color

/* Frontend-Essentials */
    display
    boxmodel met border en margin en padding
    flexbox met row / row-reverse en column / column-reverse en justify-content / align-items
```

#### Javascript
```javascript
// Frontend-Basic
    alert() en prompt() en confirm()
    Let (Variabelen) 

// Frontend-Essentials
    console.log()
    variabelen met datatypes
    objects met properties
    string concattenation
    if / else
    document.queryselector()
```


## Live zetten mbv Github Pages

[![Wat is Github Pages?](https://img.youtube.com/vi/2MsN8gpT6jY/maxresdefault.jpg)](https://www.youtube.com/watch?v=2MsN8gpT6jY?start=0&end=10)

Github pages geef je de mogelijkheid om één repository in je account live te zetten. Zie [deze link](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) voor een uitleg over hoe je de Challenge repository live zet. Je portfolio zal te zien zijn op `github_username.github.io`.
>
> :warning: LETOP: je moet aangeven dat je de `portfolio` submap van deze repository als root wilt hebben staan. 