// 🧩 Exercício 4: Marcar item como selecionado

type Item = { id: number; label: string };

function markSelected(
  items: Item[],
  selectedId: number,
): (Item & { selected: boolean })[] {
  // ...
}
