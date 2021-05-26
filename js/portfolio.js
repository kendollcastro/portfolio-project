// eslint-disable-next-line no-use-before-define
filterSelection('all'); // Execute the function and show all columns
function filterSelection(c) {
  let i;
  const x = document.getElementsByClassName('column');
  // eslint-disable-next-line no-param-reassign
  if (c === 'all') c = '';
  // Add the "show" class (display:block) \
  // to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    // eslint-disable-next-line no-use-before-define
    w3RemoveClass(x[i], 'show');
    // eslint-disable-next-line no-use-before-define
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], 'show');
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  let i;
  const arr1 = element.className.split(' ');
  const arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      // eslint-disable-next-line no-param-reassign
      element.className += ` ${arr2[i]}`;
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  let i;
  const arr1 = element.className.split(' ');
  const arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  // eslint-disable-next-line no-param-reassign
  element.className = arr1.join(' ');
}

// Add active class to the current button (highlight it)
const btnContainer = document.getElementById('myBtnContainer');
const btns = btnContainer.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

/* ******** Github Activity ******* */

const total = document.querySelector('.github-activity a span');

const UserUrl = 'https://api.github.com/users/kendollcastro';

const GithubData = () => {
  fetch(UserUrl, {
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok " + response.status');
      }

      return response.json();
    })
    .then((data) => {
      const github = data.public_repos;
      total.innerHTML = `${github}`;
    })
    .catch((error) => {
      console.log('error', error);
    });
};

GithubData();
