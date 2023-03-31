
/**
 * The base coordinates for the Crunge brush. Every coordinate is relative
 * since, well, it's for a brush.
 */

const CRUNGE_PATTERN = [
  [
    -17, -23, -18, -23,
    -27, -19, -30, -16,
    -31, -12, -33, -8,
    -35, -2, -36, 5,
    -36, 10, -36, 15,
    -33, 20, -30, 24,
    -24, 27, -18, 28,
    -11, 29, 4, 29,
    11, 28, 20, 24,
    25, 21, 29, 17,
    34, 13, 36, 8,
    36, 5, 37, 4,
    37, -3, 35, -8,
    34, -11, 31, -16,
    29, -21, 25, -25,
    21, -28, 18, -29,
    18, -20, 17, -17,
    14, -12, 9, -9,
    2, -7, -9, -7,
    -13, -8, -16, -9,
    -19, -12, -17, -23
  ], [
    -17, 8, -18, 9,
    -18, 12, -18, 13,
    -14, 13, -14, 10,
    -16, 10, -16, 12,
    -16, 10, -17, 10
  ], [
    21, -5, 20, -5,
    20, -3, 22, -2,
    23, -3, 23, -5,
    22, -6, 20, -6,
    20, -3
  ], [
    -7, 30, -7, 29,
    -8, 25, -8, 23,
    -7, 19, -3, 11,
    3, 7, 8, 5,
    15, 5, 19, 6,
    22, 7, 24, 9,
    26, 12, 28, 15
  ], [
    -5, 16, -4, 16,
    -1, 18, 0, 18,
    1, 18, 1, 17,
    1, 15, 0, 12,
    0, 10
  ], [
    17, 6, 17, 15,
    18, 16, 19, 15,
    20, 13, 22, 9
  ]
];
const CRUNGE_LENGTH = CRUNGE_PATTERN.reduce((acc, line, index) => acc + (line.length * 2) + (index > 0), 0);