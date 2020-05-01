import { BaseMetronome } from "./baseMetronome";

export class ScheduledMetronome extends BaseMetronome {
    constructor(plan) {
        super();
        this.plan = plan;
        this.tickTimeouts = [];
    }

    start(callbackFn) {
        super.start();

        let now = this.audioCtx.currentTime;

        this.plan.forEach((segment, index) => {
            console.log(
                `scheduling for segment : ${index + 1}. With tempo : ${
                segment.tempo
                } and Ticks : ${segment.ticks}.`
            );

            const timeoutDuration = 60 / segment.tempo;

            // Schedule all the clicks ahead.
            for (let i = 0; i < segment.ticks; i++) {
                this.clickAtTime(now);
                const x = now;
                this.tickTimeouts.push(setTimeout(() => callbackFn(x, segment.tempo), now * 1000));
                now += timeoutDuration;
            }
        });
    }

    stopM(callbackFn) {
        this.stop(callbackFn);

        this.tickTimeouts.forEach((timeOut)=> {
            clearTimeout(timeOut);
        });

        this.tickTimeouts = [];
    }
}