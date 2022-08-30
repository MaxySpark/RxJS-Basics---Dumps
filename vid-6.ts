import { from } from 'rxjs';

const observer = {
  next: (value: any) => console.log('next', value),
  error: (error: any) => console.log('error', error),
  complete: () => console.log('complete'),
};

const source$ = from([1, 2, 3, 4, 5]);
const sourceTwo$ = from('BHARGAB');
const sourceThree$ = from(fetch('https://api.github.com/users/octocat'));

function* hello() {
  yield 'Hello';
  yield 'World';
}

const sourceFour$ = from(hello());

const subscription = source$.subscribe(observer);
const subscriptionTwo = sourceTwo$.subscribe(observer);
const subscriptionThree = sourceThree$.subscribe(observer);
const subscriptionFour = sourceFour$.subscribe(observer);
