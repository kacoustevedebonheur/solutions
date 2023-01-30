// Import stylesheets
import './style.css';

function minMax(list: number[]): { min: number; max: number } {
  if (list?.length === 1) {
    return { min: list[0], max: list[0] };
  } else if (list?.length === 2) {
    const min = list[0] > list[1] ? list[1] : list[0];
    const max = list[0] < list[1] ? list[1] : list[0];
    return { min, max };
  } else {
    const mid = (list?.length - 1) / 2;
    const { min: LMin, max: LMax } = minMax(
      list.filter((i, index) => index >= 0 && index <= mid)
    );
    const { min: RMin, max: Rmax } = minMax(
      list.filter((i, index) => index >= mid && index <= list?.length)
    );
    const min = LMin > RMin ? RMin : LMin;
    const max = LMax < Rmax ? Rmax : LMax;

    return { min, max };
  }
}

const list = [2, 8, 7, 23, 3, 1, 9, -1, 10, -2, -34, 36, 37];
console.info(minMax(list));
