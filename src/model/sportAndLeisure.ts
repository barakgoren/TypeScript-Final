interface SportsAndLeisure extends Note {
    location: string;
    trainingDateEvent: Date;
    time: string;
    requiredEquipment: string[];
    alert(): void;
}