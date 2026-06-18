// Patches of the grid where the lines slowly brighten and fade. Each patch is
// snapped to the 28px cell boundary (same origin as the base grid) and spans a
// few cells, so it lights up part of the real grid rather than floating on top.
const CELL = 28;

const twinkles = [
  { col: 4, row: 2, cells: 2, delay: 0, duration: 7 },
  { col: 22, row: 3, cells: 3, delay: 2.4, duration: 9 },
  { col: 38, row: 5, cells: 2, delay: 4.1, duration: 8 },
  { col: 12, row: 8, cells: 2, delay: 1.2, duration: 10 },
  { col: 30, row: 9, cells: 3, delay: 5.6, duration: 7.5 },
  { col: 45, row: 12, cells: 2, delay: 3.3, duration: 9.5 },
  { col: 6, row: 14, cells: 3, delay: 0.8, duration: 8.5 },
  { col: 26, row: 16, cells: 2, delay: 6.2, duration: 7 },
  { col: 41, row: 18, cells: 2, delay: 2.9, duration: 10 },
  { col: 16, row: 20, cells: 3, delay: 4.7, duration: 8 },
  { col: 34, row: 22, cells: 2, delay: 1.7, duration: 9 },
  { col: 9, row: 25, cells: 2, delay: 5.1, duration: 7.5 },
];

const GridOverlay = () => (
  <div className="grid-overlay" aria-hidden="true">
    {twinkles.map((cell, index) => (
      <span
        key={index}
        className="grid-twinkle"
        style={{
          left: `${cell.col * CELL}px`,
          top: `${cell.row * CELL}px`,
          width: `${cell.cells * CELL}px`,
          height: `${cell.cells * CELL}px`,
          animationDelay: `${cell.delay}s`,
          animationDuration: `${cell.duration}s`,
        }}
      />
    ))}
  </div>
);

export default GridOverlay;
