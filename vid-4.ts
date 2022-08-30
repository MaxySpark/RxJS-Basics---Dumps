import { fromEvent } from 'rxjs';

const observer = {
  next: (value: any) => console.log('next', value),
  error: (error: any) => console.log('error', error),
  complete: () => console.log('complete'),
};

const source$ = fromEvent(document, 'click');

const subscription = source$.subscribe(observer);
const subscriptionTwo = source$.subscribe(observer);

// subscription.add(subscriptionTwo);

setTimeout(() => {
  console.log('Unsubscribing subscription');
  subscription.unsubscribe();
  // subscriptionTwo.unsubscribe();
}, 3500);
