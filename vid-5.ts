import { of, range } from 'rxjs';

const observer = {
  next: (value: any) => console.log('next', value),
  error: (error: any) => console.log('error', error),
  complete: () => console.log('complete'),
};

const source$ = of(1, 2, 3, 4, 5);
const sourceTwo$ = range(1, 5);

const subscription = source$.subscribe(observer);
const subscriptionTwo = sourceTwo$.subscribe(observer);
