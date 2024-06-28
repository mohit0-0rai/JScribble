import { 
	of,
	map,
	pipe,
	interval,
	Subject,
	take,
	tap,
	delay,
	mergeWith,
	first,
	mergeMap,
	combineLatest,
	timestamp,
	concatMap,
	from,
	debounceTime,
	BehaviorSubject
	} from 'rxjs';
import moment from 'moment'

// of([1, 2, 3, 4, 5]).pipe(tap(x => console.log(`Emitted: ${x}`)), delay(500))
      // .subscribe(x => console.log(`Received: ${x}`));
// const source1$ = interval(1000)
//   .pipe(map(x => `Source 1 ${x}`),take(3));
// const source2$ = interval(1000)
//   .pipe(map(y => `Source 2 ${y}`), take(3));
// const test$ = of([1, 2, 3]).pipe(first()).subscribe(console.log);
// merge(source1$, source2$).subscribe(console.log)
// source1$.pipe(mergeWith(source2$)).subscribe(console.log)

// -----------------------propagate first observable values to the end in chain---
// const symbol$ = of('fb', 'ap', 'fi');
// const twoSec$ = (symbol:any) => interval(2000).pipe(map(() => symbol));
// symbol$.pipe(mergeMap(twoSec$)).subscribe((symbol) => console.log(`${symbol}`));
// --------------------------
// const symbol$ = of('fb', 'ap', 'fi').pipe(take(1));
// const twoSec$ = interval(500);
// combineLatest(symbol$, twoSec$).pipe(take(5)).subscribe(([sym, num]:any) => console.log(`${sym}-${num}`))
// const obj = {name: 'name'}
// const value = 10;
// const obj1 = {...obj, value}
// const func = (symbol: any) => of(symbol).pipe(delay(1000));
// from([1, 2, 3]).pipe(concatMap(func), map(res => moment().format("MM/DD/YYYY HH:mm:ss"))).subscribe(console.log);
let bs = new Subject<string>();
bs.subscribe(console.log);
interval(1000).pipe(map(res => moment().format("MM/DD/YYYY HH:mm:ss A"))).subscribe(r => bs.next(r));
