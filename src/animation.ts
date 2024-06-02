import "animate.css";

export const animate = (
  element: HTMLElement,
  animation: string,
  duration?: string,
  prefix = "animate__",
): Promise<undefined> => {
  return new Promise((resolve) => {
    const animated = `${prefix}animated`;
    const animationName = `${prefix}${animation}`;
    const before = element.style.getPropertyValue("--animate-duration");
    if (!!duration) {
      element.style.setProperty("--animate-duration", duration);
    }
    element.classList.add(animated, animationName);

    element.addEventListener(
      "animationend",
      (event) => {
        event.stopPropagation();
        if (!!duration) {
          if (!before) {
            element.style.removeProperty("--animate-duration");
          } else {
            element.style.setProperty("--animate-duration", before);
          }
        }

        element.classList.remove(animated, animationName);
        resolve(undefined);
      },
      { once: true },
    );
  });
};
