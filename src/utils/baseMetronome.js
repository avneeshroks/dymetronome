/*
 * Base metronome, with no timing.
 * More like a "click on command" class.
 */
export class BaseMetronome {
    constructor() {
        this.playing = false;

        this.audioCtx = null;
        this.tick = null;
        this.tickVolume = null;
        this.soundHz = 1000;
    }

    initAudio() {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        this.tick = this.audioCtx.createOscillator();
        this.tickVolume = this.audioCtx.createGain();

        this.tick.type = "sine";
        this.tick.frequency.value = this.soundHz;
        this.tickVolume.gain.value = 0;

        this.tick.connect(this.tickVolume);
        this.tickVolume.connect(this.audioCtx.destination);
        this.tick.start(0); // No offset, start immediately.
    }

    click(callbackFn) {
        const time = this.audioCtx.currentTime;
        this.clickAtTime(time);

        if (callbackFn) {
            callbackFn(time);
        }
    }

    clickAtTime(time) {
        // Silence the click.
        this.tickVolume.gain.cancelScheduledValues(time);
        this.tickVolume.gain.setValueAtTime(0, time);

        // Audible click sound.
        this.tickVolume.gain.linearRampToValueAtTime(1, time + 0.001);
        this.tickVolume.gain.linearRampToValueAtTime(0, time + 0.001 + 0.01);
    }

    start(callbackFn) {
        if (this.playing) {
            this.stop();
        }
        this.playing = true;
        this.initAudio();
    }

    stop(callbackFn) {
        this.tick.stop();
        this.playing = false;
        this.audioCtx = null;
        this.tickVolume.gain.value = 0;
    }
}
