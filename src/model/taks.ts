interface Tasks extends Note {
    lastDateForExecution: Date;
    alert(): void;
}