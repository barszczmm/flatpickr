import flatpickr from "index";
import weekSelectPlugin from "plugins/weekSelect/weekSelect";
import { Instance } from "types/instance";
import { Plugin } from "types/options";

flatpickr.defaultConfig.animate = false;

jest.useFakeTimers();

describe("weekSelect", () => {
  describe("on a mobile device", () => {
    const userAgent = Object.getOwnPropertyDescriptor(
      window.navigator,
      "userAgent"
    );

    beforeEach(() => {
      Object.defineProperty(window.navigator, "userAgent", {
        value: "Android",
        configurable: true,
      });
    });

    afterEach(() => {
      if (userAgent)
        Object.defineProperty(window.navigator, "userAgent", userAgent);
      else delete (window.navigator as any).userAgent;
    });

    it("uses the calendar instead of a native input", () => {
      const instance = flatpickr(document.createElement("input"), {
        plugins: [weekSelectPlugin() as Plugin],
        defaultDate: new Date(2019, 2, 20),
      }) as Instance;

      expect(instance.isMobile).toBe(false);
      expect(instance.mobileInput).toBeUndefined();
      expect(
        instance.days.querySelectorAll(".flatpickr-day.week.selected").length
      ).toEqual(7);

      instance.destroy();
    });
  });
});
