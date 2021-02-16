window.addEventListener("DOMContentLoaded", (event) => {
    console.log("I am once again asking for your financial support");
    //name as h1
    //document.createElement() method creates the HTML element specified by tagName
    //Syntax: let element = document.createElement(tagName);
    //tagName: A string that specifies the type of element to be created.
    const h1 = document.createElement("h1");
    //.setAttribute :Sets the value of an attribute on the specified element
    //Syntax: Element.setAttribute(name, value);
    //name:A DOMString specifying the name of the attribute whose value is to be set. .
    // value: A DOMString containing the value to assign to the attribute. 
    h1.setAttribute("id", "Bryan");
    //Document.createTextNode() Creates a new Text node. This method can be used to escape HTML characters.
    //var text = document.createTextNode(data); text is a Text node.;data is a string containing the data to be put in the text node.
    const h1Content = document.createTextNode("Bryan")

    /*
    The DOM Node interface is an abstract base class upon which many other DOM API objects are based,
    there is no such thing as a plain Node object.
    All objects that implement Node functionality are based on one of its subclasses. Most notable are Document, Element
    */
    //The Node.appendChild() method adds a node to the end of the list of children of a specified parent node. 
    //syntax:  element.appendChild(aChild); aChild;  The node to append to the given parent node (commonly an element).
    h1.appendChild(h1Content);






});