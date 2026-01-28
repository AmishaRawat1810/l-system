export const algeaSystem = (count, axiom) => {
  if (count <= 0) return axiom;

  let algae;
  algae = axiom.replace("B", "A");
  algae = algae.replace("A", "AB");

  return algeaSystem(--count, algae);
};
