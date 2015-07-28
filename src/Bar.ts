module Bar {

    class parentBar {
        private _bar: number;
        public anotherBar: number;

        constructor(val: number) {
            this.anotherBar = val;
        }

        get bar(): number {
            console.log('getter');
            return this._bar;
        }

        set bar(value: number) {
            console.log('setter');
            this._bar = value;
        }

        public doSomething<T>(arg: T): T {
            return arg;
        }

    }

    interface GenericIndentityFn {
        length: number;
    }

   export class ChildBar extends parentBar {
        constructor() {
            super(5);
        }
    }

}
export = Bar;