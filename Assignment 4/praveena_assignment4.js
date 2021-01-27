/*
 ===========================
 Question 01
 ===========================
 */
/**
 * Question:  How many ways we can access elements in the DOM?
 
 * Answer:
    There are five ways to find HTML elements.
    1.Finding by id
        at .html file :
        <p id="name">Hello Everyone</p>

        at .js file :
        var v = document.getElementById("name");
        console.log(v);

    2.Finding by  tag name
        at .html file :
        <p>Hello Everyone</p>

        at .js file :
        var v1 = document.getElementByTagName("p");
        
    3.Finding by class name
        at .html file :
        <h1 class="greet">Wishes</h1>
        
        at .js file :
        var v2 = document.getElementByClassName("greet");

    4.Finding by CSS selectors
        To find the HTML elements which matches with specific CSS selectors
        (Examples of elements: class, id)

        at .html file :
        <p class="topic">Environment</p>
        
        at .js file :
        var v2 = document.querrySelectorAll("p.topic");

    5.Finding by HTML object collection
 */




 /*
 ===========================
 Question 02
 ===========================
 */

 function addNumbers(){
     var n1, n2, tot;
    n1 = Number(document.getElementById("no1").value);
    n2 = Number(document.getElementById("no2").value);
    tot = n1 + n2;

    document.getElementById("sum").value=tot;
}