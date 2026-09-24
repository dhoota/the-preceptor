/**
 * Text to speech with on-device engines only. No cloud voices.
 * Native: @capacitor-community/text-to-speech (AVSpeechSynthesizer on iOS,
 * android.speech.tts on Android). Browser: the Web Speech API, which uses the
 * operating system voices.
 */

function isNative(): boolean {
  try {
    const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
    return Boolean(cap?.isNativePlatform?.());
  } catch {
    return false;
  }
}

/** Makes clinical shorthand read naturally. "BP 80/50" becomes "B P 80 over 50". */
export function speakable(text: string): string {
  return text
    .replace(/(\d+)\s*\/\s*(\d+)/g, "$1 over $2")
    .replace(/\bmmol\/L\b/g, "millimoles per litre")
    .replace(/\bmg\/kg\b/g, "milligrams per kilogram")
    .replace(/\bmL\/kg\b/g, "millilitres per kilogram")
    .replace(/\bmEq\/kg\b/g, "milliequivalents per kilogram")
    .replace(/\bSpO2\b/g, "sat")
    .replace(/\bIV\b/g, "I V")
    .replace(/\bED\b/g, "E D")
    .replace(/\bECG\b/g, "E C G")
    .replace(/\bICU\b/g, "I C U")
    .replace(/\s+/g, " ")
    .trim();
}

export async function speak(text: string, rate = 1): Promise<void> {
  const clean = speakable(text);
  if (!clean) return;
  if (isNative()) {
    try {
      const { TextToSpeech } = await import("@capacitor-community/text-to-speech");
      await TextToSpeech.stop();
      await TextToSpeech.speak({ text: clean, lang: "en-CA", rate, pitch: 1, volume: 1, category: "playback" });
      return;
    } catch {
      return;
    }
  }
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = "en-CA";
  u.rate = rate;
  // Only local voices. Some browsers offer network voices. Skip them.
  const local = window.speechSynthesis.getVoices().filter((v) => v.localService && v.lang.startsWith("en"));
  const pick = local.find((v) => v.lang === "en-CA") ?? local[0];
  if (pick) u.voice = pick;
  window.speechSynthesis.speak(u);
}

export async function stopSpeaking(): Promise<void> {
  if (isNative()) {
    try {
      const { TextToSpeech } = await import("@capacitor-community/text-to-speech");
      await TextToSpeech.stop();
    } catch {
      // ignore
    }
    return;
  }
  if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
}
