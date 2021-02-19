document.getElementById('button').addEventListener('click', movie)

let age = 17

function movie () {
  age = document.getElementById('input').value
  age = parseInt(age)
  if (age >= 17) {
    document.getElementById('answer').innerHTML = 'You can see R rated movies'
  } else if (age >= 13) {
    document.getElementById('answer').innerHTML = 'You can see PG-13 movies'
  } else if (age >= 5) {
    document.getElementById('answer').innerHTML = 'You can see PG movies'
  } else {
    document.getElementById('answer').innerHTML = 'You are too young for these movies'
  }
  document.getElementById('movie').innerHTML = 'Thank for verifying your age!'
}
