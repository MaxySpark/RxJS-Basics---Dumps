import { interval, timer } from 'rxjs';

const observer = {
  next: (value: any) => console.log('next', value),
  error: (error: any) => console.log('error', error),
  complete: () => console.log('complete'),
};

const source$ = interval(2000); // Repeat after 2 sec
const sourceTwo$ = timer(5000, 1000); // First Value after 5 sec then repeat after every 1 sec
const sourceThree$ = timer(0); // First Value after 0 sec then stop

const subscription = source$.subscribe(observer);
const subscriptionTwo = sourceTwo$.subscribe(observer);
const subscriptionThree = sourceThree$.subscribe(observer);
