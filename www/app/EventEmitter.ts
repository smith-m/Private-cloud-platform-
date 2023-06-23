/// <reference path="./References.d.ts"/>
import * as Events from 'events';

export default class EventEmitter extends Events.EventEmitter {
	emitDefer(event: string | symbol, ...args: any[]): void {
		setTimeout((): void => {
			this.emit(event, ...args);
			// React will only re-render once at the end (that's batching!)
		});
	}
}