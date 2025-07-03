import * as c from '../lib/lib.js'

function PageIntruduction(){
    c.DeleteSec('textsec')
    c.element('h1', 'HeadTitle', 'textsec', {textContent: 'Intruduction'})
    c.element('pre', '', 'textsec', {textContent:
        `Aidex /aɪdik/ is a js libary for building html as js websites. Like this Tutorial your reading on
        `})
}
function PageElement(){
    c.DeleteSec('textsec')
    c.element('h1', 'HeadTitle', 'textsec', {textContent: 'Element()'})
    c.element('pre', '', 'textsec', {textContent: `parameters: 
    c.element(tag, id=null, parent=null, prop={})
    - creates a new element with id of {id} named {tag}
    - prop is the same as js (textContent, innerhtml...)
    - parent must be an id for an element
    `})
}
function PageGetElement(){
    c.DeleteSec('textsec')
    c.element('h1', 'HeadTitle', 'textsec', {textContent: 'GetElement()'})
    c.element('pre', '', 'textsec', {textContent: `parameters: 
    c.GetElement(id)
    - returns element of {id}
    `})
}
function PageAddCall(){
    c.DeleteSec('textsec')
    c.element('h1', 'HeadTitle', 'textsec', {textContent: 'AddCall()'})
    c.element('pre', '', 'textsec', {textContent: `parameters: 
    c.AddCall(id, function, type)
    - adds event listener {type} to {id}
    - If event listern then ativate function
    `})
}
function PageDeleteSec(){
    c.DeleteSec('textsec')
    c.element('h1', 'HeadTitle', 'textsec', {textContent: 'DeleteSec()'})
    c.element('pre', '', 'textsec', {textContent: `parameters: 
    c.DeleteSec(id)
    - removes {id} innerhtml
    `})
}
function PageNewPage(){
    c.DeleteSec('textsec')
    c.element('h1', 'HeadTitle', 'textsec', {textContent: 'NewPage()'})
    c.element('pre', '', 'textsec', {textContent: `parameters: 
    c.NewPage(page)
    - deletes every content on body
    - calls page function
    `})
}
function PageVarible(){
    c.DeleteSec('textsec')
    c.element('h1', 'HeadTitle', 'textsec', {textContent: 'Global Varible*'})
    c.element('pre', '', 'textsec', {textContent: `types:
    : c.NewVarible(var, val)
        - creates new varible {var} assigned to {var} 
    : c.EditVarible(var, val)
        - reaasing {var} to {val}
    : c.GetVar(Var)
        - returns value of {var}

    ; mainly used as the 'state management' or 'global varibles'
    `})
}
function PageOut(){
    c.DeleteSec('textsec')
    c.element('h1', 'HeadTitle', 'textsec', {textContent: 'Other stuff'})
    c.element('p', '', 'textsec', {textContent: 'to install Use [npm i aindex]'})
    c.element('p', '', 'textsec', {textContent: 'alternativaly install by clicking'})
    c.element('a', '', 'textsec', {textContent: 'here', href:'./aidex.tar', link: "aidex.tar"})
    
}
function SideList(){
    c.element('pre', 'int', 'side', {textContent:'Intruduction'})
    c.element('pre', 'ele', 'side', {textContent:'Element()'})
    c.element('pre', 'gle', 'side', {textContent:'GetElement()'})
    c.element('pre', 'acl', 'side', {textContent:'AddCall()'})
    c.element('pre', 'dle', 'side', {textContent:'DeleteSec()'})
    c.element('pre', 'npg', 'side', {textContent:'NewPage()'})
    c.element('pre', 'var', 'side', {textContent:'Varible()'})
    c.element('pre', 'out', 'side', {textContent:'Outer'})
    c.AddCall('int', PageIntruduction, 'click')
    c.AddCall('ele', PageElement, 'click')
    c.AddCall('gle', PageGetElement, 'click')
    c.AddCall('acl', PageAddCall, 'click')
    c.AddCall('dle', PageDeleteSec, 'click')
    c.AddCall('npg', PageNewPage, 'click')
    c.AddCall('var', PageVarible, 'click')
    c.AddCall('out', PageOut, 'click')
}

function PageInit(){
    c.NewVarible('section', 'Intruduction')
    c.element('link', '', '', {rel: 'stylesheet', href: 'aindex/style.css'})
    c.element('div', 'main')
    c.element('div', 'side', 'main')
    c.element('div', 'textsec', 'main')
    SideList()
    PageIntruduction()
}
PageInit()
