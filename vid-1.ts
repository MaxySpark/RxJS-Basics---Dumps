import { Observable } from 'rxjs';

const observer = {
  next: (value: any) => console.log('next', value),
  error: (error: any) => console.log('error', error),
  complete: () => console.log('complete'),
};

const observable = new Observable((subscriber) => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

observable.subscribe(observer);
