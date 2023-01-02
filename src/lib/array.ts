const getRangeFrom = (start: number, count: number) =>
  Number.isNaN(start) || Number.isNaN(count)
    ? []
    : Array.from(Array(Math.abs(count)).keys()).map((_, i, a) =>
        count > 1 ? start + a[i] : start - a[i]
      );

export { getRangeFrom };
