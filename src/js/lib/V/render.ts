export function render(mountNode: HTMLElement, element: HTMLElement): void {
  mountNode.innerHTML = "";
  mountNode.append(element);
}
