let state = {}

export function element(tag, id = null, parent = null, prop = {}) {
  const newel = document.createElement(tag);
  if (id) newel.id = id;

  if (prop && Object.keys(prop).length > 0) {
    for (const key in prop) {
      newel[key] = prop[key];
    }
  }

  if (parent) {
    const paren = document.getElementById(parent);
    if (paren) {
      paren.appendChild(newel);
    } else {
      document.body.appendChild(newel);
    }
  } else {
    document.body.appendChild(newel);
  }

  return newel;
}

export function GetElement(id){
    return document.getElementById(id)
}

export function AddCall(id, call, type){
    let Element = GetElement(id)
    Element.addEventListener(type, call)
}

export function NewPage(Page) {
  const body = document.body;
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
  Page();
}

export function DeleteSec(Id){
    GetElement(Id).innerHTML = ''
}
export function NewVarible(Var, Val){
    state[Var] = Val
}

export function EditVarible(Var, Val){
    state[Var] = Val
}

export function GetVarible(Var){
    return state[Var]
}

export function ExistVarible(Var){
    if (!Var in state){
        return false
    }
    return true
}

