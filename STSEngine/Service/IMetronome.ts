﻿namespace STSEngine {
    "use strict";

    export interface IMetronome {
        start(startTime?: number): void;
        getStartTime(): number;
        pause(): void;
        resume(): void;
        getTickLength(): number;
        getTickCount(): number;
    }
}