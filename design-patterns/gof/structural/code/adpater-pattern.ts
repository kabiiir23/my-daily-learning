interface Logger {
	log(value: any): void;
}

class StringLogger implements Logger {
	public log(value: string) {
		console.log(value);
	}
}

class ObjectPrinter {
	public print(object: Record<string, any>) {
		console.dir(object, { depth: null });
	}
}

// The ObjectPrinter does not implement Logger interface.
// The adapter lets us use ObjectPrinter adapt to the Logger interface without changing the code in the class.
class PrinterAdapter implements Logger {
	constructor(readonly objectPrinter: ObjectPrinter) {}

	public log(value: Record<string, any>): void {
		this.objectPrinter.print(value);
	}
}

const main = (): void => {
	const stringLogger = new StringLogger();
	stringLogger.log('Logged from StringLogger');

	const objectLogger = new PrinterAdapter(new ObjectPrinter());
	objectLogger.log({ a: { b: 1 } });
};

main();
