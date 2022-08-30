import './style.css';

import { Observable, Observer } from 'rxjs';

const observer = {
  next: (value: any) => console.log('next', value),
  error: (error: any) => console.log('error', error),
  complete: () => console.log('complete'),
};

const observable = new Observable((subscriber) => {
  let count = 0;

  const id = setInterval(() => {
    subscriber.next(count);
    count++;
  }, 1000);

  return () => {
    console.log('Clean Up');
    clearInterval(id);
  };
});

const subscription = observable.subscribe(observer);
const subscriptionTwo = observable.subscribe(observer);

subscription.add(subscriptionTwo);

setTimeout(() => {
  subscription.unsubscribe();
  // subscriptionTwo.unsubscribe();
}, 3500);
