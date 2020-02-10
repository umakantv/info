/* 
Contents:
- HTMLElement.addClasses
- myThemeColors, ThemeManager
- Alert
- FormFeedback
- randomizeArray
- CustomFormData
- deepEqual
*/


/* ------------------------------- */

document.querySelectorAll('a[href="#"]').forEach(e => {
  e.addEventListener('click', (e) => {
    e.preventDefault();
  })
})

HTMLElement.prototype.addClasses = function (classes) {
  classes.forEach(c => {
    this.classList.add(c);
  });
}
HTMLElement.prototype.removeClasses = function (classes) {
  classes.forEach(c => {
    this.classList.remove(c);
  });
}

/* ------------------------------- */

var myThemeColors = {
  bg: getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
  color: getComputedStyle(document.documentElement).getPropertyValue('--color').trim(),
}

/* ------------------------------- */
class CustomAlert {
  constructor(div = null) {
    this.init();
  }
  show() {
    this.elm.classList.remove('hide');
  }
  hide() {
    this.elm.classList.add('hide');
  }
  setContent(elm) {
    this.content.innerHTML = '';
    this.content.appendChild(elm);
  }
  init() {
    var elm = document.createElement('div');
    elm.addClasses(['flex', 'fullscreen', 'hide']);

    elm.addEventListener('click', (e) => {
      if(e.target == elm) this.hide();
    });
    
    var w = document.createElement('div');
    w.style.maxHeight = '600px';
    w.style.overflow = 'auto';
    w.addClasses(['animate-pop', 'col-12', 'col-md-8', 'col-lg-6']);

    var clsbtn = document.createElement('div');
    clsbtn.addClasses(['absolute', 'p-top', 'p-right', 'mr-10']);
    clsbtn.innerHTML = `<i class="material-icons">close</i>`;
    
    clsbtn.addEventListener('click', (e) => {
      this.hide();
    });

    var content = document.createElement('div');
    content.addClasses(['card', 'ms-10', 'p-20', 'rounded']);
    this.content = content;
    
    w.appendChild(clsbtn);
    w.appendChild(content);
    elm.appendChild(w);
    this.elm = elm;
    document.body.appendChild(elm);
  }
}

var Alert = new CustomAlert();
/* ------------------------------- */

// FormFeedback has been move to src/Components/Utility

/* ------------------------------- */

// randomizeArray has been move to src/Components/Utility
/* ------------------------------- */

// CustomFormData has been move to src/Components/Utility

/* ------------------------------- */
// deepEqual has been move to src/Components/Utility

/* ------------------------------- */